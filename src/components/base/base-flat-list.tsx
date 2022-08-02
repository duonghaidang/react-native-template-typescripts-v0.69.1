import {FlatList, FlatListProps} from 'react-native';
import React, {forwardRef, memo, Ref, useCallback} from 'react';

export interface BaseFlatListRef {}

interface BaseFlatListProps<ItemT = any> extends FlatListProps<ItemT> {}

const BaseFlatList = memo(
  forwardRef((props: BaseFlatListProps, ref: Ref<FlatList>) => {
    const {...rest} = props;

    const keyExtractor = useCallback(
      (item: any, index: number) => item?.id || index,
      [],
    );

    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        {...rest}
        ref={ref}
      />
    );
  }),
);

export default BaseFlatList;
