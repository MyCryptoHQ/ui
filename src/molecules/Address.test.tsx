import { render } from '@testing-library/react';

import { fAddress } from '@fixtures';

import { Address } from './Address';

describe('Address', () => {
  it('renders correctly', () => {
    expect(() => render(<Address address={fAddress} />)).not.toThrow();
  });
});
