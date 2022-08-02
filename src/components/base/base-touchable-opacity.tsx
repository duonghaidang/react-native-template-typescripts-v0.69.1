import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import React, {forwardRef, memo, Ref, useCallback} from 'react';
import {debounce} from 'lodash';

interface BaseTouchableOpacityProps extends TouchableOpacityProps {
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  onLongPress?: () => void;
}

const BaseTouchableOpacity = memo(
  forwardRef((props: BaseTouchableOpacityProps, ref: Ref<TouchableOpacity>) => {
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

    return (
      <TouchableOpacity
        activeOpacity={0.7}
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

export default BaseTouchableOpacity;
