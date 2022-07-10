import {heightScale, widthScale} from './scaling-utils';

export const appFonts = {
  BLACK: 'Roboto-Black',
  BOLD: 'Roboto-Bold',
  LIGHT: 'Roboto-Light',
  MEDIUM: 'Roboto-Medium',
  REGULAR: 'Roboto-Regular',
  THIN: 'Roboto-Thin',
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
