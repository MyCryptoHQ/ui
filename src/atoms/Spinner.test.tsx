import { simpleRender } from '../../.jest/test-utils';
import { default as Spinner } from './Spinner';

describe('Spinner', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<Spinner />)).not.toThrow();
  });
});
