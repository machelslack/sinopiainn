import express = require("express");

import templates from "./src/templates";

// Create a new express application instance
const app: express.Application = express();

// register routed endpoints
require('./src/endpoints')(app);

const template = templates["reservation"]({});

app.get("/", function(req, res) {
  res.send(template);
});

const server = app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});

// Here HMR story begins
declare const module: any;
// You need only 3 lines of code to start accepting code changes coming through the HMR
if (module.hot) {
  module.hot.accept();
  // Next callback is essential: After code changes were accepted     we need to restart the app. server.close() is here Express.JS-specific and can differ in other frameworks. The idea is that you should shut down your app here. Data/state saving between shutdown and new start is possible
  module.hot.dispose(() => server.close());
}
