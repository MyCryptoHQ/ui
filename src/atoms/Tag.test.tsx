import { simpleRender } from '../../.jest/test-utils';
import { Tag } from './Tag';

describe('Tag', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<Tag type="success">Foo bar</Tag>)).not.toThrow();
  });
});
