import {StyleSheet, Text} from 'react-native';
import React, {memo} from 'react';
import AppScreenWrapper from '../components/app-screen-wrapper';
import {appColors} from '../styles/colors';
import {appText} from '../utils/typography';

const Home = memo(() => {
  return (
    <AppScreenWrapper style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </AppScreenWrapper>
  );
});

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.blueDark,
  },
  text: {
    ...appText.T12,
  },
});
