import styled from 'styled-components'

const Styled = new Set() as any

Styled.Button = styled.button`
  display: inline;
  border: none;
  border-radius: 0.25em;
  padding: 0.5em 1.5em;
  margin-right: 0.5em;
  min-width: 2em;
  max-height: min-content;
  font-size: 1em;
  text-transform: capitalize;
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 0.8;
    background: ${(props: { bgColor: string }): string => props.bgColor};
    color: #ffffff;
  }
  transition: box-shadow 0.2s ease-in-out;
  line-height: 1.2;
`

export default Styled
