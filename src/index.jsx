/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from 'solid-app-router';

import 'bootstrap/scss/bootstrap.scss';
import './index.css';
import App from './App';

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root')
);
