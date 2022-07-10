import {FlatList, FlatListProps} from 'react-native';
import React, {
  forwardRef,
  memo,
  Ref,
  RefObject,
  useCallback,
  useImperativeHandle,
} from 'react';
import useCustomRef from '../hooks/useCustomRef';

type ItemT = /*unresolved*/ any;

export interface AppFlatListRef {
  getValue: () => void;
}

interface AppFlatListProps extends FlatListProps<ItemT> {
  ref?: Ref<AppFlatListRef>;
  refCore?: RefObject<FlatList>;
}

const AppFlatList = memo(
  forwardRef((props: AppFlatListProps, ref: Ref<AppFlatListRef>) => {
    const {refCore, ...rest} = props;
    const refCoreCustom = useCustomRef<FlatList>(refCore);

    const getValue = useCallback(() => {}, []);

    useImperativeHandle(ref, () => ({
      getValue,
    }));

    const keyExtractor = useCallback(
      (item: ItemT, index: number) => item?.id || index,
      [],
    );

    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        {...rest}
        ref={refCoreCustom}
      />
    );
  }),
);

export default AppFlatList;
