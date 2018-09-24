import { storiesOf } from '@storybook/react';
import React from 'react';
import './colors.css';
import './colors.story.css';

storiesOf('Styles', module).add('Colors', () =>
  Array.from({ length: 14 }, (value, index) => {
    const property = `--color-${index + 1}`;

    return (
      <div>
        <div
          className="color"
          style={{ backgroundColor: `var(${property})` }}
        />
        <code className="property">{property}</code>
      </div>
    );
  }),
);
