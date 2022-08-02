import {ScrollView, ScrollViewProps} from 'react-native';
import React, {forwardRef, memo, Ref, RefObject} from 'react';

interface BaseScrollViewProps extends ScrollViewProps {
  refCore?: RefObject<ScrollView>;
}

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
