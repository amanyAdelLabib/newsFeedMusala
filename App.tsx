import React, {useEffect, useState, useMemo} from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/Store';
import  {MainTabs}  from './src/Navigations/MainTabs';


const App: React.FC = () => {

  return (
    <Provider store={store}>
      <MainTabs />    
  </Provider>
  )
};

export default App;
