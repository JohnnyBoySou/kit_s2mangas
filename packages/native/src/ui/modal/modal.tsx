import React from 'react';
import { Modal as RNModal, Pressable } from 'react-native';
import type { ViewStyle } from 'react-native';
import { theme } from '@s2mangas/core';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
  overlayStyle?: ViewStyle;
  animationType?: 'none' | 'slide' | 'fade';
  transparent?: boolean;
  testID?: string;
}

const Modal: React.FC<ModalProps> = ({
  visible,
  onClose,
  children,
  style,
  overlayStyle,
  animationType = 'fade',
  transparent = true,
  testID,
}) => {
  return (
    <RNModal
      testID={testID}
      visible={visible}
      transparent={transparent}
      animationType={animationType}
      onRequestClose={onClose}
    >
      <Pressable
        style={[
          {
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          },
          overlayStyle,
        ]}
        onPress={onClose}
      >
        <Pressable
          style={[
            {
              backgroundColor: theme.color.background,
              borderRadius: 12,
              padding: 20,
              margin: 20,
              minWidth: 300,
              maxWidth: '90%',
            },
            style,
          ]}
          onPress={(e) => e.stopPropagation()}
        >
          {children}
        </Pressable>
      </Pressable>
    </RNModal>
  );
};

export default Modal;
