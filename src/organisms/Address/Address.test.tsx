import 'jest-dom/extend-expect';
import React, { FormEvent } from 'react';
import { fireEvent, render } from 'react-testing-library';

import Address from './Address';

function truncate(text: string) {
  return `${text[0]}...`;
}

const handleSubmit = jest.fn<(event: FormEvent<HTMLFormElement>) => void>();

test('Copyable', () => {
  const { container, getByText, rerender } = render(
    <Address address="Address" title="Address" truncate={truncate} />,
  );
  rerender(
    <Address
      address="Address"
      title="Address"
      truncate={truncate}
      onSubmit={handleSubmit}
    />,
  );
  fireEvent.click(getByText('Address'));
  fireEvent.change(container.querySelector('input')!, {
    target: { value: 'New Address' },
  });
  fireEvent.click(container.querySelector('button')!);
  expect(handleSubmit).toHaveBeenCalledWith('New Address');
  expect(container).toHaveTextContent('New Address');
  rerender(<Address address="foo.eth" title="Address" />);
});
