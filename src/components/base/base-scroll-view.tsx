import {ScrollView, ScrollViewProps} from 'react-native';
import React, {forwardRef, memo, Ref} from 'react';

interface BaseScrollViewProps extends ScrollViewProps {}

const BaseScrollView = memo(
  forwardRef((props: BaseScrollViewProps, ref: Ref<ScrollView>) => {
    const {...rest} = props;

    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        {...rest}
        ref={ref}
      />
    );
  }),
);

export default BaseScrollView;
