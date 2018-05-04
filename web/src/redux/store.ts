import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "./middlewares/devTools";
import { userReducer } from "./modules/user";

const rootReducer = combineReducers({
  user: userReducer
});

export const store = createStore(rootReducer, composeWithDevTools());
