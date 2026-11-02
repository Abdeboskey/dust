import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { wrapHistory } from "oaf-react-router";
import './index.css';
import App from './App';

const history = createBrowserHistory();
wrapHistory(history, {
  // Same-page #anchor clicks arrive as POP actions; restoring the saved scroll
  // position would undo the browser's native jump to the anchor.
  shouldHandleAction: (previous, next) =>
    previous.pathname !== next.pathname || previous.search !== next.search,
  // Give React time to render the new route so hash targets exist before focusing them.
  renderTimeout: 50,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </React.StrictMode>
);
