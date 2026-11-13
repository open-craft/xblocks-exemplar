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
  <div className="d-flex flex-column h-100 w-100">
    <div className="d-flex flex-column pt-4 px-4 flex-grow-1 w-100 bg-interact-default">
      <h5 className="text-interact-accent">{scenario.heading}</h5>
      <div
        className="text-interact-content pb-3"
        dangerouslySetInnerHTML={{ __html: scenario.description }}
      />
      <div className="d-flex align-items-center mt-3 mb-2">
        <div className="arrow-bubble">
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
      <div className="d-flex flex-column justify-content-end flex-grow-1 w-100 bg-interact-default">
        <Button variant="primary" className="w-100 mb-4" onClick={onNext}>
          Continue
        </Button>
      </div>
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
  <div className="p-4 h-100 w-100 d-flex flex-column bg-interact-default">
    <IconButton
      className="text-icon-action-sec-neutral"
      src={KeyboardReturn}
      alt="Return"
      onClick={onBack}
    />
    <h5 className="text-interact-headings">{scenario.prompt}</h5>
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
      <Button
        variant="primary"
        className="w-100"
        disabled={!isContinueEnabled}
        onClick={onContinue}
      >
        Continue
      </Button>
    )}
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
