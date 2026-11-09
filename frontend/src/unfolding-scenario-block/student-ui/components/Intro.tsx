import { ArrowOutward } from '@openedx/paragon/icons';
import { type Introduction } from '../../apiTypes';
import { Image, Button, Col, Icon, Row } from '@openedx/paragon';

interface IntroProps {
  name: string;
  introduction: Introduction;
  onLaunch: () => void;
  activityOpen: boolean;
}

export const Intro = ({
  name,
  introduction,
  onLaunch,
  activityOpen,
}: IntroProps) => (
  <div className="rounded-lg overflow-hidden scenario-intro bg-interact-default">
    <Row className="p-0">
      <Col xs="12" md="8" className="p-5 d-flex flex-column">
        <div className="scenario-name border border-primary d-flex align-items-center p-3 mb-5">
          <div className="border-right">
            <Icon src={ArrowOutward} className="mr-2" />
          </div>
          <span className="ml-3 small-heading">{name}</span>
        </div>
        <h4 className="text-interact-accent">{introduction.heading}</h4>
        <div
          className="flex-grow-1 text-sec-content"
          dangerouslySetInnerHTML={{ __html: introduction.description }}
        />

        <div className="d-flex justify-content-end">
          <Button
            variant="unfolding-scenario-action"
            className="rounded-pill"
            onClick={onLaunch}
            disabled={activityOpen}
          >
            Launch Interactive
          </Button>
        </div>
      </Col>
      <Col xs="12" md="4" className="p-0">
        <Image
          src={introduction.imageURL}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </Col>
    </Row>
  </div>
);
