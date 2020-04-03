import { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box
}
body {
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
  background: ${(props): string => props.theme.body};
  color: ${(props): string => props.theme.text};
  margin: 0;
  padding: 0;
  padding-top: 5em;
  min-height: 100vh;
  transition: all 0.25s linear;

}
button {
  border: none;
  border-radius: .25em;
  padding: .5em 1em;
}

header {
  background: ${(props): string => props.theme.body};
  label > span {
    background: ${(props): string => props.theme.text};
  }
  nav {
    a:hover:not(:active) {
        background-color: ${(props): string => props.theme.colors.dark.light};
      }
  }
}
main {
  background-color: ${(props): string => props.theme.colors.primary.light};
}

input {
  background: ${(props): string => props.theme.colors.light.dark};
  color: ${(props): string => props.theme.text};
  border-color: ${(props): string => props.theme.body};
  ::placeholder {
    color: ${(props): string => props.theme.colors.dark.default};
  }
}

th, tr {
  background-color:  ${(props): string => props.theme.body};
  
}
tr:hover {
  background-color: ${(props): string => props.theme.colors.primary.default};
   td {
    color: ${(props): string => props.theme.colors.light.light};
  } 
}

td {
  color: ${(props): string => props.theme.colors.dark.dark};
}


a {
  color: ${(props): string => props.theme.text};
  text-decoration: none;
   :hover {
    color: ${(props): string => props.theme.colors.secondary.default}
  } 
}
`
