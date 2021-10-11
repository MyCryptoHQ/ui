import { simpleRender } from '../../.jest/test-utils';
import { FooterSeparator } from './FooterSeparator';

describe('FooterSeparator', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<FooterSeparator />)).not.toThrow();
  });
});
