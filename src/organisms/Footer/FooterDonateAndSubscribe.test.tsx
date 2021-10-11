import { simpleRender } from '../../../.jest/test-utils';
import { FooterDonateAndSubscribe } from './FooterDonateAndSubscribe';

describe('FooterDonateAndSubscribe', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<FooterDonateAndSubscribe listId="foo" tag="bar" />)).not.toThrow();
  });
});
