import React, { useEffect, useContext, Suspense, lazy, LazyExoticComponent } from 'react'
import { Switch, Route } from 'react-router-dom'
import { DataContext } from './context'
import ErrorBoundary from './components/ErrorBoundary'
import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/theme'
import { useDarkMode } from './customHooks'

const lazyImport = (filename: string): LazyExoticComponent<React.ComponentType<any>> =>
  lazy(() => import(`./components/${filename}`))
const Home = lazyImport('Home')
const Header = lazyImport('Header')
const StudentList = lazyImport('StudentList')
const Student = lazyImport('Student')
const CourseList = lazyImport('CourseList')
const StudentForm = lazyImport('StudentForm')
const Course = lazyImport('Course')
const Add = lazyImport('Add')
const CourseForm = lazyImport('CourseForm')

function App(): JSX.Element {
  const { dataService } = useContext(DataContext)
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  useEffect(() => {
    dataService.fetchStudents()
    dataService.fetchCourses()
  }, [])

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <ErrorBoundary>
        <Suspense fallback={<div></div>}>
          <Header handleTheme={toggleTheme} checked={theme === 'dark'} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/students/:id/:params/edit" component={StudentForm} />
            <Route exact path="/students/:id/:params" component={Student} />
            <Route path="/students" component={StudentList} />
            <Route path="/courses/:params/edit" component={CourseForm} />
            <Route exact path="/courses" component={CourseList} />
            <Route path="/courses/:params" component={Course} />
            <Route path="/add" component={Add} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
