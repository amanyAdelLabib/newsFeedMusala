import React, {useEffect, useCallback, useMemo, useState} from 'react';
import {Text, View, useColorScheme,LogBox} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ModeTag, Toggle} from '../../Components';
import {translate, setI18nConfig} from '../../Translation/TranslateConfig';
import styles from './styles';
import {Colors} from '../../Utils/Colors';
import { responsiveHeight } from 'react-native-responsive-dimensions';
LogBox.ignoreAllLogs();//Ignore all log notifications

export const Setting: React.FC = () => {
  const dispatch: Function = useDispatch();
  // const backgroundColor =selectedColor;

  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [mode, setMode] = useState('');
  const [selectedMode, setSelectedMode] = useState('');

  const languageCode = useSelector(
    (state: any) => state?.changeLanguageReducer.languageCode || 'en',
  );
  const modeApp = useSelector(
    (state: any) => state?.changeModeReducer.mode || '',
  );

  const backgroundColor =
    useColorScheme() === 'dark' || mode === 'dark'
      ? Colors.black
      : Colors.white;
  const color =
    useColorScheme() === 'dark' || mode === 'dark'
      ? Colors.white
      : Colors.black;
  useEffect(() => {
    setSelectedLanguage(languageCode);
    setMode(modeApp);
    setSelectedMode(modeApp);
  }, []);
  useEffect(() => {
    setSelectedLanguage(languageCode);
  }, [languageCode]);
  useEffect(() => {
    setMode(modeApp);
  }, [modeApp]);

  return (
    <View style={[styles.mainContainer, {backgroundColor}]}>
      
     <View style={styles.container}>
     <Text style={[styles.Text,{color}]}> {translate('selectLanguage')} </Text>

<Toggle
  selectedLanguage={selectedLanguage}
  setSelectedLanguage={setSelectedLanguage}
/>

<Text style={[styles.Text,{color}]}> {translate('selectMode')} </Text>

<ModeTag selectedMode={selectedMode} setSelectedMode={setSelectedMode} />
     </View>
    </View>
  );
};
