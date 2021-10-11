import { simpleRender } from '../../../.jest/test-utils';
import { FooterLink, FooterLinkColumn, FooterLinks } from './FooterLinks';

describe('FooterLinkColumn', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<FooterLinkColumn heading="Foo" />)).not.toThrow();
  });
});

describe('FooterLink', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<FooterLink />)).not.toThrow();
  });
});

describe('FooterLinks', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<FooterLinks />)).not.toThrow();
  });
});
