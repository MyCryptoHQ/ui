import { simpleRender } from 'test-utils';

import { fAddress } from '@fixtures';

import { Address } from './Address';

describe('Address', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<Address address={fAddress} />)).not.toThrow();
  });
});
