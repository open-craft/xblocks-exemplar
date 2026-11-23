import {
  Image,
  Button,
  Col,
  Row,
  Hyperlink,
  ActionRow,
} from '@openedx/paragon';
import {
  type Data,
  type RawHTMLLayoutData,
  type ImageGridLayoutData,
  type LessonIntroLayoutData,
  type LessonListLayoutData,
  type TextLayoutData,
} from '../apiTypes';
import { type LayoutData } from '../types';
import type { CSSProperties, ReactElement } from 'react';

type AppProps = {
  data: Data;
};

export const App = ({ data }: AppProps) => {
  const [firstColumnSize, secondColumnSize] = data.columns.ratio
    .split(':')
    .map((s) => parseInt(s, 10));
  const wrapperStyle = {
    '--two-column-background-color': data.backgroundColor,
  } as CSSProperties;

  return (
    <div className="xblock-two-column-wrapper" style={wrapperStyle}>
      <div className="two-column-container">
        <Row
          className={`xblock-two-column ${data.columns.order == 'rightAboveLeft' ? 'two-column-reverse' : ''}`}
        >
          <Col xs={12} sm={firstColumnSize} className="two-column-column">
            <ColumnView data={data.columns.left} />
          </Col>
          <Col xs={12} sm={secondColumnSize} className="two-column-column">
            <ColumnView data={data.columns.right} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

type ColumnViewProps = {
  data: LayoutData;
};

const ColumnView = ({ data }: ColumnViewProps): ReactElement => {
  switch (data.kind) {
    case 'text':
      return <TextColumnView data={data} />;
    case 'lessonList':
      return <LessonListColumnView data={data} />;
    case 'lessonIntro':
      return <LessonIntroColumnView data={data} />;
    case 'imageGrid':
      return <ImageGridColumnView data={data} />;
    case 'rawHTML':
      return <RawHTMLColumnView data={data} />;
  }
};

type TextColumnViewProps = {
  data: TextLayoutData;
};

const TextColumnView = ({ data }: TextColumnViewProps) => {
  const style = {
    '--two-column-text-vertical-alignment': data.verticalAlignment,
  } as CSSProperties;

  return (
    <div className="two-column-text-column" style={style}>
      <div
        className="two-column-text-content"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </div>
  );
};

type LessonListColumnViewProps = {
  data: LessonListLayoutData;
};

const LessonListColumnView = ({ data }: LessonListColumnViewProps) => {
  return (
    <div className="lesson-list-column">
      <h5 className="lesson-list-title">{data.title}</h5>
      <p className="lesson-list-intro">{data.text}</p>
      {data.lessons.map((lesson) => (
        <Row className="lesson-list-item" key={`${lesson.id}-${lesson.title}`}>
          <Col xs={2} className="lesson-list-item-number">
            {lesson.id}
          </Col>
          <Col xs={10} className="lesson-list-item-title">
            {lesson.title}
          </Col>
        </Row>
      ))}
    </div>
  );
};

type LessonIntroColumnViewProps = {
  data: LessonIntroLayoutData;
};

const LessonIntroColumnView = ({ data }: LessonIntroColumnViewProps) => {
  return (
    <div className="lesson-intro-column">
      <h4 className="lesson-intro-title">{data.title}</h4>
      <h5 className="lesson-intro-heading">
        <span className="lesson-intro-id">
          {data.lesson.id ? data.lesson.id : null}
        </span>
        <br />
        <span>{data.lesson.title}</span>
      </h5>
      <p className="lesson-intro-summary">{data.summary}</p>

      {(data.previousLesson || data.showStartLessonButton) && (
        <ActionRow className="lesson-intro-actions">
          {data.previousLesson && (
            <Button
              className="rounded-pill"
              variant="outline-brand"
              href={data.previousLesson.url}
            >
              Previous {data.previousLesson.id}
            </Button>
          )}
          {data.showStartLessonButton && (
            <Button
              className="rounded-pill"
              variant="brand"
              href={data.lesson.url}
            >
              Start {data.lesson.id}
            </Button>
          )}
        </ActionRow>
      )}
    </div>
  );
};

type ImageGridColumnViewProps = {
  data: ImageGridLayoutData;
};

const ImageGridColumnView = ({ data }: ImageGridColumnViewProps) => {
  const bottomImage = data.bottomImage.onClickUrl ? (
    <Hyperlink
      className="image-grid-link bottom-image-grid-item"
      showLaunchIcon={false}
      target="_blank"
      destination={data.bottomImage.onClickUrl}
    >
      <Image
        className="image-grid-image"
        fluid
        src={data.bottomImage.url}
        alt={data.bottomImage.alt}
      />
    </Hyperlink>
  ) : (
    <Image
      className="image-grid-image bottom-image-grid-item"
      fluid
      src={data.bottomImage.url}
      alt={data.bottomImage.alt}
    />
  );

  const bottomTextStyle = {
    ...(data.text.backgroundColor
      ? {
          '--two-column-image-grid-text-background-color':
            data.text.backgroundColor,
        }
      : {}),
    ...(data.text.color
      ? { '--two-column-image-grid-text-color': data.text.color }
      : {}),
  } as CSSProperties;

  const bottomText = (
    <div
      className={`image-grid-bottom-text image-grid-text-align-${data.text.alignment}`}
      style={bottomTextStyle}
    >
      <div
        className={
          data.text.fontSize == 'large'
            ? 'image-grid-text-content image-grid-text-content-large'
            : 'image-grid-text-content'
        }
      >
        {data.text.content}
      </div>
    </div>
  );

  const [bottomLeft, bottomRight] =
    data.bottomRowOrder == 'imageText'
      ? [bottomImage, bottomText]
      : [bottomText, bottomImage];

  return (
    <Row className="image-grid">
      <Col xs={12} className="image-grid-featured">
        {data.featuredImage.onClickUrl ? (
          <Hyperlink
            target="_blank"
            className="image-grid-link top-image-grid-item"
            showLaunchIcon={false}
            destination={data.featuredImage.onClickUrl}
          >
            <Image
              fluid
              className="image-grid-image"
              src={data.featuredImage.url}
              alt={data.featuredImage.alt}
            />
          </Hyperlink>
        ) : (
          <Image
            fluid
            className="image-grid-image top-image-grid-item"
            src={data.featuredImage.url}
            alt={data.featuredImage.alt}
          />
        )}
      </Col>
      <Col
        xs={6}
        className="image-grid-bottom-cell image-grid-bottom-cell-left"
      >
        {bottomLeft}
      </Col>
      <Col
        xs={6}
        className="image-grid-bottom-cell image-grid-bottom-cell-right"
      >
        {bottomRight}
      </Col>
    </Row>
  );
};

type RawHTMLColumnViewProps = {
  data: RawHTMLLayoutData;
};

const RawHTMLColumnView = ({ data }: RawHTMLColumnViewProps) => {
  return (
    <div
      className="two-column-raw-html"
      dangerouslySetInnerHTML={{ __html: data.html }}
    />
  );
};
