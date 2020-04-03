import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 4em 0;
`
const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 90%;
  min-height: 90vh;
  border-top-left-radius: 0.25em;
  border-top-right-radius: 0.25em;
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.49);
  overflow: scroll;
`
const Tab = styled.ul`
  display: flex;
  width: 100%;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 1em;
  list-style: none;
`
const Item = styled.li`
  width: 100%;
  margin-bottom: -1px;
  list-style-type: none;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid #fff;
  opacity: ${(props: { opacity: number }): number => props.opacity};
`

const Link = styled.span`
  display: block;
  font-size: 1.2em;
  text-transform: capitalize;
  padding: 1em 1.5em;
`

const TabContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  display: ${(props: { display: string }): string => props.display};
`
export const Styled = { Container, Tab, Item, Link, TabContent, Main }
