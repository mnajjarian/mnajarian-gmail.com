import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background: #e9ecef;
  border-radius: 0.3em;
  padding: 4em 2em;
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
`
const Col = styled.span`
  display: block;
  padding-right: 0.3em;
  text-transform: capitalize;
`

const Title = styled.h1`
  font-size: 3.5em;
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
  Container,
  Card,
  Row,
  Col,
  Title,
  Line,
  Header,
}
