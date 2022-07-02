import React, {useCallback} from 'react';
import {TextInput, useColorScheme} from 'react-native';
import {useDispatch} from 'react-redux';
import {searchNewsFeed, resetSearchNewsFeed} from '../../Actions';
import styles from './styles';
import { Colors } from '../../Utils/Colors';
import {translate } from '../../Translation/TranslateConfig';

export const SearchInput: React.FC<{
  searchText: string;
  setSearchText: Function;
}> = ({searchText, setSearchText}) => {
  const backgroundColor = useColorScheme() === 'dark' ? Colors.appColor6 : Colors.appColor7;
  const placeholderColor = useColorScheme() === 'dark' ? Colors.appColor1 : Colors.appColor8;
  const color = useColorScheme() === 'dark' ? Colors.white : Colors.black;
  const dispatch: Function = useDispatch();
  const searchForText = useCallback(
  (text: string) => {
      if (text?.trim().length > 0) {
        dispatch(searchNewsFeed(text));
      } else {
        dispatch(resetSearchNewsFeed());
      }
    },
    [setSearchText, dispatch],
  );
  return (
    <TextInput
      placeholder={translate('search')}
      placeholderTextColor={placeholderColor}
      style={[styles.container, {backgroundColor, color}]}
      value={searchText}
      onChangeText={(text: string) => {
        setSearchText(text);
        searchForText(text);
      }}
      maxLength={40}
      returnKeyType={'search'}
    />
  );
};