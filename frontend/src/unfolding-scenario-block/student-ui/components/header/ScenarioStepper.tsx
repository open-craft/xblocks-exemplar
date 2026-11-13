import { IconButton } from '@openedx/paragon';
import { Replay } from '@openedx/paragon/icons';

interface ScenarioStepperProps {
  index: number;
  total: number;
  onReset: () => void;
  variant: 'desktop' | 'tablet';
}

export const ScenarioStepper = ({
  index,
  total,
  onReset,
  variant,
}: ScenarioStepperProps) => {
  return (
    <div className={`scenario-stepper scenario-stepper-${variant}`}>
      <IconButton
        className="text-icon-action-default bg-main mr-3"
        src={Replay}
        onClick={onReset}
        alt="Reset activity"
        size="inline"
      />
      {Array.from(Array(total)).map((_, i) => (
        <>
          <div className={`step-indicator ${i <= index ? 'active' : ''}`}>
            {i + 1}
          </div>
          {i < total - 1 && <div className="step-indicator-separator" />}
        </>
      ))}
      {index >= total && (
        <div className="step-indicator-completed">Completed!</div>
      )}
    </div>
  );
};
