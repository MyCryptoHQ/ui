import { keys } from './keys';

const MRE = /^m[trblxy]?$/;

const getProps = (test: (key: string) => boolean) => (props: any) =>
  keys(props)
    .filter((prop) => test(prop.toString()))
    .reduce((obj, key) => {
      return { ...obj, [key]: props[key] };
    }, {});

export const getMarginProps = getProps((k) => MRE.test(k));
export const omitMarginProps = getProps((k) => !MRE.test(k));
