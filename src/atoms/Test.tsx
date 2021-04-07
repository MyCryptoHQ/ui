import type { FunctionComponent } from 'react';

export interface TestProps {
  label: string;
  onClick(): void;
}

export const Test: FunctionComponent<TestProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
