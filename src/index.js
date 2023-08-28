import React from 'react';
import {createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import {RootCmp} from './root-cmp';
import './assets/styles/styles.scss'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
<React.StrictMode>
      <Router>
        <RootCmp />
      </Router>
  </React.StrictMode>,
);