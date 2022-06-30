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
  const [articleNumber, setArticleNumber] = useState(5);
  const {
    data: allNewsFeed,
    allNewsFeedLoading,
    searchedNews,
  } = useSelector((state: any) => state?.newsFeedReducer || []);

  useEffect(() => {
    dispatch(getNewsFeed(selectedCategory,articleNumber));
  }, [dispatch, selectedCategory, articleNumber]);

  useEffect(() => {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaa');
    console.log(allNewsFeed);
  }, [allNewsFeed]);

  const formattedAllNewsFeed = useMemo(
    () => allNewsFeed,
    [allNewsFeed],
  );
  const handleRefresh = useCallback(() => {
    dispatch(getNewsFeed(selectedCategory,articleNumber));
  }, [dispatch, selectedCategory, articleNumber]);

  const loadMoreArticles=()=>{
    if(articleNumber + 5 < 101)
    setArticleNumber(articleNumber+5)
  }
  const backgroundColor =
    useColorScheme() === 'dark' ? Colors.black : Colors.white;

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <SearchInput
        searchText={searchText}
        setSearchText={setSearchText}
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
        onEndReached={()=>loadMoreArticles()}
        onEndReachedThreshold={0.3}
        style={styles.list}
      />
    </View>
  );
};
