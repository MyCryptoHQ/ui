import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

import { ThemeProvider } from '../styled-components';
import { light } from '../Theme';
import Typography from './Typography';

test('Typography', () => {
  const { getByText, rerender } = render(<Typography>Typography</Typography>);
  expect(getByText('Typography')).toHaveTextContent('Typography');
  rerender(
    <ThemeProvider theme={light}>
      <Typography muted={true}>Muted Test</Typography>
    </ThemeProvider>,
  );
});
