import { handler } from "./handlers";

module.exports = (app: any) => {
  app.use(handler);
};
