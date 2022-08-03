import {StyleSheet, Text} from 'react-native';
import React, {memo, useEffect} from 'react';
import {appColors} from '../styles/colors';
import AppScreenWrapper from '../components/app-screen-wrapper';
import {RootStackScreenProps} from '../navigators/root-stack';
import {appStyles} from '../utils/styles';

const Splash = memo((props: RootStackScreenProps<'Splash'>) => {
  const {navigation} = props;

  useEffect(() => {
    setTimeout(() => {
      navigation?.replace?.('BottomTab');
    }, 2000);
  }, [navigation]);

  return (
    <AppScreenWrapper style={styles.container}>
      <Text>Splash</Text>
    </AppScreenWrapper>
  );
});

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.while,
    ...appStyles.center,
  },
});
