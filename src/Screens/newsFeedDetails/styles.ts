import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {spacing} from '../../Utils/Sizing';
import {Colors} from '../../Utils/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 120,
  },
  image: {
    height: 500,
    width: '100%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  crossContainer: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 9,
  },
  cross: {
    height: 34,
    width: 34,
  },
  title: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: '600',
    lineHeight: 30,
    paddingHorizontal: spacing.lg,
    marginVertical: spacing.md,
  },
  content: {
    fontSize: responsiveFontSize(2),
    fontWeight: '400',
    lineHeight: 22,
    paddingHorizontal: spacing.lg,
  },
  readMoreContainer: {
    position: 'absolute',
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
    paddingHorizontal: spacing.lg,
    bottom: 0,
    width: '100%',
  },
  readMoreText: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '300',
    lineHeight: 22,
  },
  link: {
    color: Colors.appColor10,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: Colors.appColor10,
  },
});