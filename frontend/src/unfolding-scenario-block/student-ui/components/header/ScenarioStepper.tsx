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
          <div
            className={`step-indicator d-flex justify-content-center align-items-center rounded-pill p-1 ${i <= index ? 'bg-icon-default text-interact-content' : 'bg-emphasis text-content'}`}
          >
            {i + 1}
          </div>
          {i < total - 1 && <div className="step-indicator-separator" />}
        </>
      ))}
      {index >= total && (
        <span className="ml-4 text-content font-size-md font-weight-bold">
          Completed!
        </span>
      )}
    </div>
  );
};
