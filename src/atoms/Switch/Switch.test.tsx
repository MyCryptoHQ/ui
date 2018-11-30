import 'jest-dom/extend-expect';
import React from 'react';
// import { fireEvent, render } from 'react-testing-library';
import { render } from 'react-testing-library';

import { Switch } from 'atoms';
test('Switch', () => {
  const handleClick = jest.fn();
  //   const { getByTestId } = render(
  //     <Switch data-testid="toggle" handleChange={handleClick} />,
  //   );
  //   const Toggle = getByTestId('toggle');/
  //   fireEvent.click(Toggle);
  //   expect(handleClick).toHaveBeenCalled();
  render(<Switch data-testid="toggle" handleChange={handleClick} />);
});
