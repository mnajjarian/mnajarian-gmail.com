import styled from 'styled-components'

const Container = styled.div`
  padding: 0 4em 4em 4em;
  justify-content: center;
  align-items: center;
`
const Main = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 4em;
  height: 100%;
  width: 100%;
`

const Title = styled.h1`
  align-self: flex-start;
  text-transform: capitalize;
  font-size: 2em;
  font-weight: 300;
`
export const Styled = {
  Main,
  Container,
  Title,
}
