import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

import Button from './Button';

describe('Button tests', () => {
  const handleClick = jest.fn();
  const { getByText, rerender } = render(
    <Button onClick={handleClick}>Button</Button>,
  );
  const button = getByText('Button');

  describe('smoke tests', () => {
    it('should render properly', () => {
      expect(button).toHaveAttribute('type', 'button');
    });
  });

  describe('size tests', () => {
    it('should render as a large button', () => {
      rerender(<Button large={true} />);
    });

    it('should render as a secondary button', () => {
      rerender(<Button secondary={true} />);
    });

    it('should render as a basic button', () => {
      rerender(<Button basic={true} />);
    });

    it('should show a "copy" icon', () => {
      rerender(<Button icon="copy" />);
    });
  });
});
