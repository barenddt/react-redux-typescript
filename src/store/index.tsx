import { createStore } from "redux";
import { createBrowserHistory } from "history";
import { combineReducers } from "redux";
import { counterReducer } from "./counter/reducers";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  counter: counterReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
