import * as React from 'react';
import {useColorScheme} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import HomeStack from './HomeStack';
import SettingStack from './SettingStack';
import { Colors } from '../Utils/Colors';
import { spacing } from '../Utils/Sizing';
const Tab = createBottomTabNavigator();

function MainTabs() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        tabBarOptions={{
          labelStyle: {fontSize: responsiveFontSize(2), marginBottom: spacing.md,fontWeight:'bold'},
          activeTintColor: 'red',
          inactiveTintColor: scheme === 'dark' ? Colors.white : Colors.appColor9,
          tabBarShowLabel: false,
        }}
        initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: () => null,
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingStack}
          options={{
            tabBarIcon: () => null,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainTabs;
