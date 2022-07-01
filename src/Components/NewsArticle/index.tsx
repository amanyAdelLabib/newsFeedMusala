import React,{useCallback} from 'react';
import {Image, Text,View, TouchableOpacity} from 'react-native';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

type Post = {
  title: string;
  urlToImage: string;
  publishedAt: string;
  url: string;
  author: string;
};

export const NewsArticle: React.FC<{
  post: Post;
}> = ({post}) => {
  const navigation: any = useNavigation();
  const handleNavigate = useCallback(() => {
    navigation.navigate('Details', {article: post});
  }, [ navigation, post]);
  return (
    <TouchableOpacity activeOpacity={1} style={styles.container} onPress={handleNavigate}>
      <Image
        source={{
          uri: post?.urlToImage ?? 'https://picsum.photos/800',
          cache: 'force-cache',
        }}
        resizeMode={'cover'}
        style={styles.image}
      />
       <LinearGradient
        colors={['#0000', '#000A', '#000']}
        style={styles.titleContainer}>
        <Text style={styles.text}>{post?.title}</Text>
        <Text style={styles.timestamp}>
          {moment(post?.publishedAt).format('HH:MM DD, MMMM')}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};