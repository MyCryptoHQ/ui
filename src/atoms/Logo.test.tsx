import { simpleRender } from '../../.jest/test-utils';
import { Logo } from './Logo';

describe('Logo', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<Logo />)).not.toThrow();
  });
});
