import '@storybook/react';

declare module '@storybook/react' {
  export interface Story {
    addWithChapters(chapterName: string, chapters: object): object;
  }
}
