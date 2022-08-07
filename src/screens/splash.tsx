import {StyleSheet} from 'react-native';
import React, {memo, useEffect} from 'react';
import AppScreenWrapper from '~components/app-screen-wrapper';
import BaseText from '~components/base/base-text';
import {appColors} from '~styles/colors';
import {RootStackScreenProps} from '~navigators/root-stack';
import {appStyles} from '~utils/styles';

const Splash = memo((props: RootStackScreenProps<'Splash'>) => {
  const {navigation} = props;

  useEffect(() => {
    setTimeout(() => {
      navigation?.replace?.('BottomTab');
    }, 2000);
  }, [navigation]);

  return (
    <AppScreenWrapper style={styles.container}>
      <BaseText>Splash</BaseText>
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
