import { simpleRender } from '../../.jest/test-utils';
import { Input } from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<Input type="text" />)).not.toThrow();
  });
});
