import React, {useMemo} from 'react';
import {FlatList, Text} from 'react-native';
import {Category} from '../../Constants';
import {Tag} from '../Tag';
import styles from './styles';

export const NewsTag: React.FC<{
  selectedCategory: string;
  setSelectedCategory: Function;
}> = ({selectedCategory, setSelectedCategory}) => {
  const formattedCategories = useMemo(() => Object.keys(Category), [Category]);
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={formattedCategories}
      keyExtractor={(item: string) => item}
      renderItem={({item}: any) => (
        <Tag
          category={item}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
    />
  );
};
