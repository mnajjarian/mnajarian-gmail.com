import styled from 'styled-components'

const Header = styled.header`
  * {
    display: inline;
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5em;
  display: flex;
  align-items: center;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.5);
  z-index: 33;
`
const Nav = styled.nav`
  width: 100%;
  height: 100%;
`
const NavList = styled.ul`
  margin: 0;
  padding: 0;
`
const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 100%;

  :not(:last-child) {
    border-right: 1px solid #bbb;
    float: left;
  }

  a {
    display: flex;
    align-items: center;
    height: 100%;
    color: inherit;
    text-decoration: none;
    text-transform: capitalize;
    font-size: 1.2em;
    text-align: center;
    padding: 1em 1.5em;
  }

  .active {
    color: #1292b4;
  }
`
const ToggleButton = styled.label`
  position: relative;
  display: inline-block;
  margin-right: 2em;
  width: 4em;
  height: 2em;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 2em;
    transition: 0.4s;
    :before {
      position: absolute;
      content: '';
      height: 1.5em;
      width: 1.5em;
      left: 0.25em;
      bottom: 0.25em;
      border-radius: 50%;
      transition: 0.4s;
      background: radial-gradient(rgba(255, 255, 255, 0.75) 0%, rgba(127, 127, 127, 0.5) 90%, #000 100%);
    }
  }
  input:checked + span {
    background-color: #ccc;
  }
  input:focus + span {
    box-shadow: 0 0 1px #ccc;
  }
  input:checked + span::before {
    background: radial-gradient(#fff76b 0%, #fff845 30%, #ffda4e 50%, #fb8933 100%);
    transform: translateX(1.5em);
  }
`
export const Styled = {
  Header,
  Nav,
  NavList,
  NavItem,
  ToggleButton,
}
