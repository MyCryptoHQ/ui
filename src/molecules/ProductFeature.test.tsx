import { simpleRender } from '../../.jest/test-utils';
import { ProductFeature } from './ProductFeature';

describe('ProductFeature', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<ProductFeature icon="foo" text="bar" />)).not.toThrow();
  });
});
