import { simpleRender } from '../../.jest/test-utils';
import { InlineMessage } from './InlineMessage';

describe('InlineMessage', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<InlineMessage type="error">Foo</InlineMessage>)).not.toThrow();
  });
});
