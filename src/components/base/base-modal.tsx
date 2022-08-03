import React, {
  forwardRef,
  Ref,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {appColors} from '../../styles/colors';
import {appStyles} from '../../utils/styles';

export interface BaseModalRefObject {
  show: () => void;
  hide: () => void;
}

interface BaseModalProps {
  children: React.ReactNode;
}

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
        statusBarTranslucent
        onBackdropPress={hide}
        onBackButtonPress={hide}
        isVisible={visible}
        backdropColor={appColors.black}
        backdropOpacity={0.7}
        animationIn={'zoomIn'}
        animationOut={'zoomOut'}
        animationInTiming={200}
        animationOutTiming={200}
        backdropTransitionInTiming={0}
        backdropTransitionOutTiming={0}
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
    ...appStyles.center,
  },
});
