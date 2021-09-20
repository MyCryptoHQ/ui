import type { FunctionComponent } from 'react';

export interface HeaderProps {
  foo: string;
}

// @todo
export const Header: FunctionComponent<HeaderProps> = () => <p>Header</p>;
