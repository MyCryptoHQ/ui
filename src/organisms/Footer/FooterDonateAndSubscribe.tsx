import type { FunctionComponent } from 'react';
import { useEffect, useState } from 'react';

import { Body, Flex, InlineBody } from '../../atoms';
import { DonateButton, SubscribeInput } from '../../molecules';

export interface FooterDonateAndSubscribeProps {
  listId: string;
  tag: string;
}

export const FooterDonateAndSubscribe: FunctionComponent<FooterDonateAndSubscribeProps> = ({
  listId,
  tag
}) => {
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {
    if (displayMessage) {
      const id = setTimeout(() => {
        setDisplayMessage(false);
      }, 3000);

      return () => clearTimeout(id);
    }
  }, [displayMessage]);

  const handleCopy = () => {
    setDisplayMessage(true);
  };

  return (
    <Flex
      flexDirection="column"
      justifyContent="space-evenly"
      width={{ _: '100%', lg: '20%' }}
      height="100%"
      order={{ _: 2, lg: 4 }}>
      <Flex flexDirection="column" alignItems={{ _: 'center', lg: 'flex-start' }}>
        <Body fontWeight="500" color="white">
          Donate
        </Body>
        <Flex
          flexDirection={{ _: 'column', lg: 'row' }}
          alignItems={{ _: 'center', lg: 'flex-start' }}>
          <DonateButton
            icon="ether"
            address="0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520"
            onCopy={handleCopy}>
            Ethereum
          </DonateButton>
          <DonateButton
            icon="bitcoin"
            address="32oirLEzZRhi33RCXDF9WHJjEb8RsrSss3"
            onCopy={handleCopy}>
            Bitcoin
          </DonateButton>
        </Flex>

        <Flex flexDirection="row" alignItems="baseline" minHeight="20px">
          {displayMessage && (
            <>
              <Body mr="7px" color="#7ad832">
                ✓
              </Body>
              <Body fontSize="14px" color="text.footer">
                Address Copied to Clipboard!
              </Body>
            </>
          )}
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        width="100%"
        alignItems={{ _: 'center', lg: 'flex-start' }}
        mt={{ _: '30px', lg: 0 }}>
        <Body color="text.footer" mb="5px">
          Subscribe to MyCrypto
        </Body>
        <Body fontSize="14px" lineHeight="17px" fontWeight="300" color="text.footer" mb="10px">
          Get updates from MyCrypto straight to your inbox!
        </Body>
        <SubscribeInput listId={listId} tag={tag} />
        <Flex flexDirection="row" alignItems="baseline" flexWrap="wrap">
          <Body
            variant="small"
            fontSize="10px"
            fontStyle="italic"
            fontWeight="300"
            color="footer.muted"
            mt="10px">
            By submitting your email, you <strong>affirmatively</strong> agree to our{' '}
            <InlineBody
              as="a"
              href="https://mycrypto.com/privacy"
              variant="link"
              fontSize="10px"
              color="link"
              sx={{ textDecoration: 'none' }}>
              Privacy Policy
            </InlineBody>
          </Body>
        </Flex>
      </Flex>
    </Flex>
  );
};
