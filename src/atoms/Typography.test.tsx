import { simpleRender } from 'test-utils';

import { Heading, SubHeading, Body, Code } from './Typography';

describe('Typography', () => {
  it('renders Heading correctly', () => {
    expect(() => simpleRender(<Heading>Heading</Heading>)).not.toThrow();
  });

  it('renders SubHeading correctly', () => {
    expect(() => simpleRender(<SubHeading>SubHeading</SubHeading>)).not.toThrow();
  });

  it('renders Body correctly', () => {
    expect(() => simpleRender(<Body>Body</Body>)).not.toThrow();
  });

  it('renders Code correctly', () => {
    expect(() => simpleRender(<Code>Code</Code>)).not.toThrow();
  });
});
