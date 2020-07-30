import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";
// import logMiddleware from "./middlewares/logMiddleware";
import ajaxMiddleware from "./middlewares/ajaxMiddleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    ajaxMiddleware
    // secondMiddleware,
  )
);

const store = createStore(
  reducer,
  // preloadedState,
  enhancers
);

export default store;
