
'use client';

import { Provider } from 'react-redux';
import store from './Redux/store';
import React from 'react';

const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Provider store={store}>{children}</Provider>
    </div>
  );
};

export default ReduxProvider;
