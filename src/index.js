import React, { Provider } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/config/configStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
