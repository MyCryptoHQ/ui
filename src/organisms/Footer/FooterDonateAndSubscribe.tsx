import type { ChangeEvent, FormEvent, FunctionComponent } from 'react';
import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import type { Icons } from '../../atoms';
import { Body, Button, Flex, Icon, InlineBody, Input } from '../../atoms';
import { useSubscribe } from '../../hooks';

interface DonateButtonProps {
  icon: Icons;
  address: string;

  onCopy(): void;
}

export const DonateButton: FunctionComponent<DonateButtonProps> = ({
  icon,
  address,
  onCopy,
  children
}) => {
  return (
    <CopyToClipboard text={address} onCopy={onCopy}>
      <Button
        backgroundColor="footer.donate"
        variant="donation"
        width="auto"
        mt={{ _: '15px', lg: '0' }}
        mr={{ _: '0', lg: '15px' }}>
        <Flex flexDirection="row" alignItems="center" justifyContent="center">
          <Icon type={icon} height="15px" mr="10px" verticalAlign="middle" />
          <Body color="text.footer" fontSize="14px">
            {children}
          </Body>
        </Flex>
      </Button>
    </CopyToClipboard>
  );
};

interface SubscribeInputProps {
  listId: string;
  tag: string;
}

export const SubscribeInput: FunctionComponent<SubscribeInputProps> = ({ listId, tag }) => {
  const subscribe = useSubscribe(listId, tag);
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [isSubscribed, setSubscribed] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(false);
    setError(false);

    subscribe(emailAddress)
      .then(() => setSubscribed(true))
      .catch(() => setError(true));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSubscribed(false);
    setError(false);
    setEmailAddress(event.target.value);
  };

  return (
    <form onSubmit={handleSubscribe} style={{ width: '100%' }}>
      <Flex
        flexDirection="row"
        alignItems="center"
        width="100%"
        justifyContent={{ _: 'center', lg: 'flex-start' }}>
        <Input
          height="40px"
          color="text.footer"
          sx={{
            border: '1px solid',
            borderRight: 'none',
            borderColor: 'footer.border',
            boxShadow: 'none'
          }}
          placeholder="Email Address"
          onChange={handleChange}
        />
        <Button
          height="40px"
          p="0"
          px="14px"
          sx={{
            borderTopLeftRadius: '0',
            borderBottomLeftRadius: '0'
          }}>
          Subscribe
        </Button>
      </Flex>
      {isSubscribed && (
        <Body variant="small" color="text.footer" mt="10px">
          Your email was added to our mailing list!
        </Body>
      )}
      {isError && (
        <Body variant="small" color="text.footer" mt="10px">
          Your email could not be added to the mailing list. You may be subscribed already.
        </Body>
      )}
    </form>
  );
};

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
