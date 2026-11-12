import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import StudentUI from './StudentUI.tsx';
import type { XBlockRuntime } from '@opencraft/xblock-react-utils';
import { type InitData } from '@/card/card-grid/types.ts';

import './demo.css';
// Load the same styles the XBlock injects into its shadow root so the dev
// preview matches the rendered block.
import '@/card/common/student-ui/main.css';

const mockRuntime: XBlockRuntime = {
  handlerUrl: () => '',
  notify: (action: string, data: object) => console.log(action, data),
};

const initData: InitData = {
  displayName: 'Card Grid Demo',
  description:
    '<p>This is a live preview of the <strong>Card Grid</strong> student view.</p>',
  orientation: 'VERTICAL',
  backgroundColor: '#FFFFFF',
  footerDescription:
    '<p>This is the footer description rendered below the cards.</p>',
  cards: [
    {
      id: 1,
      name: 'Card #1',
      title: 'Build Employability Skills',
      description:
        "When assessing a patient's condition, providers must identify and apply their knowledge based on assessment findings.",
      secondaryContent: {
        kind: 'RICH_LIST',
        items: [
          {
            icon: 'local_library',
            title: 'Acute care',
            description:
              "Apply knowledge of patient's pathophysiology when analyzing patient data and assessments.",
          },
          {
            icon: 'timer',
            title: 'Early intervention',
            description:
              'Identify risks and potential or existing health problems and acts according to scope of licensure to prevent complications.',
          },
          {
            icon: 'favorite_border',
            title: 'Physiology',
            description:
              'Identify normal physiological functions of living organisms and their parts.',
          },
        ],
      },
    },
    {
      id: 2,
      name: 'Card #2',
      title: 'Develop Competence',
      description:
        'In this course, you can demonstrate these skills by passing a final assessment.',
      secondaryContent: {
        kind: 'CONTENT_HIGHLIGHT',
        title: 'Cardiovascular and Lymphatic Systems',
        subtitle: 'Competency 738.11.4',
        description:
          'The learner describes pathogenesis, manifestations, complications, and variations of the cardiovascular and lymphatic systems.',
      },
    },
    {
      id: 3,
      name: 'Card #3',
      title: 'Prepare for the Assessment',
      subtitle:
        'There are six evidence statements for this competency, hover over each to turn them into questions.',
      secondaryContent: {
        kind: 'HOVER_LIST',
        items: [
          {
            description:
              'The learner identifies characteristics of given blood vessel disorders (i.e., aneurysm, thrombus, and embolus).',
            hoverContent:
              'What if this turns out to be really long text? The learner identifies characteristics of given blood vessel disorders.',
            icon: '',
          },
          {
            description:
              'The learner identifies the differences among atherosclerosis, angina pectoris, myocardial infarction, and heart dysrhythmias.',
            hoverContent: '',
            icon: '',
          },
          {
            description:
              'The learner identifies differences between benign and malignant hypertension.',
            hoverContent:
              'Can you identify the differences between benign and malignant hypertension?',
            icon: 'psychology_alt',
          },
        ],
      },
    },
    {
      id: 4,
      name: 'Card #4',
      title: 'Up Next',
      subtitle: '4.1 Cardiovascular Systems Pathophysiology',
      description:
        'Examines how normal cardiac and vascular functions are disrupted by disease, highlighting key mechanisms that affect blood flow, oxygen delivery, and systemic regulation.',
      ctaLabel: 'Start 4.1',
      ctaLink: '/',
      secondaryContent: {
        kind: 'IMAGE',
        location: 'https://picsum.photos/512/512/',
        altText: 'Random Image from picsum.photos',
      },
    },
  ],
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IntlProvider locale="en">
      <StudentUI runtime={mockRuntime} initData={initData} />
    </IntlProvider>
  </StrictMode>,
);
