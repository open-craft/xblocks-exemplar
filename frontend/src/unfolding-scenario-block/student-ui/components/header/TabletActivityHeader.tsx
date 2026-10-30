import { Row, Col, Container } from '@openedx/paragon';
import { type ActivityHeaderProps } from './header-common';
import { ScenarioStepper } from './ScenarioStepper';
import { ActivityCloseButton } from '../ActivityCloseButton';

export const TabletActivityHeader = ({
  onClose,
  title,
  onReset,
  activeScenarioIndex,
  totalScenarios,
}: ActivityHeaderProps) => (
  <div className="sticky-top d-flex w-100 pb-2 bg-interact-default">
    <Container className="mx-3" fluid>
      <Row>
        <Col className="d-flex align-items-center small-heading text-interact-headings">
          {title}
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          <ActivityCloseButton onClose={onClose} />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <ScenarioStepper
            onReset={onReset}
            index={activeScenarioIndex}
            total={totalScenarios}
            className="d-flex w-100 p-3 rounded-lg"
          />
        </Col>
      </Row>
    </Container>
  </div>
);
