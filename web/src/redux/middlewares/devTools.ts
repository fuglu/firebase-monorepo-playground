import { compose } from "redux";

// TODO:
// Use https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm
// when https://github.com/zalmoxisus/redux-devtools-extension/issues/492 has been fixed
// Then remove this middleware

const maybeCreateComposeWithDevTools =
  // tslint:disable-next-line:no-string-literal
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"];

export const composeWithDevTools = maybeCreateComposeWithDevTools
  ? maybeCreateComposeWithDevTools({})
  : compose;
