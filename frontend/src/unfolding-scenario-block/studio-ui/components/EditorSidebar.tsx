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
import { MAX_SCENARIOS, newScenario, reorderScenarios } from '../utils';

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
  // The drag handle carries the sortable ref: it is the focusable,
  // draggable affordance, and keeping it off the row wrapper avoids a
  // role="button" container whose contents compete with the nav link's name.
  const { ref } = useSortable({ id: index, index });
  const section: SectionKey = `scenario:${index}`;

  return (
    <div
      className={`us-editor-nav-item${active ? ' us-editor-nav-item--active' : ''}`}
    >
      <IconButton
        ref={ref}
        alt={`Reorder scenario ${index + 1}`}
        className="us-editor-drag-handle"
        size="sm"
        src={DragIndicator}
      />
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
      <DragDropProvider
        onDragOver={(event) =>
          setFieldValue(
            'scenarioData.scenarios',
            reorderScenarios(values.scenarioData.scenarios, event),
          )
        }
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
