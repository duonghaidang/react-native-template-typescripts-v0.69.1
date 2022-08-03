import {
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {memo, useCallback, useMemo} from 'react';
import {appColors} from '../styles/colors';
import {appStyles} from '../utils/styles';
import {RootStackScreenProps} from '../navigators/root-stack';

const Modal = memo((props: RootStackScreenProps<'Modal'>) => {
  const {navigation, route} = props;

  const backdropStyle = useMemo(() => {
    const backdropOpacity = route?.params?.backdropOpacity;
    const backdropColor = route?.params?.backdropColor;
    return [
      styles.container,
      {
        backgroundColor:
          typeof backdropColor === 'string' ? backdropColor : appColors.black,
        opacity: typeof backdropOpacity === 'number' ? backdropOpacity : 0.7,
      },
    ];
  }, [route?.params?.backdropColor, route?.params?.backdropOpacity]);

  const onBackdropPress = useCallback(() => {
    navigation?.goBack();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <TouchableWithoutFeedback onPress={onBackdropPress}>
        <View style={backdropStyle} />
      </TouchableWithoutFeedback>
      {route?.params?.children}
    </View>
  );
});

export default Modal;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    position: 'absolute',
    ...appStyles.center,
  },
});
