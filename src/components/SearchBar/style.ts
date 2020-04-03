import styled from 'styled-components'

const SearchBar = styled.input`
  position: absolute;
  top: 1.5em;
  font-size: 1em;
  border: 0;
  border-radius: 1em;
  width: 40%;
  padding: 0.8em;
  align-self: flex-start;
  outline: none;
  box-sizing: border-box;
  color: #121212;
  opacity: ${(props: { opacity: number }): number => props.opacity};
`

export const Styled = {
  SearchBar,
}
