import { Dropdown } from '@openedx/paragon';
import {
  useState,
  forwardRef,
  useId,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import IconPicker from '@/shared/components/IconPicker';

interface IconSelectorProps {
  currentIcon: string;
  onIconSelected: (icon: string) => void;
}

// Custom toggle forwarded ref so Dropdown has a real DOM button ref.
// Attach onClick via native addEventListener to work around React 18's
// event delegation not processing composed clicks inside Shadow DOM.
const Toggle = forwardRef<
  HTMLButtonElement,
  { variant?: string } & React.ComponentPropsWithoutRef<'button'>
>(({ variant, ...rest }, forwardedRef) => {
  const { onClick, ...domProps } = rest;
  const innerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const btn = innerRef.current;
    if (!btn || !onClick) return;
    const handler = onClick as unknown as EventListener;
    btn.addEventListener('click', handler);
    return () => btn.removeEventListener('click', handler);
  }, [onClick]);

  const setButtonRef = useCallback(
    (node: HTMLButtonElement | null) => {
      innerRef.current = node;
      if (typeof forwardedRef === 'function') forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    },
    [forwardedRef],
  );

  return (
    <button
      ref={setButtonRef}
      {...domProps}
      // variant becomes CSS classes directly since custom toggle isn't Paragon Button
      className={[domProps.className, variant && `btn btn-${variant}`]
        .filter(Boolean)
        .join(' ')}
      type="button"
    />
  );
});
Toggle.displayName = 'IconSelectorToggle';

// Custom menu forwarded ref so Dropdown has a real DOM menu ref
// Drop show/close/alignRight — react-bootstrap passes these for custom
// components but they aren't valid DOM attributes
const Menu = forwardRef<
  HTMLDivElement,
  {
    show?: boolean;
    close?: () => void;
    alignRight?: boolean;
  } & React.ComponentPropsWithoutRef<'div'>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- react-bootstrap passes show/close/alignRight to custom Menu; destructure & discard to avoid spreading invalid DOM attrs
>(({ show: _show, close: _close, alignRight: _alignRight, ...rest }, ref) => (
  <div ref={ref} {...rest} />
));
Menu.displayName = 'IconSelectorMenu';

// These icons were manually chosen from the Google Fonts page listed as "most used" with a bit of
// filtering for relevance in a eductional setup.
const DEFAULT_ICONS = [
  'search',
  'home',
  'info',
  'check_circle',
  'delete',
  'visibility',
  'book',
  'favorite',
  'description',
  'lock',
  'schedule',
  'language',
  'help_outline',
  'verified',
  'face',
  'thumb_up',
  'filter_alt',
  'dashboard',
  'event',
  'fingerprint',
  'list',
  'help',
  'paid',
  'assignment',
  'question_answer',
  'article',
  'lightbulb',
  'credit_card',
  'account_balance',
  'trending_up',
];

export default function IconSelector({
  currentIcon,
  onIconSelected,
}: IconSelectorProps) {
  // Changes on every open, so the picker remounts with an empty search.
  const [openCount, setOpenCount] = useState(0);
  const toggleId = useId();

  return (
    <Dropdown
      onToggle={(isOpen: boolean) => {
        if (isOpen) setOpenCount((count) => count + 1);
      }}
    >
      <Dropdown.Toggle
        as={Toggle}
        variant={currentIcon ? 'outline-dark' : 'success'}
        className="d-block icon-selector pb-1"
        id={toggleId}
      >
        <span className="material-icons-outlined mb-0">
          {currentIcon || 'add'}
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu
        as={Menu}
        className="p-0 border-0"
        popperConfig={{ strategy: 'fixed' }}
      >
        <div className="icon-list-popup border rounded-sm shadow">
          <IconPicker
            key={openCount}
            autoFocus
            defaultIcons={DEFAULT_ICONS}
            selectedIcon={currentIcon}
            onSelect={onIconSelected}
            itemAs={Dropdown.Item}
          />
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}
