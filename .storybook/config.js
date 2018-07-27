import { configure } from '@storybook/react';
import '@storybook/addon-actions/register';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
