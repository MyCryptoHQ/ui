import { render } from '@testing-library/react';
import type { ComponentProps } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../theme';
import { Badge } from './Badge';

const getComponent = (props: ComponentProps<typeof Badge>) => {
  return render(
    <ThemeProvider theme={theme}>
      <Badge {...props}>{props.children}</Badge>
    </ThemeProvider>
  );
};

describe('Badge', () => {
  it('renders the children', () => {
    const { getByText } = getComponent({ type: 'info', children: 'Foo bar' });
    expect(() => getByText('Foo bar')).not.toThrow();
  });
});
