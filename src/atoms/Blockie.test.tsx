import { fAddress } from '../../.jest/__fixtures__';
import { simpleRender } from '../../.jest/test-utils';
import { Blockie } from './Blockie';

describe('Blockie', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<Blockie address={fAddress} />)).not.toThrow();
  });
});
