import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-top: 4em;
`

const Card = styled.main`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 1em;
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
  text-transform: capitalize;
  font-size: 3.5em;
  font-weight: 300;
  line-height: 1.2;
  @media (max-width: 600px) {
    font-size: 0.5em;
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
  Label,
  Title,
  Line,
  Header,
}
