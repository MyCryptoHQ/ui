import { simpleRender } from '../../.jest/test-utils';
import { Panel } from './Panel';

describe('Panel', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<Panel>Foo</Panel>)).not.toThrow();
  });
});
