import React from 'react';
import '../index';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
  .add('Basic buttons', () => (
    <div className="buttons-container">
      <mate-button type="primary">Primary button</mate-button>
      <mate-button
        type="secondary"
        outline
      >
        Secondary button
      </mate-button>
    </div>
  ))
