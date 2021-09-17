import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import 'material-icons/iconfont/material-icons.css';
import 'bulma/css/bulma.css'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { persistCache, LocalStorageWrapper, persistCacheSync } from 'apollo3-cache-persist';

const cache = new InMemoryCache();

persistCacheSync({
  cache,
  storage: new LocalStorageWrapper(window.localStorage)
})


const client = new ApolloClient({
  uri: 'https://todo-react-pwa-server.herokuapp.com/api/v1/todo',
  cache
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
