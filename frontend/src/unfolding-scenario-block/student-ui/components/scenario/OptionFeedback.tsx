import type { FeedbackType, Option } from '@/unfolding-scenario-block/apiTypes';
import { Icon } from '@openedx/paragon';
import { Cancel, CheckCircleOutline, Warning } from '@openedx/paragon/icons';

interface OptionFeedbackProps {
  option: Option;
}

export const OptionFeedback = ({ option }: OptionFeedbackProps) => (
  <div>
    <OptionFeedbackTitle type={option.type} />
    <p className="text-interact-content">{option.feedback}</p>
  </div>
);

interface OptionFeedbackTitleProps {
  type: FeedbackType;
}

const OptionFeedbackTitle = ({ type }: OptionFeedbackTitleProps) => {
  switch (type) {
    case 'Correct':
      return (
        <p className="d-flex">
          <Icon
            src={CheckCircleOutline}
            className="text-icon-interact-positive mr-2"
          />
          <span className="text-feedback-positive">Correct</span>
        </p>
      );
    case 'Incorrect':
      return (
        <p className="d-flex">
          <Icon src={Cancel} className="text-icon-interact-negative mr-2" />
          <span className="text-feedback-negative">Incorrect</span>
        </p>
      );
    case 'Warning':
      return (
        <p className="d-flex">
          <Icon src={Warning} className="text-icon-interact-warning mr-2" />
          <span className="text-feedback-warning">Warning</span>
        </p>
      );
  }
};
