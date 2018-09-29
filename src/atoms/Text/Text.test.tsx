import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';
import Text from '.';

test('Text', () => {
  const { getByText } = render(<Text>Text</Text>);
  expect(getByText('Text')).toHaveTextContent('Text');
});
