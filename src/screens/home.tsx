import {StyleSheet} from 'react-native';
import React, {memo, useCallback, useId, useMemo} from 'react';

import {Edge} from 'react-native-safe-area-context';
import {RootStackScreenProps} from '~navigators/root-stack';
import BasePressable from '~components/base/base-pressable';
import {randomHexColor} from '~utils/color.hepler';
import BaseText from '~components/base/base-text';
import AppScreenWrapper from '~components/app-screen-wrapper';
import {appColors} from '~styles/colors';
import {appText} from '~utils/typography';

const EDGES: Edge[] = ['top', 'right', 'left'];

const Home = memo((props: RootStackScreenProps<'BottomTab'>) => {
  const {navigation} = props;

  const id = useId();

  const ViewModal = useMemo(() => {
    return (
      <BasePressable
        style={{backgroundColor: randomHexColor()}}
        onPress={() => {
          navigation.push('Modal', {
            children: ViewModal,
            backdropOpacity: 0,
          });
        }}>
        <BaseText>haha-{id}</BaseText>
      </BasePressable>
    );
  }, [id, navigation]);

  const openModal = useCallback(() => {
    navigation.push('Modal', {
      children: ViewModal,
    });
  }, [ViewModal, navigation]);

  const goto = useCallback(() => {
    navigation.navigate('BottomTab', {
      screen: 'Video',
    });
  }, [navigation]);

  return (
    <AppScreenWrapper style={styles.container} edges={EDGES}>
      <BasePressable onPress={openModal}>
        <BaseText>aaa</BaseText>
      </BasePressable>
      <BasePressable onPress={goto}>
        <BaseText>bbb</BaseText>
      </BasePressable>
    </AppScreenWrapper>
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
