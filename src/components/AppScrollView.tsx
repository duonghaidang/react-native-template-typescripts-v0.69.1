import {ScrollView, ScrollViewProps} from 'react-native';
import React, {
  forwardRef,
  memo,
  Ref,
  RefObject,
  useCallback,
  useImperativeHandle,
} from 'react';
import {AppTextInputRef} from './AppTextInput';
import useCustomRef from '../hooks/useCustomRef';

export interface AppScrollViewRef {
  getValue: () => void;
}

interface AppScrollViewProps extends ScrollViewProps {
  ref?: Ref<AppTextInputRef>;
  refCore?: RefObject<ScrollView>;
}

const AppScrollView = memo(
  forwardRef((props: AppScrollViewProps, ref: Ref<AppScrollViewRef>) => {
    const {refCore, ...rest} = props;
    const refCoreCustom = useCustomRef<ScrollView>(refCore);

    const getValue = useCallback(() => {}, []);

    useImperativeHandle(ref, () => ({
      getValue,
    }));

    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        {...rest}
        ref={refCoreCustom}
      />
    );
  }),
);

export default AppScrollView;
