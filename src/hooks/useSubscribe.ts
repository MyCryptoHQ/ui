import fetch from 'isomorphic-unfetch';

/**
 * A function that takes an email address and returns a Promise with the subscription status: true
 * for success, false for failure.
 *
 * @param {string} emailAddress
 * @return {Promise<boolean>}
 */
export type SubscribeFunction = (emailAddress: string) => Promise<boolean>;

export const API_ENDPOINT = 'https://proxy.mycryptoapi.com/mc';

/**
 * `useSubscribe` hook which returns a subscribe function.
 *
 * @param {string} listId
 * @param {string} tag
 * @return {SubscribeFunction}
 */
export const useSubscribe = (listId: string, tag: string): SubscribeFunction => {
  return async (emailAddress): Promise<boolean> => {
    const response = await fetch(`${API_ENDPOINT}/${listId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email_address: emailAddress,
        status: 'subscribed',
        tags: [tag]
      })
    });

    if (!response.ok) {
      throw new Error();
    }

    return true;
  };
};
