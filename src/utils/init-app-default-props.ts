import {LogBox} from 'react-native';

const typographyInit = () => {};

const logBoxInit = () => {
  //! disable warning LogBox
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
};

const initAppDefaultProps = () => {
  typographyInit();
  logBoxInit();
};

export {initAppDefaultProps, logBoxInit};
