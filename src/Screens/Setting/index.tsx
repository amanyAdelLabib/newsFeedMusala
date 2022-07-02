import React, {useEffect, useCallback, useMemo, useState} from 'react';
import {Text, View,useColorScheme} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ModeTag, Toggle} from '../../Components';
import {translate, setI18nConfig} from '../../Translation/TranslateConfig';
import styles from './styles';
import { Colors } from '../../Utils/Colors';

export const Setting: React.FC = () => {
  const dispatch: Function = useDispatch();
  // const backgroundColor =selectedColor;

  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [mode, setMode] = useState('');
  const [selectedMode, setSelectedMode] = useState('');

  const languageCode = useSelector(
    (state: any) => state?.changeLanguageReducer.languageCode || 'en',
  );
  const modeApp = useSelector((state: any) => state?.changeModeReducer.mode || '' );

  useEffect(() => {
    setSelectedLanguage(languageCode);
    setMode(modeApp)
    setSelectedMode(modeApp)
  }, []);
  useEffect(() => {
    setSelectedLanguage(languageCode);
  }, [languageCode]);
  useEffect(() => {
    setMode(modeApp);
  }, [modeApp]);

  return (
    <View style={[styles.mainContainer,{backgroundColor: useColorScheme() === 'dark' || mode === 'dark' ? Colors.black : Colors.white}]}>
      <Text style={styles.languageText}> {translate('selectLanguage')} </Text>

      <Toggle
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />

<Text style={styles.languageText}> {translate('selectMode')} </Text>

  <ModeTag
    selectedMode={selectedMode}
    setSelectedMode={setSelectedMode}
  />
    </View>
  );
};
