import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {};

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(
      reducers,
      {},
      applyMiddleware(ReduxThunk)
    );

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;