import { type ScenarioData } from '../../apiTypes';
import { startTransition, useState } from 'react';
import { OutcomeComponent } from './Outcome';
import { ResponsiveActivityHeader } from './header/ResponsiveActivityHeader';
import { ResponsiveScenarioView } from './scenario/ResponsiveScenarioView';
import { LeaveConfirmModal } from './LeaveConfirmModal';
import { RestartConfirmModal } from './RestartConfirmModal';

interface ActivityProps {
  onExit: () => void;
  data: ScenarioData;
}

export const Activity = ({ data, onExit }: ActivityProps) => {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState<number>(0);
  const [modalType, setModalType] = useState<null | 'restart' | 'leave'>(null);
  // a mapping of scenarioIndex -> selectedOptionIndex
  const [selectedOptions, setSelectedOptions] = useState<Map<number, number>>(
    new Map(),
  );

  const onReset = () => {
    setActiveScenarioIndex(0);
    setModalType(null);
  };

  return (
    <div className="unfolding-scenario-activity-wrapper min-vh-100 bg-interact-default d-flex flex-column">
      <ResponsiveActivityHeader
        onClose={() => setModalType('leave')}
        title={data.name}
        onReset={() => setModalType('restart')}
        activeScenarioIndex={activeScenarioIndex}
        totalScenarios={data.scenarios.length}
      />
      {activeScenarioIndex < data.scenarios.length ? (
        <ResponsiveScenarioView
          key={activeScenarioIndex} // ensure state for this component is local to the specific scenario
          scenario={data.scenarios[activeScenarioIndex]}
          interactionType={data.interactionType}
          onContinue={() => {
            // TODO implement animation between scenarios. This startTransition is an experimental placeholder.
            startTransition(() => {
              setActiveScenarioIndex(activeScenarioIndex + 1);
            });
          }}
          onSelectOption={(i: number) =>
            setSelectedOptions(
              new Map(selectedOptions).set(activeScenarioIndex, i),
            )
          }
        />
      ) : (
        data.outcome && (
          <OutcomeComponent
            outcome={data.outcome}
            scenarios={data.scenarios}
            selectedOptions={selectedOptions}
            onRestart={() => setModalType('restart')}
            onExit={onExit}
            imageURL={data.introduction.imageURL}
          />
        )
      )}
      {modalType == 'leave' && (
        <LeaveConfirmModal
          onConfirm={onExit}
          onCancel={() => setModalType(null)}
        />
      )}
      {modalType == 'restart' && (
        <RestartConfirmModal
          onConfirm={onReset}
          onCancel={() => setModalType(null)}
        />
      )}
    </div>
  );
};
