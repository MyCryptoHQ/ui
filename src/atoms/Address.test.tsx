import { fAddress } from '../../.jest/__fixtures__';
import { simpleRender } from '../../.jest/test-utils';
import { Address } from './Address';

describe('Address', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<Address address={fAddress} />)).not.toThrow();
  });
});
