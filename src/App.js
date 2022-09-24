import React from 'react';
import { getUserProfile } from './api';
import { Provider } from 'react-redux'
import initStore from './store'
import { ToastProvider } from 'react-toast-notifications'

import ServiceApp from './ServiceApp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { onAuthStateChanged, storeAuthUser} from './actions/index'

const store = initStore()

class App extends React.Component {
  componentDidMount() {
    this.unsubscribeAuth = onAuthStateChanged(authUser => {
      store.dispatch(storeAuthUser(authUser))
    })
  }

  componentWillUnmount() {
    this.unsubscribeAuth()
  }



  render() {
    
      return (
        <Provider store={store}>
          <ToastProvider>
              <Router>
                <ServiceApp />
              </Router>
            </ToastProvider>
          </Provider>
      );
    }
}

export default App;
