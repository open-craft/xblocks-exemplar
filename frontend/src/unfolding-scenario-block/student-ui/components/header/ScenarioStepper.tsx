import { IconButton } from '@openedx/paragon';
import { Replay } from '@openedx/paragon/icons';

interface ScenarioStepperProps {
  index: number;
  total: number;
  onReset: () => void;
  className: string;
}

export const ScenarioStepper = ({
  index,
  total,
  onReset,
  className,
}: ScenarioStepperProps) => {
  return (
    <div
      className={`align-items-center justify-content-center bg-main ${className}`}
    >
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
