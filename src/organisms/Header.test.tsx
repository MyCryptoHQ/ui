import { simpleRender } from '../../.jest/test-utils';
import { Logo } from '../atoms';
import { Header } from './Header';

describe('Header', () => {
  it('renders correctly', () => {
    expect(() =>
      simpleRender(
        <Header leftComponents={<Logo />} centerComponents={<Logo />} rightComponents={<Logo />} />
      )
    ).not.toThrow();
  });
});
