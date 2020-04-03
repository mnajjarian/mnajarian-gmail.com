import React, { createContext, useReducer, ReactNode } from 'react'
import reducer, { initialState, Action, StateInterface } from '../reducer'
import { useDataService, DataService } from '../service'
export interface ContextType {
  data: StateInterface
  dispatch: React.Dispatch<Action>
  dataService: DataService
}
type Props = {
  children: ReactNode
}

export const DataContext = createContext({} as ContextType)

export function Provider({ children }: Props): JSX.Element {
  const [data, dispatch] = useReducer(reducer, initialState)
  const dataService = useDataService(data, dispatch)
  const values = {
    data,
    dispatch,
    dataService,
  }
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>
}
