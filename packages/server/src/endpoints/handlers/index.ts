import { createStore } from  "redux";
import templates from "../../templates";
import reducers from "../../store/reducers"

export const handler = (req: any, res: any) => {
  const store = createStore(reducers);
  res.send(templates["reservation"](store));
};
