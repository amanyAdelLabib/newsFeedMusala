import React, {useEffect, useCallback, useMemo, useState} from 'react';
import {RefreshControl, View, FlatList, useColorScheme} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getNewsFeed} from '../../Actions';
import {NewsArticle, NewsTag,SearchInput} from '../../Components';
import styles from './styles';
import {Colors} from '../../Utils/Colors';
import {Category} from '../../Constants';
export const NewsFeed: React.FC = () => {
  const dispatch: Function = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState(Category.business);
  const [searchText, setSearchText] = useState('');
  const {
    data: allNewsFeed,
    allNewsFeedLoading,
    searchedNews,
  } = useSelector((state: any) => state?.newsFeedReducer || []);

  useEffect(() => {
    dispatch(getNewsFeed(selectedCategory));
  }, [dispatch, selectedCategory]);

  useEffect(() => {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaa');
    console.log(allNewsFeed);
  }, [allNewsFeed]);

  const formattedAllNewsFeed = useMemo(
    () => allNewsFeed,
    [allNewsFeed],
  );
  const handleRefresh = useCallback(() => {
    dispatch(getNewsFeed(selectedCategory));
  }, [dispatch, selectedCategory]);
  const backgroundColor =
    useColorScheme() === 'dark' ? Colors.black : Colors.white;

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <SearchInput
        searchText={searchText}
        setSearchText={setSearchText}
        // setIsLoading={setIsLoading}
      />
      {!searchText?.trim() && (
        <NewsTag
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}

      <FlatList
        keyExtractor={(item: string, index: number) => index.toString()}
        showsVerticalScrollIndicator={false}
        data={!searchText?.trim() ?formattedAllNewsFeed:searchedNews}
        renderItem={({item, index}: any) => <NewsArticle post={item} />}
        refreshControl={
          <RefreshControl
            refreshing={allNewsFeedLoading}
            onRefresh={handleRefresh}
          />
        }
        style={styles.list}
      />
    </View>
  );
};
