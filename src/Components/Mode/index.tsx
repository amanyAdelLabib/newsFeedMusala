import React, {useCallback} from 'react';
import {Text, TouchableOpacity, useColorScheme} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeMode} from '../../Actions';
import styles from './styles';
import { Colors } from './../../Utils/Colors';
import { translate } from '../../Translation/TranslateConfig';

export const Mode: React.FC<{
  mode: string;
  selectedMode: string;
  setSelectedMode: Function;
}> = ({mode, selectedMode, setSelectedMode}) => {
  const dispatch: Function = useDispatch();

  const textColor = useColorScheme() === 'dark' ? Colors.black : Colors.white;
  const handlePress = useCallback(() => {
    setSelectedMode(mode)
    dispatch(changeMode(mode));

  }, [mode, setSelectedMode]);
  return (
    <TouchableOpacity
      style={[
        styles.container,
        selectedMode === mode && styles.selected,
      ]}
      onPress={handlePress}>
      <Text style={[styles.text, {color: textColor}]}>{`${
       mode
      }`}</Text>
    </TouchableOpacity>
  );
};