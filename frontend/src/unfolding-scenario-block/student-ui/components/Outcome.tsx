import { useWindowSize, breakpoints } from '@openedx/paragon';
import { Button, Icon } from '@openedx/paragon';
import { type Outcome, type Scenario } from '../../apiTypes';
import { Close, Replay } from '@openedx/paragon/icons';
import { OutcomeSelectedOptions } from './OutcomeSelectedOptions';

interface OutcomeProps {
  outcome: Outcome;
  scenarios: Scenario[];
  selectedOptions: Map<number, number>;
  onRestart: () => void;
  onExit: () => void;
  imageURL: string;
}

export const OutcomeComponent = ({
  outcome,
  scenarios,
  selectedOptions,
  onRestart,
  onExit,
  imageURL,
}: OutcomeProps) => {
  const windowSize = useWindowSize();
  const width = windowSize.width || window.innerWidth;

  let variant: 'mobile' | 'desktop' = 'desktop';
  if (width < breakpoints.extraSmall.maxWidth!) {
    variant = 'mobile';
  }

  return (
    <div className="d-flex flex-grow-1 flex-wrap">
      <div
        className="p-4-5 bg-interact-default"
        style={{
          flex: `0 0 ${variant == 'desktop' ? '60%' : '100%'}`,
        }}
      >
        <p className="font-size-lg font-weight-bold text-interact-accent">
          {outcome.heading}
        </p>
        <div
          className="text-interact-content pb-3"
          dangerouslySetInnerHTML={{ __html: outcome.description }}
        />
        {outcome.displaySelectedOptions && (
          <OutcomeSelectedOptions
            scenarios={scenarios}
            selectedOptions={selectedOptions}
          />
        )}
      </div>
      <div
        className="d-flex flex-column"
        style={{
          flex: `0 0 ${variant == 'desktop' ? '40%' : '100%'}`,
          backgroundImage: `linear-gradient(to bottom, transparent 60%, #FFF), url("${imageURL}")`,
          backgroundSize: 'cover',
          minHeight: '10rem',
        }}
      >
        <div className="fixed-bottom align-content-end text-right p-4-5">
          <Button
            variant="outline-unfolding-scenario-action"
            className={`rounded-pill ${variant == 'mobile' ? 'w-100 mb-3' : ''}`}
            onClick={onRestart}
            block={variant == 'mobile'}
          >
            Restart <Icon src={Replay} />
          </Button>
          <Button
            variant="unfolding-scenario-action"
            className={`rounded-pill ${variant == 'mobile' ? 'w-100' : 'ml-3'}`}
            onClick={onExit}
            block={variant == 'mobile'}
          >
            Exit <Icon src={Close} />
          </Button>
        </div>
      </div>
    </div>
  );
};
