import { CheckCircle, HelpOutline, Visibility } from '@openedx/paragon/icons';
import { Icon } from '@openedx/paragon';
import { useFormikContext } from 'formik';
import type { Data } from '../../apiTypes';
import {
  COLOUR_VARIANTS,
  type ColourVariant,
  colourVariantStyle,
  findColourVariant,
} from '../../variants';
import { handleRadioKeyDown } from './radioGroup';

interface InteractionCardProps {
  label: string;
  description: string;
  icon: typeof Visibility;
  selected: boolean;
  onSelect: () => void;
}

function InteractionCard({
  label,
  description,
  icon,
  selected,
  onSelect,
}: InteractionCardProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      tabIndex={selected ? 0 : -1}
      className={`us-interaction-card${selected ? ' us-interaction-card--selected' : ''}`}
      onClick={onSelect}
      onKeyDown={handleRadioKeyDown}
    >
      <Icon src={icon} className="us-interaction-card-icon" />
      <span className="us-interaction-card-label">{label}</span>
      <span className="us-interaction-card-description">{description}</span>
    </button>
  );
}

interface ColourSwatchProps {
  variant: ColourVariant;
  selected: boolean;
  onSelect: () => void;
}

function ColourSwatch({ variant, selected, onSelect }: ColourSwatchProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      tabIndex={selected ? 0 : -1}
      className={`us-swatch${selected ? ' us-swatch--selected' : ''}`}
      onClick={onSelect}
      onKeyDown={handleRadioKeyDown}
    >
      <span
        className="us-swatch-preview"
        style={{ background: variant.swatch.background }}
      >
        <span
          className="us-swatch-sample"
          style={{ color: variant.swatch.foregrounds[0] }}
        >
          Aa
        </span>
        <span
          className="us-swatch-sample"
          style={{ color: variant.swatch.foregrounds[1] }}
        >
          Aa
        </span>
      </span>
      <span className="us-swatch-label">{variant.label}</span>
      {selected && <Icon src={CheckCircle} className="us-swatch-check" />}
    </button>
  );
}

export default function SetupSection() {
  const { values, setFieldValue } = useFormikContext<Data>();
  const { interactionType, colorVariant } = values.scenarioData;
  const selectedVariant = findColourVariant(colorVariant);

  return (
    <div className="us-panel">
      <h4>Setup</h4>
      <section className="us-section">
        <h5>How Learners Interact</h5>
        <p className="us-section-help">
          Choose how learners interact with each scenario.
        </p>
        <div
          className="us-interaction-grid"
          role="radiogroup"
          aria-label="How learners interact"
        >
          <InteractionCard
            label="Explore"
            icon={Visibility}
            description="Learners can explore every option and read the outcome before continuing. They don't need to select an answer."
            selected={interactionType === 'Explore'}
            onSelect={() =>
              setFieldValue('scenarioData.interactionType', 'Explore')
            }
          />
          <InteractionCard
            label="Select an Answer"
            icon={HelpOutline}
            description="Learners select one option for each scenario and see the outcome immediately."
            selected={interactionType === 'SelectOne'}
            onSelect={() =>
              setFieldValue('scenarioData.interactionType', 'SelectOne')
            }
          />
        </div>
      </section>
      <section className="us-section">
        <h5>Color variant</h5>
        <p className="us-section-help">
          Choose a color variant. These color combinations are set by your site
          operator.
        </p>
        <div
          className="us-swatch-grid"
          role="radiogroup"
          aria-label="Color variant"
        >
          {COLOUR_VARIANTS.map((variant) => (
            <ColourSwatch
              key={variant.id}
              variant={variant}
              selected={colorVariant === variant.id}
              onSelect={() =>
                setFieldValue('scenarioData.colorVariant', variant.id)
              }
            />
          ))}
        </div>
        {colorVariant && !selectedVariant && (
          <p className="us-section-help" role="status">
            The saved colour variant “{colorVariant}” isn't available in this
            theme, so the default colours are shown. The saved value is kept.
          </p>
        )}
        <div
          className="us-variant-preview"
          style={colourVariantStyle(colorVariant)}
          aria-hidden="true"
        >
          <span className="us-variant-preview-heading">Scenario heading</span>
          <span className="us-variant-preview-body">
            This is how learner text looks on the selected background.
          </span>
          <span className="us-variant-preview-action">Continue</span>
        </div>
      </section>
    </div>
  );
}
