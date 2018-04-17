import React from "react";
import ReactDOM from "react-dom";
import Login from "./componets/Login";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
// import createLogger from 'redux-logger';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// import {
//   Router,
//   Route,
//   Link,
//   browserHistory,
//   hashHistory,
//   IndexRedirect,
//   IndexRoute
// } from "react-router";
import {
  browserHistory,
  hashHistory,
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import "./styles/appleBusket.less";

import AppleBasket from "./containers/AppleBasket";
import MainNav from "./componets/Main/MainNav";
import MainPage from "./componets/Main";
import reducer from "./reducers";
import './styles/index.less';

// render(<Greeter />, document.getElementById('root'));
// const logger = createLogger();

const store = createStore(reducer, applyMiddleware(thunk, promiseMiddleware)); //applyMiddleware中间件将所有中间件组成一个数组
window.state = store.getState();
window.dispatch = store.dispatch;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact={true} path="/" component={Login} />
        <Route exact={true} path="/appleBasket" component={AppleBasket} />
        <Route exact={true} path="/MainNav" component={MainNav} />
        <Route exact={true} path="/mainPage" component={MainPage} />
        <Route component={AppleBasket} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
