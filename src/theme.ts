export default interface Theme {
  name: string;
  primaryColor: string;
}

export const light: Theme = {
  name: 'Default',
  primaryColor: '#027896',
};

export const dark: Theme = {
  name: 'Dark',
  primaryColor: '#0090b5',
};
