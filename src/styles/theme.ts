import { DefaultTheme } from 'styled-components'
import { Colors } from './color'

export const lightTheme: DefaultTheme = {
  body: '#ffffff',
  text: '#121212',
  bgcolor: Colors.light.light,
  bgToggle: Colors.dark.dark,
  bgTable: Colors.light.light,
  moon: 'radial-gradient(rgba(255,255,255,0.75) 0%, rgba(127,127,127,0.5) 90%, #000 100%)',
  moonBorder: 'rgba(127,127,127,0.4)',
  colors: {
    primary: {
      default: '#3fa5e6',
      light: '#89d1f4',
      dark: '#3173af',
    },
    secondary: {
      default: '#e6583f',
      light: '#ff9e1d',
      dark: '#b66800',
    },
    light: {
      default: '#e9edf6',
      light: '#ffffff',
      dark: '#f0f0f0',
    },
    dark: {
      default: '#95989b',
      light: '#bcbec0',
      dark: '#767a7d',
    },
  },
}

export const darkTheme: DefaultTheme = {
  body: '#121212',
  text: '#ffffff',
  bgcolor: Colors.black.dark,
  bgToggle: Colors.light.light,
  bgTable: Colors.primary.dark,
  moon: 'radial-gradient(#FFF76B 0%, #FFF845 30%, #FFDA4E 50%, #FB8933 100%)',
  moonBorder: '#ECEFF4',
  colors: {
    primary: {
      default: '#3fa5e6',
      light: '#3173af',
      dark: '#89d1f4',
    },
    secondary: {
      default: '#e38200',
      light: '#ff9e1d',
      dark: '#b66800',
    },
    light: {
      default: '#e9edf6',
      light: '#ffffff',
      dark: '#f0f0f0',
    },
    dark: {
      default: '#95989b',
      light: '#bcbec0',
      dark: '#767a7d',
    },
  },
}
