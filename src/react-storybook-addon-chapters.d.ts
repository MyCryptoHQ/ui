import '@storybook/react';

declare module '@storybook/react' {
  //   export function addWithChapters(
  //     chapterName: string,
  //     chapters: object,
  //   ): object;
  export interface Story {
    addWithChapters(chapterName: string, chapters: object): object;
  }
}
