import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const middleware = [thunk];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
const initialState = {
  user: null,
};
export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export const persistor = persistStore(store);
