import {
  Add as AddIcon,
  DeleteOutline,
  DragIndicator,
  ErrorOutline,
} from '@openedx/paragon/icons';
import { Icon, IconButton } from '@openedx/paragon';
import { DragDropProvider } from '@dnd-kit/react';
import { useSortable } from '@dnd-kit/react/sortable';
import { FieldArray, useFormikContext } from 'formik';
import type { Data } from '../../apiTypes';
import {
  MAX_SCENARIOS,
  draggedIndices,
  mapMovedIndex,
  newScenario,
  reorderScenarios,
} from '../utils';

/** Keep the edited scenario selected when rows move around it. */
const remapSection = (
  section: SectionKey,
  from: number,
  to: number,
): SectionKey => {
  if (!section.startsWith('scenario:')) {
    return section;
  }
  const index = Number(section.slice('scenario:'.length));
  return `scenario:${mapMovedIndex(index, from, to)}`;
};

/** Section keys used across the editor for nav + validation error mapping. */
export type SectionKey =
  | 'setup'
  | 'introduction'
  | 'outcome'
  | `scenario:${number}`;

interface EditorSidebarProps {
  activeSection: SectionKey;
  onSelect: (section: SectionKey) => void;
  /** Section key → truthy means "show the error badge". Presence is the signal. */
  errorSections?: Record<string, boolean>;
}

interface NavItemProps {
  section: SectionKey;
  label: string;
  active: boolean;
  hasError: boolean;
  onSelect: (section: SectionKey) => void;
}

function NavItem({ section, label, active, hasError, onSelect }: NavItemProps) {
  return (
    <div
      className={`us-editor-nav-item${active ? ' us-editor-nav-item--active' : ''}`}
    >
      <button
        type="button"
        className="us-editor-nav-link"
        aria-current={active ? 'true' : 'false'}
        onClick={() => onSelect(section)}
      >
        {label}
      </button>
      {hasError && (
        <Icon
          className="us-editor-error-badge text-danger"
          src={ErrorOutline}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

interface ScenarioItemProps {
  index: number;
  active: boolean;
  hasError: boolean;
  canDelete: boolean;
  onSelect: (section: SectionKey) => void;
  onDelete: () => void;
}

function ScenarioItem({
  index,
  active,
  hasError,
  canDelete,
  onSelect,
  onDelete,
}: ScenarioItemProps) {
  // The row is the draggable element (so the whole row moves and is the drop
  // target), while the handle is the only activation surface. That keeps
  // pointer dragging off the nav/delete buttons and gives the keyboard sensor
  // a focusable handle. `ref` must stay off the handle: dnd-kit transforms
  // whichever element carries it.
  const { ref, handleRef, isDragging } = useSortable({ id: index, index });
  const section: SectionKey = `scenario:${index}`;

  return (
    <div
      ref={ref}
      className={`us-editor-nav-item${active ? ' us-editor-nav-item--active' : ''}${isDragging ? ' us-editor-nav-item--dragging' : ''}`}
    >
      <button
        type="button"
        ref={handleRef}
        className="us-editor-drag-handle"
        aria-label={`Reorder scenario ${index + 1}`}
      >
        <Icon src={DragIndicator} aria-hidden="true" />
      </button>
      <button
        type="button"
        className="us-editor-nav-link"
        aria-current={active ? 'true' : 'false'}
        onClick={() => onSelect(section)}
      >
        Scenario {index + 1}
      </button>
      {canDelete && (
        <IconButton
          alt={`Delete scenario ${index + 1}`}
          className="us-editor-nav-delete"
          size="sm"
          src={DeleteOutline}
          onClick={onDelete}
        />
      )}
      {hasError && (
        <Icon
          className="us-editor-error-badge text-danger"
          src={ErrorOutline}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export default function EditorSidebar({
  activeSection,
  onSelect,
  errorSections = {},
}: EditorSidebarProps) {
  const { values, setFieldValue } = useFormikContext<Data>();
  const scenarios = values.scenarioData.scenarios;

  return (
    <nav className="us-editor-sidebar" aria-label="Editor sections">
      <NavItem
        section="setup"
        label="Setup"
        active={activeSection === 'setup'}
        hasError={Boolean(errorSections.setup)}
        onSelect={onSelect}
      />
      <NavItem
        section="introduction"
        label="Introduction"
        active={activeSection === 'introduction'}
        hasError={Boolean(errorSections.introduction)}
        onSelect={onSelect}
      />
      {/* Reorder on drag end rather than on drag over: rows are keyed by
          index (the data model has no ids), so reordering mid-drag would
          remount the dragged row and cancel the interaction. */}
      <DragDropProvider
        onDragEnd={(event) => {
          const scenarios = reorderScenarios(
            values.scenarioData.scenarios,
            event,
          );
          if (scenarios === values.scenarioData.scenarios) {
            return;
          }
          setFieldValue('scenarioData.scenarios', scenarios);
          const indices = draggedIndices(event);
          if (indices) {
            onSelect(remapSection(activeSection, indices.from, indices.to));
          }
        }}
      >
        <FieldArray name="scenarioData.scenarios">
          {({ push, remove }) => (
            <>
              {scenarios.map((_scenario, index) => (
                <ScenarioItem
                  key={index}
                  index={index}
                  active={activeSection === `scenario:${index}`}
                  hasError={Boolean(errorSections[`scenario:${index}`])}
                  canDelete={scenarios.length > 1}
                  onSelect={() => onSelect(`scenario:${index}`)}
                  onDelete={() => remove(index)}
                />
              ))}
              {scenarios.length < MAX_SCENARIOS && (
                <button
                  type="button"
                  className="us-editor-add-scenario"
                  onClick={() => push(newScenario())}
                >
                  <Icon src={AddIcon} aria-hidden="true" />
                  Add scenario (max {MAX_SCENARIOS})
                </button>
              )}
            </>
          )}
        </FieldArray>
      </DragDropProvider>
      <NavItem
        section="outcome"
        label="Outcome"
        active={activeSection === 'outcome'}
        hasError={Boolean(errorSections.outcome)}
        onSelect={onSelect}
      />
    </nav>
  );
}
