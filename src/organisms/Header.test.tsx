import { simpleRender } from '../../.jest/test-utils';
import { Header } from './Header';

describe('Header', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<Header />)).not.toThrow();
  });
});
