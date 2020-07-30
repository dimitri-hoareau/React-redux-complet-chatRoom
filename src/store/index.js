import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
// import logMiddleware from "./middlewares/logMiddleware";
import ajaxMiddleware from "./middlewares/ajaxMiddleware";

const store = createStore(reducer, applyMiddleware(ajaxMiddleware));

export default store;
