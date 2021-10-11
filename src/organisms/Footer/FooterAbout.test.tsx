import { simpleRender } from '../../../.jest/test-utils';
import { FooterAbout } from './FooterAbout';

describe('FooterAbout', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<FooterAbout />)).not.toThrow();
  });
});
