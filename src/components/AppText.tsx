import {Text, TextProps} from 'react-native';
import React, {
  forwardRef,
  memo,
  Ref,
  RefObject,
  useCallback,
  useImperativeHandle,
} from 'react';
import useCustomRef from '../hooks/useCustomRef';

export interface AppTextRef {
  getValue: () => void;
}

interface AppTextProps extends TextProps {
  ref?: Ref<AppTextRef>;
  refCore?: RefObject<Text>;
}

const AppText = memo(
  forwardRef((props: AppTextProps, ref: Ref<AppTextRef>) => {
    const {refCore, ...rest} = props;
    const refCoreCustom = useCustomRef<Text>(refCore);

    const getValue = useCallback(() => {}, []);

    useImperativeHandle(ref, () => ({
      getValue,
    }));

    return <Text {...rest} ref={refCoreCustom} />;
  }),
);

export default AppText;
