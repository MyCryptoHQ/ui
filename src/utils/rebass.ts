import { keys } from './keys';

const marginProps = [
  'm',
  'margin',
  'mt',
  'marginTop',
  'mr',
  'marginRight',
  'mb',
  'marginBottom',
  'ml',
  'marginLeft',
  'mx',
  'marginX',
  'my',
  'marginY'
];

const getProps = (test: (key: string) => boolean) => (props: any) =>
  keys(props)
    .filter((prop) => test(prop.toString()))
    .reduce((obj, key) => {
      return { ...obj, [key]: props[key] };
    }, {});

export const getMarginProps = getProps((k) => marginProps.includes(k));
export const omitMarginProps = getProps((k) => !marginProps.includes(k));
