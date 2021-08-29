import React, {ReactNode} from 'react';
import {Container} from './styles';

interface ModalProps {
  visible: boolean;
  onRequestClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({visible, onRequestClose, children}) => {
  return (
    <Container
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onRequestClose}>
      {children}
    </Container>
  );
};

export default Modal;
