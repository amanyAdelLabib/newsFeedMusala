import React, {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDispatch, useSelector} from 'react-redux';
import {changeLanguage} from '../Actions';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {Icon} from '@rneui/themed';

import HomeStack from './HomeStack';
import SettingStack from './SettingStack';
import {Colors} from '../Utils/Colors';
import {spacing} from '../Utils/Sizing';
const Tab = createBottomTabNavigator();

export const MainTabs: React.FC = () => {
  const scheme = useColorScheme();
  const [mode, setMode] = useState('');

  const modeApp = useSelector(
    (state: any) => state?.changeModeReducer.mode || '',
  );
  useEffect(() => {
    setMode(modeApp);
  }, [modeApp]);

  return (
    <NavigationContainer
      theme={scheme === 'dark' || mode === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            backgroundColor:
              scheme === 'dark' || mode === 'dark'
                ? Colors.black
                : Colors.appColor1,
            position: 'absolute',
            overflow: 'hidden',
          },
        }}
        tabBarIconStyle={{
          inactiveTintColor:
            scheme === 'dark' ? Colors.white : Colors.appColor9,
        }}
        tabBarOptions={{
          showLabel: false,
        }}
        initialRouteName="Home">
        <Tab.Screen
          name="home"
          component={HomeStack}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                // reverse
                name="ios-home"
                type="ionicon"
                color={focused ? Colors.appColor5 : Colors.appColor11}
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="settings"
          component={SettingStack}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                // reverse
                name="ios-settings"
                type="ionicon"
                color={focused ? Colors.appColor5 : Colors.appColor11}
                size={30}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// export default MainTabs;
