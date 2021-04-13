import { simpleRender } from 'test-utils';

import { fAddress } from '@fixtures';

import { BlockieAddress } from './BlockieAddress';

describe('BlockieAddress', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<BlockieAddress address={fAddress} />)).not.toThrow();
  });
});
