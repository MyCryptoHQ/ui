import { fireEvent } from '@testing-library/react';

import { simpleRender } from '../../.jest/test-utils';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<Button>Button</Button>)).not.toThrow();
  });

  it('calls onClick when clicked', () => {
    const fn = jest.fn();

    const { getByText } = simpleRender(<Button onClick={fn}>Button</Button>);
    const button = getByText('Button');
    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('shows a spinner when loading', () => {
    const { getByTestId } = simpleRender(<Button loading={true}>Button</Button>);

    expect(() => getByTestId('spinner')).not.toThrow();
  });
});
