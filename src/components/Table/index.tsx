import React from 'react'
import { StudentType } from '../../reducer'
import { Styled } from './style'
import { Link } from 'react-router-dom'

type Props = {
  students: StudentType[]
}
function Table(props: Props): JSX.Element {
  const { students } = props

  return (
    <Styled.Container>
      <Styled.Table>
        <thead>
          <tr>
            <th>index</th>
            <th>name</th>
            <th>address</th>
            <th>email</th>
            <th>phone</th>
            <th>birthday</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>
                <Link to={`/students/${student.id}/${student.name.split(' ').join('-')}`}>{student.name}</Link>
              </td>
              <td>{student.address}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.birthday}</td>
            </tr>
          ))}
        </tbody>
      </Styled.Table>
    </Styled.Container>
  )
}
export default Table
