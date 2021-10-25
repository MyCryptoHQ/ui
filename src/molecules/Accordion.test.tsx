import { simpleRender } from '../../.jest/test-utils';
import { Accordion } from './Accordion';

describe('Accordion', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<Accordion />)).not.toThrow();
  });
});
