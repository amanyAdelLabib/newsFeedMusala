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
    // justifyContent: 'center',
    // alignContent:'center',
    marginVertical:responsiveHeight(3),
    flex: 1,
    paddingHorizontal: responsiveWidth(2),
  },
  container:{
    height:responsiveHeight(35),
    backgroundColor:Colors.appColor7,
    opacity: 0.7,
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(5),
    borderRadius:20,
    

   },
  Text:{fontSize: responsiveFontSize(2),fontWeight:'bold', color: Colors.black,marginTop:responsiveHeight(3)}
});