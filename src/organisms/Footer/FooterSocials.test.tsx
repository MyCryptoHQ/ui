import { simpleRender } from '../../../.jest/test-utils';
import { FooterSocials } from './FooterSocials';

describe('FooterSocials', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<FooterSocials />)).not.toThrow();
  });
});
