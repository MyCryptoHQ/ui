import { simpleRender } from '../../../.jest/test-utils';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<Footer />)).not.toThrow();
  });
});
