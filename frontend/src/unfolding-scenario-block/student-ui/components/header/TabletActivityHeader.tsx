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
        <Col className="d-flex align-items-center">
          <h5 className="text-interact-headings">{title}</h5>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          <ActivityCloseButton onClose={onClose} />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <ScenarioStepper
            variant="tablet"
            onReset={onReset}
            index={activeScenarioIndex}
            total={totalScenarios}
          />
        </Col>
      </Row>
    </Container>
  </div>
);
