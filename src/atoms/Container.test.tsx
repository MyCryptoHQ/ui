import { simpleRender } from '../../.jest/test-utils';
import { Container } from './Container';

describe('Container', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<Container>container</Container>)).not.toThrow();
  });
});
