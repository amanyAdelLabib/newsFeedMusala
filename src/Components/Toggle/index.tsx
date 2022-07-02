import React, {useMemo,useEffect} from 'react';
import {FlatList, Text,View} from 'react-native';
import {Language} from '../../Constants';
import {TagLanguage} from '../TagLanguage';
import styles from './styles';

export const Toggle: React.FC<{
  selectedLanguage: string;
  setSelectedLanguage: Function;
}> = ({selectedLanguage, setSelectedLanguage}) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={ Language}
      keyExtractor={(item: string) => item}
      renderItem={({item}: any) => (
        <TagLanguage
          language={item}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />
      )}
      style={styles.list}
      contentContainerStyle={styles.contentContainer}

    />
  );
};
