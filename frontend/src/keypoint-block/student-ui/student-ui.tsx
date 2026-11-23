import { Button } from '@openedx/paragon';
import { type CSSProperties } from 'react';
import { type KeyPoint } from '../type';

interface StudentUiProps {
  header: string;
  keypoints: KeyPoint[];
  summary: string;
  buttonText: string;
  buttonLink: string;
  backgroundColor: string;
}

function StudentUi({
  header,
  keypoints,
  summary,
  buttonText,
  buttonLink,
  backgroundColor,
}: StudentUiProps) {
  // Only set the property when the author picked a colour: an empty inline
  // custom property would block the theme's background variant.
  const keypointsStyle = backgroundColor
    ? ({
        '--keypoints-background-color': backgroundColor,
      } as CSSProperties)
    : undefined;

  return (
    <div className="xblock-keypoints" style={keypointsStyle}>
      <div className="keypoints-container">
        {header && <h2 className="keypoints-header">{header}</h2>}

        <div className="keypoints-card-grid">
          {keypoints.map((kp, idx) => (
            <div key={`kp-${idx}`} className="keypoint">
              <h4 className="keypoint-label">{kp.keypoint}</h4>
              <p className="keypoint-description">{kp.description}</p>
            </div>
          ))}
        </div>

        {summary && <p className="keypoints-summary">{summary}</p>}

        {buttonText && buttonLink && (
          <div className="keypoints-action">
            <Button
              as="a"
              href={buttonLink}
              variant="dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentUi;
