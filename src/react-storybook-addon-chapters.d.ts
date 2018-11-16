declare module 'react-storybook-addon-chapters' {
  import { storiesOf } from '@storybook/react';

  //   export function addWithChapters(
  //     chapterName: string,
  //     chapters: object,
  //   ): object;
  export interface Story {
    addWithChapters(chapterName: string, chapters: object): object;
  }
}
