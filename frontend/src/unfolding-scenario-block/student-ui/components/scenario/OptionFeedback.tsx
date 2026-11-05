import type {
  InteractionType,
  Option,
} from '@/unfolding-scenario-block/apiTypes';
import {
  breakpoints,
  Button,
  Icon,
  IconButton,
  useWindowSize,
} from '@openedx/paragon';
import {
  Cancel,
  CheckCircleOutline,
  KeyboardReturn,
  Warning,
} from '@openedx/paragon/icons';

interface OptionFeedbackProps {
  option: Option;
  interactionType: InteractionType;
  isContinueEnabled: boolean;
  onContinue: () => void;
  onReturn: () => void;
}

export const OptionFeedback = ({
  option,
  interactionType,
  isContinueEnabled,
  onContinue,
  onReturn,
}: OptionFeedbackProps) => {
  const windowSize = useWindowSize();
  const width = windowSize.width || window.innerWidth;
  return (
    <div
      className={`option-feedback-wrapper position-fixed fixed-top fixed-bottom w-100 h-100 bg-interact-raised ${width < breakpoints.extraSmall.maxWidth! ? 'p-4' : 'p-4-5'}`}
    >
      <div className="w-100 h-100 position-relative d-flex flex-column justify-content-center">
        <p className="text-interact-headings font-size-md font-weight-bold">
          {option.value}
        </p>
        <OptionFeedbackContent option={option} />
        <IconButton
          className="text-icon-action-sec-neutral"
          src={KeyboardReturn}
          alt="Return"
          onClick={onReturn}
        />
        {interactionType == 'SelectOne' && (
          <div
            className="position-absolute w-100 text-right"
            style={{ bottom: 0 }}
          >
            <Button
              variant="unfolding-scenario-action"
              className={`rounded-pill ${width < breakpoints.extraSmall.maxWidth! ? 'w-100' : ''}`}
              disabled={!isContinueEnabled}
              onClick={onContinue}
            >
              Continue
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

interface OptionFeedbackContentProps {
  option: Option;
}

export const OptionFeedbackContent = ({
  option,
}: OptionFeedbackContentProps) => {
  let iconSrc = null;
  let title = '';
  let variant = '';
  switch (option.type) {
    case 'Correct':
      iconSrc = CheckCircleOutline;
      title = 'Correct';
      variant = 'positive';
      break;
    case 'Incorrect':
      iconSrc = Cancel;
      title = 'Incorrect';
      variant = 'negative';
      break;
    case 'Warning':
      iconSrc = Warning;
      title = 'Warning';
      variant = 'warning';
  }

  return (
    <>
      <p className="d-flex">
        <Icon src={iconSrc} className={`text-icon-interact-${variant} mr-2`} />
        <span className={`text-feedback-${variant}`}>{title}</span>
      </p>
      <p className="text-interact-content">{option.feedback}</p>
    </>
  );
};
