import { Icon, IconButton, Button } from '@openedx/paragon';
import { ArrowOutward, KeyboardReturn } from '@openedx/paragon/icons';
import { OptionComponent } from './OptionComponent';
import {
  type InteractionType,
  type Scenario,
} from '@/unfolding-scenario-block/apiTypes';
import { OptionFeedback } from './OptionFeedback';
import { useState } from 'react';

interface MobileScenarioViewProps {
  interactionType: InteractionType;
  scenario: Scenario;
  activeOptionIndex: number | null;
  preSelectedOptions: Set<number>;
  isContinueEnabled: boolean;
  onContinue: () => void;
  onSelectOption: (i: number | null) => void;
}

export const MobileScenarioView = ({
  interactionType,
  scenario,
  activeOptionIndex,
  preSelectedOptions,
  isContinueEnabled,
  onContinue,
  onSelectOption,
}: MobileScenarioViewProps) => {
  const [page, setPage] = useState<'description' | 'options'>('description');

  if (page == 'description') {
    return (
      <ScenarioDescription
        scenario={scenario}
        onNext={() => setPage('options')}
      />
    );
  } else {
    return (
      <ScenarioOptions
        interactionType={interactionType}
        scenario={scenario}
        activeOptionIndex={activeOptionIndex}
        isContinueEnabled={isContinueEnabled}
        onContinue={onContinue}
        onSelectOption={onSelectOption}
        preSelectedOptions={preSelectedOptions}
        onBack={() => setPage('description')}
      />
    );
  }
};

interface ScenarioDescriptionProps {
  scenario: Scenario;
  onNext: () => void;
}

const ScenarioDescription = ({
  scenario,
  onNext,
}: ScenarioDescriptionProps) => (
  <div className="p-4 d-flex flex-column w-100 h-100">
    <p className="font-size-lg font-weight-bold text-interact-accent">
      {scenario.heading}
    </p>
    <div
      className="text-interact-content pb-3"
      dangerouslySetInnerHTML={{ __html: scenario.description }}
    />
    <div className="d-flex align-items-center mt-3 mb-2">
      <div className="arrow-bubble p-2 text-icon-interact-default">
        <Icon src={ArrowOutward} />
      </div>
      <span className="text-interact-headings font-size-medium font-weight-bold pl-2">
        {scenario.instructionTitle}
      </span>
    </div>
    <div
      className="text-interact-content"
      dangerouslySetInnerHTML={{
        __html: scenario.instructionDescription,
      }}
    />
    <div className="d-flex flex-column justify-content-end flex-grow-1">
      <Button
        variant="unfolding-scenario-action"
        className="rounded-pill w-100"
        onClick={onNext}
      >
        Continue
      </Button>
    </div>
  </div>
);

interface ScenarioOptionsProps {
  interactionType: InteractionType;
  scenario: Scenario;
  activeOptionIndex: number | null;
  preSelectedOptions: Set<number>;
  isContinueEnabled: boolean;
  onContinue: () => void;
  onSelectOption: (i: number | null) => void;
  onBack: () => void;
}

const ScenarioOptions = ({
  interactionType,
  scenario,
  activeOptionIndex,
  preSelectedOptions,
  isContinueEnabled,
  onContinue,
  onSelectOption,
  onBack,
}: ScenarioOptionsProps) => (
  <div className="p-4 h-100 w-100">
    <div className="flex-grow-1">
      <IconButton
        className="text-icon-action-sec-neutral"
        src={KeyboardReturn}
        alt="Return"
        onClick={onBack}
      />
      <p className="text-interact-headings font-size-md font-weight-bold">
        {scenario.prompt}
      </p>
      <div className="d-flex flex-column flex-grow-1">
        {scenario.options.map((option, i) => (
          <OptionComponent
            active={activeOptionIndex === i}
            onClick={() => onSelectOption(i)}
            preSelected={preSelectedOptions.has(i)}
          >
            {option.value}
          </OptionComponent>
        ))}
      </div>
      {interactionType != 'SelectOne' && (
        <div className="d-flex justify-content-end">
          <Button
            variant="unfolding-scenario-action"
            className="rounded-pill w-100"
            disabled={!isContinueEnabled}
            onClick={onContinue}
          >
            Continue
          </Button>
        </div>
      )}
    </div>
    {activeOptionIndex !== null ? (
      <OptionFeedback
        interactionType={interactionType}
        isContinueEnabled={isContinueEnabled}
        onContinue={onContinue}
        option={scenario.options[activeOptionIndex]}
        onReturn={() => onSelectOption(null)}
      />
    ) : null}
  </div>
);
