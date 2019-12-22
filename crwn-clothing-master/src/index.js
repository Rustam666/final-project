import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import {ClotheProvider} from "./components/shop.new/database";
import './index.css';
import App from './App';

ReactDOM.render(
    <ClotheProvider>
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
    </ClotheProvider>,
  document.getElementById('root')
);
