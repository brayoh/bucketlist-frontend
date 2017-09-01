import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import App from './components/App';
import LoginContainer from './containers/LoginContainer';
import SignUpContainer from './containers/SignUpContainer';
import DashboardContainer from './containers/DashboardContainer';
import ItemsContainer from './containers/ItemsContainer';


import configureStore from "./store";

const store_config = configureStore()

const requireAuth = (store) => (nextState, replace) => {
  if (!store.getState().auth.authenticated) {
    replace({
        pathname: '/login',
        state: {nextPathname: nextState.location.pathname}
    })
  }
};

const redirectIfAuth = (store) => (nextState, replace) => {
  if (store.getState().auth.authenticated) {
    replace({
        pathname: '/dashboard',
        state: {nextPathname: nextState.location.pathname}
    })
  }
};

const store = store_config['store']

const AppRoutes = () => (

  <Provider store={store}>
    <Router history={store_config.history}>
      <Route path='/' component={App}>
        // public routes
        <Route path='/login' component={LoginContainer} onEnter={ redirectIfAuth(store) } />
        <Route path='/register' component={SignUpContainer} onEnter={ redirectIfAuth(store) }/>
        
        // protected routes
        <Route path='/dashboard' component={DashboardContainer} onEnter={ requireAuth(store) }/>
        <Route path='/dashboard/:bucket_id/items' component={ItemsContainer}  onEnter={ requireAuth(store) }/>

        </Route>
    </Router>
  </Provider>

);

export default AppRoutes;
