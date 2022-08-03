import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {appColors} from './styles/colors';
import RootStack from './navigators/root-stack';
import BaseFakeModal from './components/base/base-fake-modal';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={appColors.transparent}
          translucent={true}
        />
        <RootStack />
        <BaseFakeModal />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
