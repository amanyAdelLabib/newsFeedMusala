import { StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {spacing} from '../../Utils/Sizing';
import { Colors } from './../../Utils/Colors';

export default StyleSheet.create({
  container: {
    height: responsiveHeight(35),
    marginBottom: spacing.md,
    backgroundColor: Colors.appColor1,
    borderRadius: 24,
    marginHorizontal:  spacing.md,
    elevation: 6,
  },
  imageContainer: {flex: 1},
  image: {
    flex: 1,
    borderRadius: 24,
    height: responsiveHeight(30),
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    height: 160,
    paddingLeft:  spacing.md,
    paddingRight:  spacing.sm,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: '600',
    lineHeight: 24,
    color: Colors.white,
    paddingBottom: spacing.lg,
  },
  timestamp: {
    position: 'absolute',
    color: Colors.appColor1,
    fontSize: responsiveFontSize(1.5),
    fontWeight: '300',
    right: spacing.md,
    bottom: spacing.sm,
  },
});