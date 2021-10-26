import { simpleRender } from '../../.jest/test-utils';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<Tooltip tooltip="Foo bar" />)).not.toThrow();
  });
});
