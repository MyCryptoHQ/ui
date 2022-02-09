import { simpleRender } from '../../.jest/test-utils';
import { Carousel } from './Carousel';

describe('Carousel', () => {
  jest.useFakeTimers();

  it('renders correctly', () => {
    expect(() =>
      simpleRender(<Carousel title="foo" elements={[{ title: 'Foo', text: 'Bar', icon: '' }]} />)
    ).not.toThrow();
  });

  it('shows the current element', async () => {
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
  });
});
