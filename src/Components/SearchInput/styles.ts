import {StyleSheet} from 'react-native';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import {spacing} from '../../Utils/Sizing';
export default StyleSheet.create({
  container: {
    height: responsiveHeight(5),
    marginHorizontal: spacing.lg,
    marginBottom: spacing.sm,
    borderRadius: 20,
    paddingHorizontal: spacing.lg,
    fontWeight: '400',
  },
});