import type { KeyboardEvent } from 'react';

/**
 * Move focus and selection within a radiogroup using arrow keys.
 * WAI-ARIA roving-focus pattern for `role="radio"` buttons.
 */
export function handleRadioKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
  const group = event.currentTarget.parentElement;
  if (!group) {
    return;
  }
  const radios = Array.from(
    group.querySelectorAll<HTMLButtonElement>('[role="radio"]'),
  );
  const index = radios.indexOf(event.currentTarget);
  let next = -1;
  switch (event.key) {
    case 'ArrowDown':
    case 'ArrowRight':
      next = (index + 1) % radios.length;
      break;
    case 'ArrowUp':
    case 'ArrowLeft':
      next = (index - 1 + radios.length) % radios.length;
      break;
    default:
      return;
  }
  event.preventDefault();
  radios[next]?.focus();
  radios[next]?.click();
}
