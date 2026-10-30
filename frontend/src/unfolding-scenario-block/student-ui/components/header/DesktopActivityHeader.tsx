import { Row, Col, Container } from '@openedx/paragon';
import { type ActivityHeaderProps } from './header-common';
import { ScenarioStepper } from './ScenarioStepper';
import { ActivityCloseButton } from '../ActivityCloseButton';

export const DesktopActivityHeader = ({
  onClose,
  title,
  onReset,
  activeScenarioIndex,
  totalScenarios,
}: ActivityHeaderProps) => (
  <div className="sticky-top d-flex w-100 bg-interact-default">
    <Container fluid>
      <Row className="px-3">
        <Col className="d-flex align-items-center mx-3 small-heading text-interact-headings">
          {title}
        </Col>
        <Col className="d-flex justify-content-center">
          <ScenarioStepper
            onReset={onReset}
            index={activeScenarioIndex}
            total={totalScenarios}
            className="d-inline-flex rounded-lg-bottom py-3 pl-2 pr-3"
          />
        </Col>
        <Col className="d-flex justify-content-end align-items-center mx-3">
          <ActivityCloseButton onClose={onClose} />
        </Col>
      </Row>
    </Container>
  </div>
);
