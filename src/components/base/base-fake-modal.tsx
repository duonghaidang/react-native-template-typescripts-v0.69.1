import React, {
  forwardRef,
  Ref,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Animated,
  LayoutChangeEvent,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewProps,
} from 'react-native';
import {appColors} from '../../styles/colors';
import {appStyles} from '../../utils/styles';

export interface BaseFakeModalRefObject {
  show: (item?: any) => void;
  hide: () => void;
}

interface BaseFakeModalProps extends ViewProps {}

const BaseFakeModal = forwardRef(
  (props: BaseFakeModalProps, ref: Ref<BaseFakeModalRefObject>) => {
    const [visible, setVisible] = useState(false);

    const animated = useRef(new Animated.Value(0));

    const show = useCallback(() => {
      setVisible(true);
      Animated.timing(animated.current, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }, []);

    const hide = useCallback(() => {
      Animated.timing(animated.current, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => setVisible(false));
    }, []);

    const backdropStyle = useMemo(
      () => [
        styles.container,

        {
          backgroundColor: appColors.black,
          opacity: animated.current.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.7],
          }),
        },
      ],
      [animated],
    );
    const childrenStyle = useMemo(() => {
      return {
        transform: [
          {
            scale: animated.current,
          },
        ],
      };
    }, [animated]);

    useImperativeHandle(ref, () => ({
      show,
      hide,
    }));

    if (!visible) {
      return null;
    }

    return (
      <View
        style={styles.container}
        onLayout={(e: LayoutChangeEvent) => {
          console.log('Đăng log ngay đây ~~> e', e);
        }}>
        <StatusBar barStyle={'light-content'} />
        <TouchableWithoutFeedback onPress={hide}>
          <Animated.View style={backdropStyle} />
        </TouchableWithoutFeedback>
        <Animated.View style={childrenStyle}>
          <View {...props} />
        </Animated.View>
      </View>
    );
  },
);

export default BaseFakeModal;

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
