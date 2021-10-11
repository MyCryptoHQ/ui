import { fireEvent } from '@testing-library/react';
import copy from 'copy-to-clipboard';

import { simpleRender } from '../../.jest/test-utils';
import { DonateButton } from './DonateButton';

jest.mock('copy-to-clipboard');

describe('DonateButton', () => {
  it('copies the address when clicking', async () => {
    const { getByText } = simpleRender(
      <DonateButton
        icon="ether"
        address="0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520"
        onCopy={jest.fn()}>
        foo
      </DonateButton>
    );

    const button = getByText('foo');

    fireEvent.click(button);

    expect(copy).toHaveBeenCalledWith('0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520', undefined);
  });
});
