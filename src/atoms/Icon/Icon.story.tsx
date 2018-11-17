import { storiesOf } from '@storybook/react';
import React from 'react';
import Icon, { IconName, icons } from '.';
import Typography from '../Typography';

storiesOf('Atoms', module).addWithChapters('Icons', {
  info: 'Renders an icon',
  chapters: [
    {
      sections: icons.map(({ iconName }) => ({
        title: iconName,
        sectionFn: () => (
          <Typography key={iconName} as="span">
            <Icon
              key={iconName}
              icon={iconName as IconName}
              title={iconName}
              size="2x"
            />
          </Typography>
        ),
        options: {
          showSource: false,
          allowSourceToggling: true,
          showPropTables: false,
          allowPropTablesToggling: false,
        },
      })),
    },
  ],
});
