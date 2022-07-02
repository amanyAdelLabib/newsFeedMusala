import {StyleSheet} from 'react-native';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import {spacing} from '../../Utils/Sizing';

export default StyleSheet.create({
  list: {
    maxHeight: responsiveHeight(5),
    width:"100%",

  },
  contentContainer: {
    paddingVertical: spacing.sm,
    flex: 1,
    justifyContent: 'center',
    alignContent:'center',
  },
});