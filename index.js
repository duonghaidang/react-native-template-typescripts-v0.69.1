/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/app';
import {name as appName} from './app.json';
import {initAppDefaultProps} from './src/utils/init-app-default-props';

initAppDefaultProps();

AppRegistry.registerComponent(appName, () => App);
