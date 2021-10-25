import { fireEvent } from '@testing-library/react';
import copy from 'copy-to-clipboard';

import { simpleRender } from '../../.jest/test-utils';
import { Copyable } from './Copyable';

jest.mock('copy-to-clipboard');

describe('Copyable', () => {
  it('renders an icon', () => {
    expect(() => simpleRender(<Copyable text="foo" icon="link" />)).not.toThrow();
  });

  it('copies the text to the clipboard', () => {
    jest.useFakeTimers();

    const { getByText } = simpleRender(<Copyable text="foo bar">baz qux</Copyable>);

    const button = getByText('baz qux');

    fireEvent.click(button);

    expect(copy).toHaveBeenCalledWith('foo bar', undefined);

    jest.runAllTimers();
  });
});
