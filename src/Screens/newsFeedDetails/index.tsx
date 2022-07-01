import React, { useCallback} from 'react';
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {Colors} from '../../Utils/Colors';

interface Route {
  params: {
    article: {
      author: string;
      title: string;
      urlToImage: string;
      publishedAt: string;
      url: string;
      content: string;
    };
    articleIndex: number;
  };
}
export const NewsFeedDetails: React.FC<{route: Route}> = ({route}) => {
  const {article} = route?.params;
  const navigation = useNavigation();
  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const backgroundColor = useColorScheme() === 'dark' ? '#000' : '#fff';
  const color = useColorScheme() === 'dark' ? '#fff' : '#000';
  const contentColor = useColorScheme() === 'dark' ? '#bbb' : '#444';
  const readMoreBgColor = useColorScheme() === 'dark' ? '#222' : '#ddd';
  const handleURLPress = useCallback(() => {
    Linking.openURL(article?.url);
  }, [article]);

  return (
    <>
      <TouchableOpacity style={styles.crossContainer} onPress={goBack}>
        <Icon
          // reverse
          name="arrow-back-circle-outline"
          type="ionicon"
          color={Colors.appColor5}
          size={50}
        />
      </TouchableOpacity>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={[styles.container, {backgroundColor}]}
        contentContainerStyle={styles.contentContainer}>
        <Image
          style={styles.image}
          source={{uri: article?.urlToImage ?? 'https://picsum.photos/1000'}}
          resizeMode={'cover'}
        />
        <Text style={[styles.title, {color}]}>{article?.title}</Text>
        <Text style={[styles.content, {color: contentColor}]}>
          {article?.content}
        </Text>
      </ScrollView>
      <View
        style={[styles.readMoreContainer, {backgroundColor: readMoreBgColor}]}>
        <Text style={[styles.readMoreText, {color}]} numberOfLines={2}>
          Read more at{' '}
          <Text style={styles.link} onPress={handleURLPress}>
            {article?.url}
          </Text>
        </Text>
      </View>
    </>
  );
};
