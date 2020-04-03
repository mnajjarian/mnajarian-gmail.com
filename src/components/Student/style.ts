import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  height: 100%;
  width: 100%;

  @media (max-width: 600px) {
    flex-flow: column;
  }
`
const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 2em;
`

export const Styled = {
  Container,
  Main,
}
