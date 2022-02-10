import { fireEvent, simpleRender } from '../../.jest/test-utils';
import { Carousel } from './Carousel';

describe('Carousel', () => {
  afterEach(() => jest.useRealTimers());

  it('renders correctly', () => {
    expect(() =>
      simpleRender(<Carousel title="foo" elements={[{ title: 'Foo', text: 'Bar', icon: '' }]} />)
    ).not.toThrow();
  });

  it('shows the current element', async () => {
    jest.useFakeTimers();

    const { findAllByText } = simpleRender(
      <Carousel
        title="foo"
        elements={[
          { title: 'Foo', text: 'Bar', icon: '' },
          { title: 'Baz', text: 'Qux', icon: '' }
        ]}
      />
    );

    await expect(findAllByText('Bar')).resolves.toBeDefined();

    jest.advanceTimersToNextTimer();

    await expect(findAllByText('Qux')).resolves.toBeDefined();

    jest.advanceTimersToNextTimer();

    await expect(findAllByText('Bar')).resolves.toBeDefined();
  });

  it('shows the element clicked on', async () => {
    const { getByText, findAllByText } = simpleRender(
      <Carousel
        title="foo"
        elements={[
          { title: 'Foo', text: 'Bar', icon: '' },
          { title: 'Baz', text: 'Qux', icon: '' }
        ]}
      />
    );

    const button = getByText('Baz');
    fireEvent.click(button);

    await expect(findAllByText('Qux')).resolves.toBeDefined();
  });
});
