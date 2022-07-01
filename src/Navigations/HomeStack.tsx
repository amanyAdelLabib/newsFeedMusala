import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
    NewsFeed,
    NewsFeedDetails,
} from '../Screens';

const Stack = createStackNavigator();

const HomeStack=()=> {
  return (
    <Stack.Navigator
      initialRouteName="NewsFeed"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="NewsFeed" component={NewsFeed} />
      <Stack.Screen name="Details" component={NewsFeedDetails} />
    </Stack.Navigator>
  );
}

export default HomeStack;

