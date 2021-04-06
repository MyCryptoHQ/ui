import { fireEvent, render } from '@testing-library/react';
import { Test } from './Test';

describe('Test', () => {
  it('renders correctly', () => {
    expect(() => render(<Test label="Foo bar" onClick={jest.fn()} />)).not.toThrow();
  });

  it('renders the label text', () => {
    const { container } = render(<Test label="Foo bar" onClick={jest.fn()} />);
    expect(container).toHaveTextContent('Foo bar');
  });

  it('calls onClick when clicked', () => {
    const onClick = jest.fn();

    const { getByText } = render(<Test label="Foo bar" onClick={onClick} />);
    const element = getByText('Foo bar');
    fireEvent.click(element);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
