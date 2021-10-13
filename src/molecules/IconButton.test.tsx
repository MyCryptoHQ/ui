import { simpleRender } from '../../.jest/test-utils';
import { IconButton } from './IconButton';

describe('IconButton', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<IconButton icon="home" />)).not.toThrow();
  });
});
