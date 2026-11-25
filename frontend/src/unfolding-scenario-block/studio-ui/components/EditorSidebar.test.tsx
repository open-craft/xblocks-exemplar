import { describe, it, expect, vi } from 'vitest';
import { render } from '@opencraft/xblock-react-utils/testing';
import { within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik } from 'formik';
import EditorSidebar from './EditorSidebar';
import type { SectionKey } from './EditorSidebar';
import type { Data } from '../../apiTypes';
import { newScenario } from '../utils';

const makeData = (scenarioCount: number): Data => ({
  displayName: 'Unfolding Scenario',
  scenarioData: {
    name: 'Unfolding Scenario',
    introduction: {
      heading: 'Intro',
      description: 'The introduction.',
      imageURL: '',
    },
    scenarios: Array.from({ length: scenarioCount }, newScenario),
    outcome: {
      heading: 'Outcome',
      description: 'The outcome.',
      displaySelectedOptions: false,
    },
    interactionType: 'Explore',
  },
});

const renderSidebar = ({
  data = makeData(1),
  activeSection = 'setup' as SectionKey,
  errorSections,
  onSelect = vi.fn(),
}: {
  data?: Data;
  activeSection?: SectionKey;
  errorSections?: Record<string, boolean>;
  onSelect?: (section: SectionKey) => void;
} = {}) =>
  render(
    <Formik initialValues={data} onSubmit={() => {}}>
      <EditorSidebar
        activeSection={activeSection}
        onSelect={onSelect}
        errorSections={errorSections}
      />
    </Formik>,
  );

describe('EditorSidebar', () => {
  it('shows error badges only for the sections marked with errors', () => {
    const { container } = renderSidebar({
      errorSections: { introduction: true, outcome: true },
    });

    expect(container.querySelectorAll('.us-editor-error-badge')).toHaveLength(
      2,
    );
  });

  it('shows an error badge on a scenario item when its section has errors', () => {
    const { container } = renderSidebar({
      errorSections: { 'scenario:0': true },
    });

    expect(container.querySelectorAll('.us-editor-error-badge')).toHaveLength(
      1,
    );
  });

  it('hides the add button once the scenario cap is reached', () => {
    const screen = renderSidebar({ data: makeData(5) });

    expect(
      screen.queryByRole('button', { name: 'Add scenario (max 5)' }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Scenario 5' }),
    ).toBeInTheDocument();
  });

  it('adds a scenario via the add button', async () => {
    const user = userEvent.setup();
    const screen = renderSidebar({ data: makeData(1) });

    await user.click(
      screen.getByRole('button', { name: 'Add scenario (max 5)' }),
    );
    expect(
      screen.getByRole('button', { name: 'Scenario 2' }),
    ).toBeInTheDocument();
  });

  it('hides delete buttons when only one scenario remains', () => {
    const screen = renderSidebar({ data: makeData(1) });

    expect(
      screen.queryByRole('button', { name: 'Delete scenario 1' }),
    ).not.toBeInTheDocument();
  });

  it('calls onSelect with the scenario section key', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    const screen = renderSidebar({ data: makeData(2), onSelect });

    await user.click(screen.getByRole('button', { name: 'Scenario 2' }));
    expect(onSelect).toHaveBeenCalledWith('scenario:1');
  });

  it('marks the active section with aria-current', () => {
    const screen = renderSidebar({ activeSection: 'outcome' });

    expect(screen.getByRole('button', { name: 'Outcome' })).toHaveAttribute(
      'aria-current',
      'true',
    );
    expect(screen.getByRole('button', { name: 'Setup' })).toHaveAttribute(
      'aria-current',
      'false',
    );
  });

  it('labels the navigation for assistive technology', () => {
    const screen = renderSidebar();
    const sidebar = screen.getByRole('navigation', { name: 'Editor sections' });

    expect(
      within(sidebar).getByRole('button', { name: 'Setup' }),
    ).toBeInTheDocument();
  });
});
