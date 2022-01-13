import { simpleRender } from '../../.jest/test-utils';
import { Icon } from './Icon';

describe('Icon', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<Icon type="home" />)).not.toThrow();
  });
});
