import React, {useEffect, useState, useMemo} from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/Store';
import {NewsFeed} from './src/Screens'
import { HomeStack } from './src/Navigations/HomeStack';
import { NavigationContainer } from '@react-navigation/native';
import  MainTabs  from './src/Navigations/MainTabs';


const App: React.FC = () => {

  return (
    <Provider store={store}>
    {/* <Text>This is feed screen</Text> */}
    {/* <NewsFeed/> */}
    {/* <HomeStack /> */}
    {/* <NavigationContainer> */}
      <MainTabs />
    {/* </NavigationContainer> */}
    
  </Provider>
  )
};

export default App;
