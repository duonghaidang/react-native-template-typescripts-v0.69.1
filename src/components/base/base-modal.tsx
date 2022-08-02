import React, {
  forwardRef,
  Ref,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import {StyleSheet} from 'react-native';
import Modal, {ModalProps} from 'react-native-modal';

export interface BaseModalRefObject {
  show: (item?: any) => void;
  hide: () => void;
}

interface BaseModalProps extends ModalProps {}

const BaseModal = forwardRef(
  (props: BaseModalProps, ref: Ref<BaseModalRefObject>) => {
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

export default BaseModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
