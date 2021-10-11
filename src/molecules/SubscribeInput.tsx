import { Input } from '@rebass/forms/styled-components';
import type { ChangeEvent, FormEvent, FunctionComponent } from 'react';
import { useState } from 'react';

import { Body, Button, Flex } from '../atoms';
import { useSubscribe } from '../hooks';

export interface SubscribeInputProps {
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
