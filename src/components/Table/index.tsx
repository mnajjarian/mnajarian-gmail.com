import React from 'react'
import { StudentType } from '../../reducer'
import { Styled } from './style'
import { Link, useHistory } from 'react-router-dom'

type Props = {
  properties: string[]
  items: StudentType[]
}
function getProperty<T, K extends keyof T>(o: T, propertyName: K): T[K] {
  return o[propertyName]
}

const Th = ({ head }: { head: string }): JSX.Element => <th>{head}</th>
const Thead = ({ properties }: { properties: string[] }): JSX.Element => {
  return (
    <thead>
      <tr>
        {properties.map((head) => (
          <Th key={head} head={head} />
        ))}
      </tr>
    </thead>
  )
}

function Tbody({ item, properties, index }: { item: any; properties: string[]; index: number }): JSX.Element {
  const {
    location: { pathname },
  } = useHistory()

  return (
    <tbody>
      <tr>
        {properties.map((prop: string) => (
          <td key={prop}>
            {prop === 'index' ? (
              index
            ) : prop === 'name' ? (
              <Link to={`${pathname}/${item.id}/${item.name.replace(' ', '-')}`}>{getProperty(item, prop)}</Link>
            ) : (
              getProperty(item, prop)
            )}
          </td>
        ))}
      </tr>
    </tbody>
  )
}

function Table(props: Props): JSX.Element {
  const { properties, items } = props

  return (
    <Styled.Container>
      <Styled.Table>
        <Thead properties={properties} />
        {items.map((item: typeof items[0], index: number) => (
          <Tbody key={item.id} item={item} properties={properties} index={index + 1} />
        ))}
      </Styled.Table>
    </Styled.Container>
  )
}
export default Table
