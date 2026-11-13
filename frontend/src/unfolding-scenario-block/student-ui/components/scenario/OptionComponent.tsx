import { Icon } from '@openedx/paragon';
import { ArrowForward } from '@openedx/paragon/icons';
import type { ReactNode } from 'react';

interface OptionProps {
  onClick: () => void;
  active: boolean;
  preSelected: boolean;
  children: ReactNode;
}

export const OptionComponent = ({
  onClick,
  children,
  active,
  preSelected,
}: OptionProps) => (
  <button
    className={`scenario-option-btn ${active ? 'text-interact-content-inverse bg-interact-raised-emphasis active' : 'bg-interact-raised text-interact-content'} ${preSelected ? 'pre-selected' : ''}`}
    onClick={onClick}
  >
    <div className="flex-grow-1 text-left mx-3 px-3 my-3">{children}</div>
    <div className="hover-arrow">
      <Icon src={ArrowForward} size="lg" />
    </div>
  </button>
);
