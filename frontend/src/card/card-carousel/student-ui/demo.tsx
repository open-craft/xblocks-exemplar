import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import StudentUI from './StudentUI.tsx';
import type { XBlockRuntime } from '@opencraft/xblock-react-utils';
import { type InitData } from '@/card/card-carousel/types.ts';

import './demo.css';
// Load the same styles the XBlock injects into its shadow root so the dev
// preview matches the rendered block.
import '@/card/common/student-ui/main.css';

const mockRuntime: XBlockRuntime = {
  handlerUrl: () => '',
  notify: (action: string, data: object) => console.log(action, data),
};

const initData: InitData = {
  displayName: "What's Expected of You",
  backgroundColor: '#EEE',
  cards: [
    {
      id: 1,
      name: 'Card #1',
      orientation: 'HORIZONTAL',
      title: 'Build Employability Skills',
      description:
        "When assessing a patient's condition, providers must identify and apply their knowledge based on assessment findings. To perform their role, providers must develop specific skills. This section helps you begin building the skills that employers seek when hiring or promoting healthcare professionals.",
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
      orientation: 'HORIZONTAL',
      title: 'Develop Competence',
      description:
        'In this course, you can demonstrate these skills by passing a final assessment that measures whether you have mastered the following competency.',
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
      orientation: 'HORIZONTAL',
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
              'What if this turns out to be really long text? The learner identifies characteristics of given blood vessel disorders (i.e., aneurysm, thrombus, and embolus). The learner identifies characteristics of given blood vessel disorders (i.e., aneurysm, thrombus, and embolus). The learner identifies characteristics of given blood vessel disorders (i.e., aneurysm, thrombus, and embolus).',
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
              'The learner identifies differences between congestive heart failure, valvular heart diseases, endocarditis, and pericarditis.',
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
          {
            description:
              'Given a description of anemia, the learner identifies the type described (i.e., folic acid anemia, pernicious anemia, iron-deficiency anemia, and aplastic anemia).',
            hoverContent: '',
            icon: '',
          },
          {
            description:
              'The learner identifies differences between diseases that are infectious and diseases that are communicable.',
            hoverContent: '',
            icon: '',
          },
        ],
      },
    },
    {
      id: 4,
      name: 'Card #4',
      orientation: 'HORIZONTAL',
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
