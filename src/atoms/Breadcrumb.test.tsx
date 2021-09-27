import { simpleRender } from '../../.jest/test-utils';
import { Breadcrumb } from './Breadcrumb';

describe('Breadcrumb', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<Breadcrumb>Breadcrumb</Breadcrumb>)).not.toThrow();
  });
});
