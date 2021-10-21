import { simpleRender } from '../../.jest/test-utils';
import { Label } from './Label';

describe('Label', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<Label type="success">Foo bar</Label>)).not.toThrow();
  });
});
