import { render } from '@testing-library/react';

import { Heading, SubHeading, Body, Code } from './Typography';

describe('Typography', () => {
  it('renders Heading correctly', () => {
    expect(() => render(<Heading>Heading</Heading>)).not.toThrow();
  });

  it('renders SubHeading correctly', () => {
    expect(() => render(<SubHeading>SubHeading</SubHeading>)).not.toThrow();
  });

  it('renders Body correctly', () => {
    expect(() => render(<Body>Body</Body>)).not.toThrow();
  });

  it('renders Code correctly', () => {
    expect(() => render(<Code>Code</Code>)).not.toThrow();
  });
});
