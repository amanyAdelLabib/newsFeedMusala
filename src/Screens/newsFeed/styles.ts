import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {spacing} from '../../Utils/Sizing';
export default StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    paddingTop:  spacing.md,
  },
  list: {
    flex: 1,
    flexGrow: 1,
    paddingVertical: spacing.sm,
  },
});