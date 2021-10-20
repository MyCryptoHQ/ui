import { simpleRender } from '../../.jest/test-utils';
import { SubHeader } from './SubHeader';

describe('SubHeader', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<SubHeader>Foo bar</SubHeader>)).not.toThrow();
  });
});
