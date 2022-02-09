import { simpleRender } from '../../.jest/test-utils';
import { Feature } from './Feature';

describe('Feature', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<Feature icon="foo" text="bar" />)).not.toThrow();
  });
});
