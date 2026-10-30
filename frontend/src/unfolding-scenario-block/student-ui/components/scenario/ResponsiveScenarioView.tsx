import { useState } from 'react';
import { useWindowSize, breakpoints } from '@openedx/paragon';
import {
  type InteractionType,
  type Scenario,
} from '@/unfolding-scenario-block/apiTypes';
import { DesktopScenarioView } from './DesktopScenarioView';
import { TabletScenarioView } from './TabletScenarioView';
import { MobileScenarioView } from './MobileScenarioView';

interface ResponsiveScenarioViewProps {
  scenario: Scenario;
  interactionType: InteractionType;
  onContinue: () => void;
  onSelectOption: (i: number) => void;
}

export const ResponsiveScenarioView = ({
  interactionType,
  scenario,
  onContinue,
  onSelectOption,
}: ResponsiveScenarioViewProps) => {
  const windowSize = useWindowSize();
  const [activeOptionIndex, setActiveOptionIndex] = useState<number | null>(
    null,
  );
  // a set of option indices that the user has selected in this session
  const [preSelectedOptions, setPreSelectedOptions] = useState<Set<number>>(
    new Set(),
  );

  const isContinueEnabled =
    // In explore mode, only enable if user has clicked through all options
    (interactionType == 'Explore' &&
      preSelectedOptions.size == scenario.options.length) ||
    // In select one mode, enable if there is an active option currently
    (interactionType == 'SelectOne' && activeOptionIndex !== null);

  const width = windowSize.width || window.innerWidth;
  if (width < breakpoints.extraSmall.maxWidth!) {
    return (
      <MobileScenarioView
        scenario={scenario}
        activeOptionIndex={activeOptionIndex}
        preSelectedOptions={preSelectedOptions}
        isContinueEnabled={isContinueEnabled}
        onContinue={onContinue}
        onSelectOption={(i: number | null) => {
          if (i === null) {
            setActiveOptionIndex(null);
          } else {
            setPreSelectedOptions(new Set([...preSelectedOptions, i]));
            setActiveOptionIndex(i);
            onSelectOption(i);
          }
        }}
      />
    );
  } else if (width < breakpoints.large.maxWidth!) {
    return (
      <TabletScenarioView
        scenario={scenario}
        activeOptionIndex={activeOptionIndex}
        preSelectedOptions={preSelectedOptions}
        isContinueEnabled={isContinueEnabled}
        onContinue={onContinue}
        onSelectOption={(i: number | null) => {
          if (i === null) {
            setActiveOptionIndex(null);
          } else {
            setPreSelectedOptions(new Set([...preSelectedOptions, i]));
            setActiveOptionIndex(i);
            onSelectOption(i);
          }
        }}
      />
    );
  } else {
    return (
      <DesktopScenarioView
        scenario={scenario}
        activeOptionIndex={activeOptionIndex}
        preSelectedOptions={preSelectedOptions}
        isContinueEnabled={isContinueEnabled}
        onContinue={onContinue}
        onSelectOption={(i: number | null) => {
          if (i === null) {
            setActiveOptionIndex(null);
          } else {
            setPreSelectedOptions(new Set([...preSelectedOptions, i]));
            setActiveOptionIndex(i);
            onSelectOption(i);
          }
        }}
      />
    );
  }
};
