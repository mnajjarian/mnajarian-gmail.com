import React, { ReactNode } from 'react'
import { Styled } from './style'

type Props = {
  isOpen: boolean
  handleClose?: () => void
  children: ReactNode
}

function Modal(props: Props): JSX.Element {
  const { handleClose, isOpen, children } = props
  return (
    <Styled.Modal isOpen={isOpen ? 'block' : 'none'}>
      <Styled.ModalContent className="modal__content" style={{ height: '60%', width: '70%', background: 'lightblue' }}>
        <Styled.CloseButton className="modal__close" onClick={handleClose}>
          &times;
        </Styled.CloseButton>
        {children}
      </Styled.ModalContent>
    </Styled.Modal>
  )
}

export default Modal
