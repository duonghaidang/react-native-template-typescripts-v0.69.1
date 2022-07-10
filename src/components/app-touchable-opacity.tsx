import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import React, {
  forwardRef,
  memo,
  Ref,
  RefObject,
  useCallback,
  useImperativeHandle,
} from 'react';
import useCustomRef from '../hooks/use-custom-ref';
import {debounce} from 'lodash';

export interface AppTouchableOpacityRef {
  getValue: () => void;
}

interface AppTouchableOpacityProps extends TouchableOpacityProps {
  ref?: Ref<AppTouchableOpacityRef>;
  refCore?: RefObject<TouchableOpacity>;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  onLongPress?: () => void;
}

const AppTouchableOpacity = memo(
  forwardRef(
    (props: AppTouchableOpacityProps, ref: Ref<AppTouchableOpacityRef>) => {
      const {refCore, ...rest} = props;
      const refCoreCustom = useCustomRef<TouchableOpacity>(refCore);

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

      return (
        <TouchableOpacity
          activeOpacity={0.7}
          {...rest}
          onPress={onPressDebounced}
          onPressIn={onPressInDebounced}
          onPressOut={onPressOutDebounced}
          onLongPress={onLongPressDebounced}
          ref={refCoreCustom}
        />
      );
    },
  ),
);

export default AppTouchableOpacity;
