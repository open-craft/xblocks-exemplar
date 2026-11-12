import { useId } from 'react';
import { CheckCircle, HelpOutline, Visibility } from '@openedx/paragon/icons';
import { Icon } from '@openedx/paragon';
import Form from '@openedx/paragon/dist/Form';
import { useFormikContext } from 'formik';
import type { Data, InteractionType } from '../../apiTypes';
import {
  COLOUR_VARIANTS,
  findColourVariant,
  swatchTiles,
  type ColourVariant,
} from '../../variants';

interface InteractionCardProps {
  value: InteractionType;
  label: string;
  description: string;
  icon: typeof Visibility;
  selected: boolean;
}

function InteractionCard({
  value,
  label,
  description,
  icon,
  selected,
}: InteractionCardProps) {
  return (
    <Form.Radio
      value={value}
      className={`us-interaction-card${selected ? ' us-interaction-card--selected' : ''}`}
      labelClassName="us-interaction-card-label"
      description={description}
    >
      <Icon
        src={icon}
        className="us-interaction-card-icon"
        aria-hidden="true"
      />
      {label}
    </Form.Radio>
  );
}

interface ColourSwatchProps {
  variant: ColourVariant;
  selected: boolean;
}

function ColourSwatch({ variant, selected }: ColourSwatchProps) {
  return (
    <Form.Radio
      value={variant.id}
      className={`us-swatch${selected ? ' us-swatch--selected' : ''}`}
      labelClassName="us-swatch-body"
    >
      <span className="us-swatch-preview">
        {swatchTiles(variant).map((tile) => (
          <span
            key={tile.background}
            className="us-swatch-tile"
            style={{ background: tile.background, color: tile.color }}
          >
            <span className="us-swatch-sample">Aa</span>
            <span className="us-swatch-rule" />
          </span>
        ))}
      </span>
      <span className="us-swatch-name">{variant.label}</span>
      {selected && (
        <Icon
          src={CheckCircle}
          className="us-swatch-check"
          aria-hidden="true"
        />
      )}
    </Form.Radio>
  );
}

export default function SetupSection() {
  const { values, setFieldValue } = useFormikContext<Data>();
  const { interactionType, colorVariant } = values.scenarioData;
  const selectedVariant = findColourVariant(colorVariant);
  const id = useId();

  return (
    <section className="us-panel" aria-labelledby={`${id}-title`}>
      <h4 id={`${id}-title`}>Setup</h4>
      <section className="us-section">
        <h5>How Learners Interact</h5>
        <p className="us-section-help">
          Choose how learners interact with each scenario.
        </p>
        <Form.RadioSet
          name="scenarioData.interactionType"
          value={interactionType}
          aria-label="How learners interact"
          className="us-interaction-grid"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setFieldValue('scenarioData.interactionType', event.target.value)
          }
        >
          <InteractionCard
            value="Explore"
            label="Explore"
            icon={Visibility}
            selected={interactionType === 'Explore'}
            description="Learners can explore every option and read the outcome before continuing. They don't need to select an answer."
          />
          <InteractionCard
            value="SelectOne"
            label="Select an Answer"
            icon={HelpOutline}
            selected={interactionType === 'SelectOne'}
            description="Learners select one option for each scenario and see the outcome immediately."
          />
        </Form.RadioSet>
      </section>
      <section className="us-section">
        <h5>Color variant</h5>
        <p className="us-section-help">
          Choose a color variant. These color combinations are set by your site
          operator.
        </p>
        <Form.RadioSet
          name="scenarioData.colorVariant"
          value={colorVariant ?? ''}
          aria-label="Color variant"
          className="us-swatch-grid"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setFieldValue('scenarioData.colorVariant', event.target.value)
          }
        >
          {COLOUR_VARIANTS.map((variant) => (
            <ColourSwatch
              key={variant.id}
              variant={variant}
              selected={colorVariant === variant.id}
            />
          ))}
        </Form.RadioSet>
        {colorVariant && !selectedVariant && (
          <p className="us-section-help" role="status">
            The saved colour variant “{colorVariant}” isn't available in this
            theme, so the default colours are shown. The saved value is kept.
          </p>
        )}
      </section>
    </section>
  );
}
