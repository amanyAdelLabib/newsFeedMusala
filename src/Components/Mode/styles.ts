import {StyleSheet} from 'react-native';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
import {spacing} from '../../Utils/Sizing';
import { Colors } from './../../Utils/Colors';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.appColor2,
    borderRadius: 12,
    height: responsiveHeight(4),
    paddingHorizontal: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.lg,
    backgroundColor: Colors.appColor3,
  },
  text: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
  },
  selected: {
    backgroundColor: Colors.appColor4,
    borderColor: Colors.appColor5,
  },
});
