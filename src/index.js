import React from 'react';
import ReactDOM from 'react-dom';
import { defineCustomElements } from 'mate-ui';
import registerServiceWorker from './registerServiceWorker';
import './index.css'

defineCustomElements(window);
registerServiceWorker();
