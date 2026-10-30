import type { Scenario } from '@/unfolding-scenario-block/apiTypes';
import { Col, Container, Row } from '@openedx/paragon';
import { OptionFeedback } from './scenario/OptionFeedback';

interface OutcomeSelectedOptionsProps {
  scenarios: Scenario[];
  selectedOptions: Map<number, number>;
}

export const OutcomeSelectedOptions = ({
  scenarios,
  selectedOptions,
}: OutcomeSelectedOptionsProps) => (
  <Container fluid>
    {scenarios.map((scenario, index) => {
      const option = scenario.options[selectedOptions.get(index)!];

      return (
        <Row className="outcome-option-row">
          <Col className="bg-interact-raised rounded-lg p-3">
            <p className="font-weight-bold text-interact-headings">
              Step {index + 1}
            </p>
            <p className="text-interact-content">{option.value}</p>
          </Col>
          <Col className="">
            <OptionFeedback option={option} />
          </Col>
        </Row>
      );
    })}
  </Container>
);
