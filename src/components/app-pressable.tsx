import {
  Pressable,
  PressableAndroidRippleConfig,
  PressableProps,
  View,
} from 'react-native';
import React, {
  forwardRef,
  memo,
  Ref,
  RefObject,
  useCallback,
  useImperativeHandle,
  useMemo,
} from 'react';
import useCustomRef from '../hooks/use-custom-ref';
import {debounce} from 'lodash';

export interface AppPressableRef {
  getValue: () => void;
}

interface AppPressableProps extends PressableProps {
  ref?: Ref<AppPressableRef>;
  refCore?: RefObject<View>;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  onLongPress?: () => void;
}

const AppPressable = memo(
  forwardRef((props: AppPressableProps, ref: Ref<AppPressableRef>) => {
    const {refCore, ...rest} = props;
    const refCoreCustom = useCustomRef<View>(refCore);

    const getValue = useCallback(() => {}, []);

    useImperativeHandle(ref, () => ({
      getValue,
    }));

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
        ref={refCoreCustom}
      />
    );
  }),
);

export default AppPressable;
