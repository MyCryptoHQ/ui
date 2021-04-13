import { simpleRender } from 'test-utils';

import { fAddress } from '@fixtures';

import { Blockie } from './Blockie';

describe('Blockie', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<Blockie address={fAddress} />)).not.toThrow();
  });
});
