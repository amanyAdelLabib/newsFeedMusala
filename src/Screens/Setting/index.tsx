import React, {useEffect, useCallback, useMemo, useState} from 'react';
import {Text, View,useColorScheme} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Toggle} from '../../Components';
import {translate, setI18nConfig} from '../../Translation/TranslateConfig';
import styles from './styles';
import { Colors } from '../../Utils/Colors';

export const Setting: React.FC = () => {
  const dispatch: Function = useDispatch();
  const backgroundColor =
    useColorScheme() === 'dark' ? Colors.black : Colors.white;

  const [selectedLanguage, setSelectedLanguage] = useState('');
  const languageCode = useSelector(
    (state: any) => state?.changeLanguageReducer.languageCode || 'en',
  );

  useEffect(() => {
    setSelectedLanguage(languageCode);
  }, []);
  useEffect(() => {
    setSelectedLanguage(languageCode);
  }, [languageCode]);

  return (
    <View style={[styles.mainContainer,{backgroundColor}]}>
      <Text style={styles.languageText}> {translate('language_select')} </Text>

      <Toggle
        selectedLanguage={languageCode}
        setSelectedLanguage={setSelectedLanguage}
      />
    </View>
  );
};
