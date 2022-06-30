import React, {useEffect, useState, useMemo} from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/Store';
import {NewsFeed} from './src/Screens'
const App: React.FC = () => {

  return (
    <Provider store={store}>
    {/* <Text>This is feed screen</Text> */}
    <NewsFeed/>
  </Provider>
  )
};

export default App;
