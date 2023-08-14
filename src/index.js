import React from 'react';
import ReactDOM from 'react-dom/client';
import App  from 'components/App';
// ********************************************************
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading = {null}> 
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
