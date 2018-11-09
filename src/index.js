import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'

// all of the middleware functions (firebase, thunk) need to get added to the overall store so that they can be accessed by any component (see redux thunk for how this works)
// in our case, projectActions.jsx is resonsible for doing async calls and then getting the results before dispatching an update to the reducers. projectActions.jsx recieves the 
// middlewhere funcions below as parameters in its function (see file fore more info)
const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(fbConfig, { attachAuthIsReady: true, userProfile: 'users', useFirestoreForProfile: true }),
    reduxFirestore(fbConfig)
  )
)

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
  serviceWorker.unregister();
})


