import React, {
  forwardRef,
  Ref,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import {StyleSheet} from 'react-native';
import Modal, {ModalProps} from 'react-native-modal';

export interface MyModalRefObject {
  show: (item?: any) => void;
  hide: () => void;
}

interface AppModalProps extends ModalProps {}

const AppModal = forwardRef(
  (props: AppModalProps, ref: Ref<MyModalRefObject>) => {
    const [visible, setVisible] = useState(false);
    const show = useCallback(() => {
      setVisible(true);
    }, []);

    const hide = useCallback(() => {
      setVisible(false);
    }, []);

    useImperativeHandle(ref, () => ({
      show,
      hide,
    }));

    return (
      <Modal
        style={styles.container}
        {...props}
        onBackdropPress={hide}
        onBackButtonPress={hide}
        isVisible={visible}
      />
    );
  },
);

export default AppModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
