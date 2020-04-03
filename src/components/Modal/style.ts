import styled from 'styled-components'

const Modal = styled.div`
  display: ${(props: { isOpen: string }): string => props.isOpen};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`
const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 1.5em 2em;
  border-radius: 0.25em;
  height: 100%;
  width: 90%;
  overflow-y: scroll;
`

const CloseButton = styled.div`
  color: $dark;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: $black;
    text-decoration: none;
    cursor: pointer;
  }
`

export const Styled = { Modal, ModalContent, CloseButton }
