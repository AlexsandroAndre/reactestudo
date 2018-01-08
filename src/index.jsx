import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import getStore from './getStore';
import {Provider} from 'react-redux';
import main from './main.css';

ReactDom.render(
  <div>
    <Provider store={getStore()}>
      <App/>
    </Provider>
  </div>,
  document.getElementById('app')
);
