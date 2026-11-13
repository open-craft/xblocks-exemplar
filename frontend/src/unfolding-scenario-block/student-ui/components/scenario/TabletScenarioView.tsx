import { Icon, Button } from '@openedx/paragon';
import { ArrowOutward } from '@openedx/paragon/icons';
import { OptionComponent } from './OptionComponent';
import {
  type InteractionType,
  type Scenario,
} from '@/unfolding-scenario-block/apiTypes';
import { OptionFeedback } from './OptionFeedback';

interface TabletScenarioViewProps {
  interactionType: InteractionType;
  scenario: Scenario;
  activeOptionIndex: number | null;
  preSelectedOptions: Set<number>;
  isContinueEnabled: boolean;
  onContinue: () => void;
  onSelectOption: (i: number | null) => void;
}

export const TabletScenarioView = ({
  interactionType,
  scenario,
  activeOptionIndex,
  preSelectedOptions,
  isContinueEnabled,
  onContinue,
  onSelectOption,
}: TabletScenarioViewProps) => {
  return (
    <div
      className="position-relative w-100 h-100"
      style={{ overflowX: 'hidden' }}
    >
      <div
        className={`w-100 h-100 position-absolute p-4 d-flex flex-column ${activeOptionIndex !== null ? 'active' : ''} tablet-options-pane tablet-options-pane-1`}
      >
        <div>
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
        </div>
        <div
          className="text-interact-content"
          dangerouslySetInnerHTML={{ __html: scenario.instructionDescription }}
        />
        <div className="flex-grow-1">
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
        </div>
        {interactionType != 'SelectOne' && (
          <div className="d-flex justify-content-end">
            <Button
              variant="primary"
              disabled={!isContinueEnabled}
              onClick={onContinue}
            >
              Continue
            </Button>
          </div>
        )}
      </div>
      <div
        className={`w-100 h-100 position-absolute d-flex flex-column justify-content-center p-3 m-3 bg-interact-raised ${activeOptionIndex !== null ? 'active' : ''} tablet-options-pane tablet-options-pane-2`}
      >
        {activeOptionIndex !== null && (
          <>
            <OptionFeedback
              option={scenario.options[activeOptionIndex]}
              interactionType={interactionType}
              isContinueEnabled={isContinueEnabled}
              onContinue={onContinue}
              onReturn={() => onSelectOption(null)}
            />
            {interactionType == 'SelectOne' && (
              <div className="d-flex justify-content-end">
                <Button
                  variant="primary"
                  disabled={!isContinueEnabled}
                  onClick={onContinue}
                >
                  Continue
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
