import React, {useEffect} from 'react';
import {Text, View,FlatList,useColorScheme} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getNewsFeed} from '../../Actions';
import {NewsArticle} from '../../Components';
import styles from './styles';
import { Colors } from '../../Utils/Colors';
export const NewsFeed: React.FC = () => {
  const dispatch: Function = useDispatch();

  const {data: allNewsFeed, allNewsFeedLoading} = useSelector(
    state => state?.newsFeedReducer || [],
  );

  useEffect(() => {
    dispatch(getNewsFeed());
  }, []);

  useEffect(() => {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaa')
    console.log(allNewsFeed)
  }, [allNewsFeed]);

  const backgroundColor = useColorScheme() === 'dark' ? Colors.black : Colors.white;

  return (
      
    <View style={[styles.container,{backgroundColor}]}>
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      data={allNewsFeed?.articles}
      renderItem={({item, index}: any) => (
        <NewsArticle post={item} />
      )}
      style={styles.list}
    />
  </View>
      
  );
    
};
