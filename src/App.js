import React, { lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
// import ListItem from "./container/listItem"
// import DetailNews from "./container/detailNews/index"
// import ErrorPage from "./container/404Page/index"
import './style.scss'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

const ListItem = lazy(() => import("./container/listItem"))
const DetailNews = lazy(() => import("./container/detailNews/index"))
const ErrorPage = lazy(() => import("./container/404Page/index"))

function PrivateRoute() {
  const auth = false
  return auth ? <ListItem /> : <div>You don't have permission</div>
}

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={ListItem} />
          <Redirect from="/old" to="/new" />
          <PrivateRoute path="/profile" />
          <Route path="/detail/:id" component={DetailNews} />
          <Route component={ErrorPage} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
