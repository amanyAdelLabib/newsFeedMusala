import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { Colors } from '../../Utils/Colors';
import {spacing} from '../../Utils/Sizing';
export default StyleSheet.create({
  mainContainer:{
    justifyContent: 'center',
    alignContent:'center',
    flex: 1,
    paddingHorizontal: responsiveWidth(2),
  },
  languageText:{fontSize: responsiveFontSize(2),fontWeight:'bold', color: Colors.appColor10}
});