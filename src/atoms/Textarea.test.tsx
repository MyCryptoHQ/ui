import { simpleRender } from '../../.jest/test-utils';
import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<Textarea>Foo bar</Textarea>)).not.toThrow();
  });
});
