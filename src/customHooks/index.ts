import { useState, useEffect } from 'react'

export function useDarkMode(): [string, () => void] {
  const [theme, setTheme] = useState('light')

  const setMode = (mode: string): void => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }
  const toggleTheme = (): void => (theme === 'light' ? setMode('dark') : setMode('light'))

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')

    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme
      ? setMode('dark')
      : localTheme
      ? setTheme(localTheme)
      : setMode('light')
  }, [])

  return [theme, toggleTheme]
}

export function useOnScroll(): number {
  const [scrollPos, setScrollPos] = useState(window.pageYOffset)

  // On Scroll
  const onScroll = (): void => {
    setScrollPos(window.pageYOffset)
  }

  // Add and remove the window listener
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return (): void => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return scrollPos
}
