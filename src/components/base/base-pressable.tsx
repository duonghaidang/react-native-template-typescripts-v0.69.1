import {
  Pressable,
  PressableAndroidRippleConfig,
  PressableProps,
  View,
} from 'react-native';
import React, {forwardRef, memo, Ref, useCallback, useMemo} from 'react';
import {debounce} from 'lodash';

interface BasePressableProps extends PressableProps {
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  onLongPress?: () => void;
}

const BasePressable = memo(
  forwardRef((props: BasePressableProps, ref: Ref<View>) => {
    const {...rest} = props;

    const onPress = useCallback(() => {
      rest?.onPress?.();
    }, [rest]);
    const onPressDebounced = debounce(onPress, 500, {
      leading: true,
      trailing: false,
    });
    const onPressIn = useCallback(() => {
      rest?.onPressIn?.();
    }, [rest]);
    const onPressInDebounced = debounce(onPressIn, 500, {
      leading: true,
      trailing: false,
    });
    const onPressOut = useCallback(() => {
      rest?.onPressOut?.();
    }, [rest]);
    const onPressOutDebounced = debounce(onPressOut, 500, {
      leading: true,
      trailing: false,
    });
    const onLongPress = useCallback(() => {
      rest?.onLongPress?.();
    }, [rest]);
    const onLongPressDebounced = debounce(onLongPress, 500, {
      leading: true,
      trailing: false,
    });

    const androidRippleConfig: PressableAndroidRippleConfig = useMemo(() => {
      return {};
    }, []);

    return (
      <Pressable
        android_disableSound
        android_ripple={androidRippleConfig}
        {...rest}
        onPress={onPressDebounced}
        onPressIn={onPressInDebounced}
        onPressOut={onPressOutDebounced}
        onLongPress={onLongPressDebounced}
        ref={ref}
      />
    );
  }),
);

export default BasePressable;
