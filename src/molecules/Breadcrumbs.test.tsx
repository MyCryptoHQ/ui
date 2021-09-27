import { simpleRender } from '../../.jest/test-utils';
import { Breadcrumb } from '../atoms/Breadcrumb';
import { Breadcrumbs } from './Breadcrumbs';

describe('Breadcrumbs', () => {
  it('renders correctly', () => {
    expect(() =>
      simpleRender(
        <Breadcrumbs>
          <Breadcrumb>Foo</Breadcrumb>
          <Breadcrumb>Bar</Breadcrumb>
          <Breadcrumb>Baz</Breadcrumb>
        </Breadcrumbs>
      )
    ).not.toThrow();
  });
});
