import { useWindowSize, breakpoints } from '@openedx/paragon';
import { type ActivityHeaderProps } from './header-common';
import { DesktopActivityHeader } from './DesktopActivityHeader';
import { MobileActivityHeader } from './MobileActivityHeader';
import { TabletActivityHeader } from './TabletActivityHeader';

export const ResponsiveActivityHeader = ({
  onClose,
  title,
  onReset,
  activeScenarioIndex,
  totalScenarios,
}: ActivityHeaderProps) => {
  const windowSize = useWindowSize();
  const width = windowSize.width || window.innerWidth;

  if (width < breakpoints.extraSmall.maxWidth!) {
    return (
      <MobileActivityHeader
        onClose={onClose}
        title={title}
        activeScenarioIndex={activeScenarioIndex}
        totalScenarios={totalScenarios}
      />
    );
  } else if (width < breakpoints.large.maxWidth!) {
    return (
      <TabletActivityHeader
        onClose={onClose}
        title={title}
        onReset={onReset}
        activeScenarioIndex={activeScenarioIndex}
        totalScenarios={totalScenarios}
      />
    );
  } else {
    return (
      <DesktopActivityHeader
        onClose={onClose}
        title={title}
        onReset={onReset}
        activeScenarioIndex={activeScenarioIndex}
        totalScenarios={totalScenarios}
      />
    );
  }
};
