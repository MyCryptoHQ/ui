import { simpleRender } from '../../.jest/test-utils';
import { PasswordStrength } from './PasswordStrength';

describe('PasswordStrength', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<PasswordStrength strength={0} />)).not.toThrow();
  });
});
