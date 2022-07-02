import {StyleSheet} from 'react-native';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import {spacing} from '../../Utils/Sizing';

export default StyleSheet.create({
  list: {
    maxHeight: responsiveHeight(6),
    width:"100%",
    // backgroundColor:'red'

    
  },
  contentContainer: {
    paddingVertical: spacing.sm,
    flex: 1,
    justifyContent: 'center',
    alignContent:'center',
  },
});