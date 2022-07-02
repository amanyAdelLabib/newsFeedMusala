import React, {useCallback} from 'react';
import {Text, TouchableOpacity, useColorScheme} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import { Colors } from './../../Utils/Colors';
import {changeLanguage} from '../../Actions';

type Language = {
  title: string;
  code: string;
  forceRT: boolean;
  allowRT: boolean;
}; 
export const TagLanguage: React.FC<{
  language: Language;
  selectedLanguage: string;
  setSelectedLanguage: Function;
}> = ({language, selectedLanguage, setSelectedLanguage}) => {

  const dispatch: Function = useDispatch();


  const textColor = useColorScheme() === 'dark' ? Colors.black : Colors.white;
  const handlePress = useCallback(() => {
    dispatch(changeLanguage(language.code));

    setSelectedLanguage(language.code);
  }, [language, setSelectedLanguage]);
  return (
    <TouchableOpacity
      style={[
        styles.container,
        selectedLanguage === language.code && styles.selected,
      ]}
      onPress={handlePress}
      >
      <Text style={[styles.text, {color: textColor}]}>{`${
        language.title
      }`}</Text>
    </TouchableOpacity>
  );
};