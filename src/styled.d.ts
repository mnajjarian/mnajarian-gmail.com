import 'styled-components'

type Color = {
  default: string
  light: string
  dark: string
}
// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    body: string
    text: string
    bgcolor: string
    bgToggle: string
    bgTable: string
    moon: string
    moonBorder: string
    colors: {
      primary: Color
      secondary: Color
      dark: Color
      light: Color
    }
  }
}
