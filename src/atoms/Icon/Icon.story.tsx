import { storiesOf } from '@storybook/react';
import React from 'react';
// import Icon, { IconName, icons } from '.';
// import Typography from '../Typography';

// storiesOf('Atoms', module).add('Icon', () =>
//   icons.map(({ iconName }) => (
//     <Typography key={iconName} as="span">
//       <Icon
//         key={iconName}
//         icon={iconName as IconName}
//         title={iconName}
//         size="3x"
//       />
//     </Typography>
//   )),
// );

(storiesOf('Atoms', module) as any).addWithChapters('Icons', {
  subtitle: 'Icon',
  info: 'Renders an icon',
  chapters: [
    {
      title: 'Default Icon',
      sections: [
        {
          title: 'Default Icon',
          sectionFn: () => <div>Some text</div>,
          options: {
            showSource: true,
            allowSourceToggling: true,
            showPropTables: true,
            allowPropTablesToggling: true,
          },
        },
      ],
    },
  ],
});
