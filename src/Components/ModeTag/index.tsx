import React, {useMemo} from 'react';
import {FlatList, Text} from 'react-native';
import {Modes} from '../../Constants';
import {Mode} from '../Mode';
import styles from './styles';

export const ModeTag: React.FC<{
  selectedMode: string;
  setSelectedMode: Function;
}> = ({selectedMode, setSelectedMode}) => {
  const formattedCategories = useMemo(() => Object.keys(Modes), [Modes]);
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={formattedCategories}
      keyExtractor={(item: string) => item}
      renderItem={({item}: any) => (
        <Mode
          mode={item}
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
        />
      )}
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
    />
  );
};
