import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  max-height: 500px;
  overflow: auto;
  margin-top: 1em;
`
const Table = styled.table`
  margin-top: 1.5em;
  width: 100%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.05), 0px 20px 20px rgba(0, 0, 0, 0.05),
    0px 30px 20px rgba(0, 0, 0, 0.05);
  td {
    padding: 1em;
    text-align: left;
  }

  /*   tr:nth-child(even) {
    background-color: #f2f2f2f2;
  } */
  td:first-child {
    color: #fb667a;
    text-align: center;
  }
  th {
    text-transform: capitalize;
    padding: 1em;
    position: sticky;
    top: -0.1em;
  }
`

export const Styled = {
  Table,
  Container,
}
