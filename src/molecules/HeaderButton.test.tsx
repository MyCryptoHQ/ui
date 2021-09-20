import { simpleRender } from '../../.jest/test-utils';
import { HeaderButton } from './HeaderButton';

describe('HeaderButton', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<HeaderButton icon="home" text="MyCrypto.com" />)).not.toThrow();
  });
});
