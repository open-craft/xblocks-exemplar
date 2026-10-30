import { Icon, IconButton, Button } from '@openedx/paragon';
import { ArrowOutward, KeyboardReturn } from '@openedx/paragon/icons';
import { OptionComponent } from './OptionComponent';
import { type Scenario } from '@/unfolding-scenario-block/apiTypes';
import { OptionFeedback } from './OptionFeedback';

interface TabletScenarioViewProps {
  scenario: Scenario;
  activeOptionIndex: number | null;
  preSelectedOptions: Set<number>;
  isContinueEnabled: boolean;
  onContinue: () => void;
  onSelectOption: (i: number | null) => void;
}

export const TabletScenarioView = ({
  scenario,
  activeOptionIndex,
  preSelectedOptions,
  isContinueEnabled,
  onContinue,
  onSelectOption,
}: TabletScenarioViewProps) => {
  return (
    <div className="position-relative w-100 h-100 overflow-hidden">
      <div
        className={`w-100 h-100 position-absolute p-4 d-flex flex-column ${activeOptionIndex !== null ? 'active' : ''} tablet-options-pane tablet-options-pane-1`}
      >
        <div>
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
        </div>
        <div
          className="text-interact-content"
          dangerouslySetInnerHTML={{ __html: scenario.instructionDescription }}
        />
        <div className="flex-grow-1">
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
        </div>
        <div className="d-flex justify-content-end">
          <Button
            variant="unfolding-scenario-action"
            className="rounded-pill"
            disabled={!isContinueEnabled}
            onClick={onContinue}
          >
            Continue
          </Button>
        </div>
      </div>
      <div
        className={`w-100 h-100 position-absolute d-flex flex-column justify-content-center p-4-5 bg-interact-raised ${activeOptionIndex !== null ? 'active' : ''} tablet-options-pane tablet-options-pane-2`}
      >
        {activeOptionIndex !== null && (
          <>
            <p className="text-interact-headings font-size-md font-weight-bold">
              {scenario.options[activeOptionIndex].value}
            </p>
            <OptionFeedback option={scenario.options[activeOptionIndex]} />
            <IconButton
              className="text-icon-action-sec-neutral"
              src={KeyboardReturn}
              alt="Return"
              onClick={() => onSelectOption(null)}
            />
          </>
        )}
      </div>
    </div>
  );
};
