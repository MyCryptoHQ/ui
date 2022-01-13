import { simpleRender } from '../../.jest/test-utils';
import { default as Icon } from './Icon';

describe('Icon', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<Icon type="home" />)).not.toThrow();
  });
});
