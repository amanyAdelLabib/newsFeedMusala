import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Setting} from '../Screens';

const Stack = createStackNavigator();

function SettingStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      >
      <Stack.Screen name="Setting" component={Setting}  />
    </Stack.Navigator>
  );
}

export default SettingStack;
