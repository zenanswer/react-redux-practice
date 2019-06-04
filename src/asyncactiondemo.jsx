import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import AsyncAction from './asyncaction/asyncaction';


const AsyncActionDemo = () => (
  <div>
    <Provider store={store}>
      <AsyncAction />
    </Provider>
  </div>
);

export default AsyncActionDemo;
