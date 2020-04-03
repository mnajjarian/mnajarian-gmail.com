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
const Table = styled.table`
  margin-top: 1.5em;
  width: 80%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.05), 0px 20px 20px rgba(0, 0, 0, 0.05),
    0px 30px 20px rgba(0, 0, 0, 0.05);
  td {
    padding: 1em;
    text-align: center;
  }

  td:first-child {
    color: #fb667a;
    text-align: center;
  }
  th {
    text-transform: capitalize;
    padding: 1em;
    position: sticky;
    top: -2.5em;
  }
`

export const Styled = {
  Container,
  Main,
  Table,
  Title,
}
