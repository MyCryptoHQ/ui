import { render } from '@testing-library/react';

import { fAddress } from '@fixtures';

import { Blockie } from './Blockie';

describe('Blockie', () => {
  it('renders correctly', () => {
    expect(() => render(<Blockie address={fAddress} />)).not.toThrow();
  });
});
