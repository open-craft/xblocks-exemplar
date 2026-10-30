export interface ActivityHeaderProps {
  onClose: () => void;
  title: string;
  onReset: () => void;
  activeScenarioIndex: number;
  totalScenarios: number;
}
