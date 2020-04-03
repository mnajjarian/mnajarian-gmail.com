import styled from 'styled-components'

const ListItem = styled.li`
  position: relative;
  display: block;
  padding: 0.75em 1.25em;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.3);

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    span {
      margin-left: auto;
      margin-right: 0.5em;
      font-size: 0.8em;
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.3em;
      margin: 0;
      text-align: center;
      font-weight: bold;
      border-radius: 0.25em;

      :hover {
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.3);
        color: red;
      }
    }
  }
`

export const Styled = {
  ListItem,
}
