/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from 'solid-app-router';

import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
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
