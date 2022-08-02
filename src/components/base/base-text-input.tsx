import {TextInput, TextInputProps} from 'react-native';
import React, {forwardRef, memo, Ref} from 'react';

interface BaseTextInputProps extends TextInputProps {}

const BaseTextInput = memo(
  forwardRef((props: BaseTextInputProps, ref: Ref<TextInput>) => {
    const {...rest} = props;

    return <TextInput {...rest} ref={ref} />;
  }),
);

export default BaseTextInput;
