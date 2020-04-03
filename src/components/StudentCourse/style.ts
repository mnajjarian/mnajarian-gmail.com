import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  margin-left: 1em;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.5em;
  color: #000;
  max-height: 400px;
  overflow: auto;
  @media (max-width: 600px) {
    width: 90%;
    margin-left: 0;
  }
`
const Title = styled.h2`
  text-transform: capitalize;
  color: #212121;
`
const ListItem = styled.li`
  position: relative;
  display: block;
  padding: 0.75em 1.25em;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.3);

  p {
    display: flex;
    margin: 0;
    span {
      margin-left: auto;
      margin-right: 0.5em;
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
const Tab = styled(ListItem)`
  font-weight: bold;
  text-transform: capitalize;
  background: #00aced;
  color: #fff;

  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`

export const Styled = {
  Tab,
  List,
  ListItem,
  Title,
}
