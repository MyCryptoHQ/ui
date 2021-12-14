import { simpleRender } from '../../.jest/test-utils';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  it('renders correctly', () => {
    expect(() => simpleRender(<Tooltip tooltip="Foo bar" />)).not.toThrow();
  });

  it('shows a tooltip', async () => {
    const { getByText, findByText } = simpleRender(
      <Tooltip tooltip="Foo bar" trigger="click">
        Baz qux
      </Tooltip>
    );
    const button = getByText('Baz qux');

    button.click();

    await expect(findByText('Foo bar')).resolves.toBeDefined();
  });
});
