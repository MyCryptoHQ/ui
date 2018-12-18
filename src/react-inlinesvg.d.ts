declare module 'react-inlinesvg' {
  import { ComponentType, ReactNode } from 'react';

  export interface RequestError extends Error {
    isHttpError: boolean;
    status: number;
  }

  export interface InlineSVGError extends Error {
    name: 'InlineSVGError';
    isSupportedBrowser: boolean;
    isConfigurationError: boolean;
    isUnsupportedBrowserError: boolean;
    message: string;
  }

  export interface Props {
    baseURL?: string;
    cacheGetRequests?: boolean;
    children?: ReactNode;
    className?: string;
    preloader?: ReactNode;
    src: URL | string;
    style?: object;
    uniqueHash?: string;
    uniquifyIDs?: boolean;
    onError?(error: RequestError | InlineSVGError): void;
    onLoad?(src: URL | string, isCached: boolean): void;
    supportTest?(): void;
    wrapper?(): ReactNode;
  }

  const InlineSVG: ComponentType<Props>;
  export default InlineSVG;
}
