import {Dimensions} from 'react-native';

//Default guideline sizes are based on standard iPhone8 screen mobile device

export const guidelineBaseWidth = 428; //1135;

export const guidelineBaseHeight = 926; //2436

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const [shortDimension, longDimension] =
  window.width < window.height
    ? [window.width, window.height]
    : [window.height, window.width];
const [shortDimensionScreen, longDimensionScreen] =
  screen.width < screen.height
    ? [screen.width, screen.height]
    : [screen.height, screen.width];

export const scale = (size = 1) => (shortDimension / guidelineBaseWidth) * size;
export const moderateScale = (size = 1, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const widthScale = (size = 1) =>
  (shortDimension / guidelineBaseWidth) * size;
export const moderateWidthScale = (size = 1, factor = 0.5) =>
  size + (widthScale(size) - size) * factor;

export const heightScale = (size = 1) =>
  (longDimension / guidelineBaseHeight) * size;
export const moderateHeightScale = (size = 1, factor = 0.5) =>
  size + (heightScale(size) - size) * factor;

export const windowWidth = (percent = 1) => shortDimension * percent;
export const windowHeight = (percent = 1) => longDimension * percent;
export const screenWidth = (percent = 1) => shortDimensionScreen * percent;
export const screenHeight = (percent = 1) => longDimensionScreen * percent;
