import { Container } from '@openedx/paragon';
import { type ActivityHeaderProps } from './header-common';
import { ActivityCloseButton } from '../ActivityCloseButton';

export const MobileActivityHeader = ({
  onClose,
  title,
  activeScenarioIndex,
  totalScenarios,
}: Omit<ActivityHeaderProps, 'onReset'>) => {
  return (
    <div className="sticky-top d-flex mx-2 mt-4 pb-2 bg-interact-default">
      <Container fluid className="d-flex align-items-center">
        <ProgressCircle
          current={Math.min(activeScenarioIndex + 1, totalScenarios)}
          total={totalScenarios}
        />
        <div className="px-2 mx-1 flex-grow-1">
          <div className="typography-headings font-weight-bold font-size-md text-interact-headings">
            {title}
          </div>
          {activeScenarioIndex >= totalScenarios && (
            <div className="text-interact-accent font-size-sm-md font-weight-lessbold typography-headings mt-n1">
              Completed!
            </div>
          )}
        </div>
        <ActivityCloseButton onClose={onClose} />
      </Container>
    </div>
  );
};

interface ProgressCircleProps {
  current: number;
  total: number;
}

const ProgressCircle = ({ current, total }: ProgressCircleProps) => {
  const size = 56; // px; outside height and width of the progress circle
  const strokeWidth = 4; // px

  const cy = size / 2;
  const radius = cy - strokeWidth / 2;
  const circumference = 2 * radius * Math.PI;
  const progress = circumference * (1 - current / total);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
      <circle
        r={radius}
        cx={cy}
        cy={cy}
        fill="none"
        stroke="var(--color-interact-raised-emphasis)"
        stroke-width={strokeWidth}
        stroke-dashoffset={circumference - progress}
        stroke-dasharray={circumference}
        transform={`rotate(${360 * (current / total) - 90} ${cy} ${cy})`}
      ></circle>
      <circle
        r={radius}
        cx={cy}
        cy={cy}
        fill="none"
        stroke="var(--color-interact-emphasis)"
        stroke-width={strokeWidth}
        stroke-dashoffset={progress}
        stroke-dasharray={circumference}
        transform={`rotate(-90 ${cy} ${cy})`}
      ></circle>
      <foreignObject x="0" y="0" width={size} height={size}>
        <div className="h-100 d-flex justify-content-center align-items-center text-interact-content font-size-sm">
          {current} of {total}
        </div>
      </foreignObject>
    </svg>
  );
};
