import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background: #e9ecef;
  border-radius: 0.3em;
  padding: 4em 2em;
  color: #121212;
  @media (max-width: 600px) {
    width: 90%;
  }
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    align-self: flex-start;
  }
`
const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em;
`
const Col = styled.span`
  display: block;
  padding-right: 0.3em;
`
const Label = styled.span`
  display: block;
  padding-right: 0.3em;
  text-transform: capitalize;
  font-weight: bold;
`

const Title = styled.h1`
  font-size: 2em;
  font-weight: 300;
  line-height: 1.2;
  @media (max-width: 600px) {
    font-size: 1.5em;
  }
`
const Line = styled.hr`
  margin: 1.5em;
`
export const Styled = {
  Card,
  Header,
  Title,
  Row,
  Col,
  Label,
  Line,
}
