import {Text, TextProps} from 'react-native';
import React, {forwardRef, memo, Ref} from 'react';

interface BaseTextProps extends TextProps {}

const BaseText = memo(
  forwardRef((props: BaseTextProps, ref: Ref<Text>) => {
    const {...rest} = props;

    return <Text {...rest} ref={ref} />;
  }),
);

export default BaseText;
