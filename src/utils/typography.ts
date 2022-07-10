import {heightScale, widthScale} from './scaling-utils';

export const appFonts = {
  BLACK: 'RobotoSlab-Black',
  BOLD: 'RobotoSlab-Bold',
  EXTRA_BOLD: 'RobotoSlab-ExtraBold',
  EXTRA_LIGHT: 'RobotoSlab-ExtraLight',
  LIGHT: 'RobotoSlab-Light',
  MEDIUM: 'RobotoSlab-Medium',
  REGULAR: 'RobotoSlab-Regular',
  SEMI_BOLD: 'RobotoSlab-SemiBold',
  THIN: 'RobotoSlab-Thin',
};

const scale = Math.min(widthScale(), heightScale());

export const appFontSize = (size = 1) => Math.ceil(size * scale);

export const appText = {
  T10: {
    fontSize: appFontSize(10),
    fontFamily: appFonts.REGULAR,
  },
  T12: {
    fontSize: appFontSize(12),
    fontFamily: appFonts.REGULAR,
  },
};
