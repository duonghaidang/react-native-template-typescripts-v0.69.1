import {StyleSheet} from 'react-native';
import React, {memo, useCallback, useRef} from 'react';
import AppScreenWrapper from '../components/app-screen-wrapper';
import {appColors} from '../styles/colors';
import {appText} from '../utils/typography';
import BasePressable from '../components/base/base-pressable';
import BaseText from '../components/base/base-text';
import BaseModal, {BaseModalRefObject} from '../components/base/base-modal';
import BaseFakeModal, {
  BaseFakeModalRefObject,
} from '../components/base/base-fake-modal';

const Home = memo(() => {
  const refModal = useRef<BaseModalRefObject>(null);
  const refFakeModal = useRef<BaseFakeModalRefObject>(null);

  const openModal = useCallback(() => {
    refModal?.current?.show();
  }, []);

  const openFakeModal = useCallback(() => {
    refFakeModal?.current?.show();
  }, []);

  return (
    <>
      <AppScreenWrapper style={styles.container}>
        <BasePressable onPress={openModal}>
          <BaseText>aaa</BaseText>
        </BasePressable>
        <BasePressable onPress={openFakeModal}>
          <BaseText>bbb</BaseText>
        </BasePressable>
      </AppScreenWrapper>
      <BaseModal ref={refModal}>
        <BaseText style={{backgroundColor: 'red'}}>bbb</BaseText>
      </BaseModal>
      <BaseFakeModal ref={refFakeModal}>
        <BaseText style={{backgroundColor: 'red'}}>bbb</BaseText>
        <BasePressable onPress={openModal}>
          <BaseText>bbb</BaseText>
        </BasePressable>
      </BaseFakeModal>
    </>
  );
});

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.cyan,
  },
  text: {
    ...appText.T12,
  },
});
