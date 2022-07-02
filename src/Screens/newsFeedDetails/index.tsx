import React, {useCallback, useEffect, useState} from 'react';
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  LogBox
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {Colors} from '../../Utils/Colors';
import {translate} from '../../Translation/TranslateConfig';
LogBox.ignoreAllLogs();//Ignore all log notifications

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

  const [mode, setMode] = useState('');

  const modeApp = useSelector(
    (state: any) => state?.changeModeReducer.mode || '',
  );

  const backgroundColor =
    useColorScheme() === 'dark' || mode === 'dark' ? '#000' : '#fff';
  const color =
    useColorScheme() === 'dark' || mode === 'dark' ? '#fff' : '#000';
  const contentColor =
    useColorScheme() === 'dark' || mode === 'dark' ? '#bbb' : '#444';
  const readMoreBgColor =
    useColorScheme() === 'dark' || mode === 'dark' ? '#222' : '#ddd';

  useEffect(() => {
    setMode(modeApp);
  }, []);

  useEffect(() => {
    setMode(modeApp);
  }, [modeApp]);
  const handleURLPress = useCallback(() => {
    Linking.openURL(article?.url);
  }, [article]);
  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
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
          {translate('readMore')}:{' '}
          <Text style={styles.link} onPress={handleURLPress}>
            {article?.url}
          </Text>
        </Text>
      </View>
    </>
  );
};
