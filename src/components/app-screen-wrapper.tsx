import React, {memo} from 'react';
import {
  Edge,
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';

const edges: Edge[] = ['right', 'left', 'top', 'bottom'];

interface AppScreenWrapperProps extends SafeAreaViewProps {}

const AppScreenWrapper = memo((props: AppScreenWrapperProps) => {
  return <SafeAreaView edges={edges} {...props} />;
});

export default AppScreenWrapper;
