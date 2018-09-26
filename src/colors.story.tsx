import { storiesOf } from '@storybook/react';
import React from 'react';
import './colors.css';
import './colors.story.css';

const property = '--primary-color';

storiesOf('Styles', module).add('Colors', () => (
  <>
    <div className="color" style={{ backgroundColor: `var(${property})` }} />
    <code className="property">{property}</code>
  </>
));
