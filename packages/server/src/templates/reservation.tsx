import React from "react";
import { createStore } from  "redux";
import reducers from "../store/reducers"
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import FilterLink from "../containers/reservationApp";
const generateTemplate = (store: any) => {

  const storeAgain = createStore(reducers);

  const content = renderToString(
    <Provider store={storeAgain}>
      <FilterLink filter="SHOW ALL">All</FilterLink>
    </Provider>
  );

  // Grab the initial state from our Redux store
  // const preloadedState = store.getState();

  const html = `
    <!doctype html>
    <html lang="en">
    <head></head>
    <body>
    <header>
    </header>
    <main id="reservationApp">
    ${content}
    </main>
    <footer>
    </footer>
    <script>
    // WARNING: See the following for security issues around embedding JSON in HTML:
    // http://redux.js.org/recipes/ServerRendering.html#security-considerations
    window.__PRELOADED_STATE__ = ${JSON.stringify({
      asd: "this is a test"
    }).replace(/</g, "\\u003c")}
    </script>
    </body>
    </html>
    `;

  return html;
};

export default generateTemplate;
