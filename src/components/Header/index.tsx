import React from 'react'
import { NavLink } from 'react-router-dom'
import { Styled } from './style'

type Props = {
  handleTheme: () => void
  checked: boolean
}
function Header(props: Props): JSX.Element {
  const { handleTheme, checked } = props

  return (
    <Styled.Header>
      <Styled.Nav>
        <Styled.NavList>
          <Styled.NavItem>
            <NavLink exact to="/">
              Home
            </NavLink>
          </Styled.NavItem>
          <Styled.NavItem>
            <NavLink exact to="/students">
              Students
            </NavLink>
          </Styled.NavItem>
          <Styled.NavItem>
            <NavLink to="/courses">Courses</NavLink>
          </Styled.NavItem>
          <Styled.NavItem>
            <NavLink to="/add">Add new</NavLink>
          </Styled.NavItem>
        </Styled.NavList>
      </Styled.Nav>
      <Styled.ToggleButton>
        <input type="checkbox" defaultChecked={checked} onClick={handleTheme} value="Theme" />
        <span></span>
      </Styled.ToggleButton>
    </Styled.Header>
  )
}

export default Header
