import { Icon, IconButton, Button } from '@openedx/paragon';
import { ArrowOutward, KeyboardReturn } from '@openedx/paragon/icons';
import { OptionComponent } from './OptionComponent';
import { type Scenario } from '@/unfolding-scenario-block/apiTypes';
import { OptionFeedback } from './OptionFeedback';

interface DesktopScenarioViewProps {
  scenario: Scenario;
  activeOptionIndex: number | null;
  preSelectedOptions: Set<number>;
  isContinueEnabled: boolean;
  onContinue: () => void;
  onSelectOption: (i: number | null) => void;
}

export const DesktopScenarioView = ({
  scenario,
  activeOptionIndex,
  preSelectedOptions,
  isContinueEnabled,
  onContinue,
  onSelectOption,
}: DesktopScenarioViewProps) => {
  return (
    <div className="pt-3 mx-3 h-100">
      <div className="position-relative w-100 h-100 overflow-hidden">
        <div
          className={`d-flex h-100 w-50 position-absolute align-items-center ${activeOptionIndex !== null ? 'active' : ''} options-pane options-pane-1`}
        >
          <div>
            <p className="font-size-lg font-weight-bold text-interact-accent">
              {scenario.heading}
            </p>
            <p className="text-interact-content pb-3">{scenario.description}</p>
            <div className="d-flex align-items-center mt-3 mb-2">
              <div className="arrow-bubble p-2 text-icon-interact-default">
                <Icon src={ArrowOutward} />
              </div>
              <span className="text-interact-headings font-size-medium font-weight-bold pl-2">
                {scenario.instructionTitle}
              </span>
            </div>
            <p className="text-interact-content">
              {scenario.instructionDescription}
            </p>
          </div>
        </div>
        <div
          className={`d-flex w-50 h-100 position-absolute align-items-center ${activeOptionIndex !== null ? 'active' : ''} options-pane options-pane-2`}
        >
          {activeOptionIndex !== null && (
            <div className="d-flex mr-3 align-items-center">
              <IconButton
                className="text-icon-action-sec-neutral"
                src={KeyboardReturn}
                alt="Return"
                onClick={() => onSelectOption(null)}
              />
            </div>
          )}
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
        </div>
        <div
          className={`w-50 h-100 p-6 position-absolute d-flex align-items-center ${activeOptionIndex !== null ? 'active' : ''} options-pane options-pane-3`}
        >
          {activeOptionIndex !== null ? (
            <OptionFeedback option={scenario.options[activeOptionIndex]} />
          ) : null}
        </div>
      </div>
    </div>
  );
};
