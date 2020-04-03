import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  height: 100%;
  width: 100%;
  button {
    margin: 1em 0 0 auto;
    background: #ddd;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 4em 6em;
  border-radius: 0.25em;
  width: 60%;
  @media (max-width: 600px) {
    width: 90%;
  }
`

const FormGroup = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 8px;
`
const Label = styled.label`
  text-transform: capitalize;
  min-width: 5em;
  padding: 0.5em 0;
  @media (max-width: 600px) {
    display: none;
  }
`
const Input = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-radius: 4px;
  padding: 12px 4px;
  font-size: 1rem;
  border-left: 1px solid
    ${(props: { borderColor?: string }): string => (props.borderColor ? props.borderColor : 'transparent')};
  outline: none;
  &::placeholder {
    text-transform: capitalize;
    padding-left: 2px;
  }
`
const Error = styled.div`
  border-radius: 0.5em;
  background: #d43639;
  padding: 1em 2em;
`

export const Styled = { Container, Form, FormGroup, Input, Label, Error }
