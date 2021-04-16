import { fAddress } from '../../.jest/__fixtures__';
import { simpleRender } from '../../.jest/test-utils';
import { BlockieAddress } from './BlockieAddress';

describe('BlockieAddress', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<BlockieAddress address={fAddress} />)).not.toThrow();
  });
});
