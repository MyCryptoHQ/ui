import { simpleRender } from '../../.jest/test-utils';
import { AccordionItem } from './AccordionItem';

describe('AccordionItem', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<AccordionItem title="Foo bar" />)).not.toThrow();
  });
});
