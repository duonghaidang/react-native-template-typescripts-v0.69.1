import {TextInput, TextInputProps} from 'react-native';
import React, {
  forwardRef,
  memo,
  Ref,
  RefObject,
  useCallback,
  useImperativeHandle,
} from 'react';
import useCustomRef from '../hooks/use-custom-ref';

export interface AppTextInputRef {
  getValue: () => void;
}

interface AppTextInputProps extends TextInputProps {
  ref?: Ref<AppTextInputRef>;
  refCore?: RefObject<TextInput>;
}

const AppTextInput = memo(
  forwardRef((props: AppTextInputProps, ref: Ref<AppTextInputRef>) => {
    const {refCore, ...rest} = props;
    const refCoreCustom = useCustomRef<TextInput>(refCore);

    const getValue = useCallback(() => {}, []);

    useImperativeHandle(ref, () => ({
      getValue,
    }));

    return <TextInput {...rest} ref={refCoreCustom} />;
  }),
);

export default AppTextInput;
