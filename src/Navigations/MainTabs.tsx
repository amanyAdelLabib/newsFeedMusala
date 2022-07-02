import  React,{useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { useSelector} from 'react-redux';

import {translate,setI18nConfig } from '../Translation/TranslateConfig';

import HomeStack from './HomeStack';
import SettingStack from './SettingStack';
import { Colors } from '../Utils/Colors';
import { spacing } from '../Utils/Sizing';
const Tab = createBottomTabNavigator();

export const MainTabs: React.FC = () => {
  const scheme = useColorScheme();
  const languageCode = useSelector((state: any) => state?.changeLanguageReducer.languageCode || 'en' );
  
  useEffect(() => {
    setI18nConfig(languageCode); 
  }, []);
  useEffect(() => {
    setI18nConfig(languageCode); 
  }, [languageCode]);

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        screenOptions={{headerShown: false, tabBarStyle: {
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          backgroundColor:scheme === 'dark'?Colors.black :Colors.appColor1,
          position: 'absolute',
          overflow: 'hidden',
        }}}
        
        
        tabBarOptions={{
          
          labelStyle: {fontSize: responsiveFontSize(2), marginBottom: spacing.md,fontWeight:'bold',},
          // activeTintColor: 'red',
          // inactiveTintColor: scheme === 'dark' ? Colors.white : Colors.appColor9,
          // tabBarShowLabel: false,
          
        }}
        initialRouteName="Home">
        <Tab.Screen
          name={translate('home')}
          component={HomeStack}
          options={{
            tabBarIcon: () => null,
          }}
        />
        <Tab.Screen
          name={translate('settings')}
          component={SettingStack}
          options={{
            tabBarIcon: () => null,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// export default MainTabs;
