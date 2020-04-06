import React, { useState, useContext, ChangeEvent, FormEvent } from 'react'
import { Styled } from './style'
import Button from '../Button'
import { useHistory } from 'react-router-dom'
import { emailValidation } from '../../Helper'
import { DataContext } from '../../context'
import { generateId } from '../../Helper'
import { StudentType } from '../../reducer'

function StudentForm(): JSX.Element {
  const [errMsg, setErrMsg] = useState<null | string>(null)
  const { dataService } = useContext(DataContext)
  const {
    data: { students },
  } = useContext(DataContext)
  const {
    location: { pathname },
    push,
  } = useHistory()
  const matchId = pathname.match(/\d+/g)
  const student = students.filter((student) => student.id === Number(matchId))[0]

  const [state, setState] = useState<StudentType>({
    id: 0,
    name: student ? student.name : '',
    birthday: student ? student.birthday : '',
    address: student ? student.address : '',
    zipcode: student ? student.zipcode : '',
    city: student ? student.city : '',
    phone: student ? student.phone : '',
    email: student ? student.email : '',
    courses: student ? student.courses : [],
  })
  const { name, birthday, address, zipcode, city, phone, email } = state
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setState({
      ...state,
      [name]: value,
    })
  }

  /**
   *
   * @param validate check for duplicate records based on email address field
   */

  const validateUser = (email: string): boolean => {
    const isAlready = students.find((student) => student.email.includes(email))
    if (student === undefined) {
      return isAlready === undefined
    } else if (isAlready) {
      return isAlready.id === student.id
    } else {
      return true
    }
  }

  const handleSubmit = async (e: FormEvent): Promise<void | null> => {
    e.preventDefault()
    if (!validateUser(email)) {
      setErrMsg('This email address is already used')
      setTimeout(() => {
        setErrMsg(null)
      }, 5000)
      return
    }
    const studentId = generateId(students)
    try {
      if (student !== undefined) {
        await dataService.updateStudent({ ...state, id: student.id })
      } else {
        await dataService.addStudent({ ...state, id: studentId })
      }
      push('/students')
    } catch (error) {
      console.log(error)
    }
  }
  const handleFocus = (e: ChangeEvent<HTMLInputElement>): string => (e.target.type = 'date')
  const handleBlur = (e: ChangeEvent<HTMLInputElement>): string => (e.target.type = 'text')
  return (
    <Styled.Container>
      {errMsg && <Styled.Error>{errMsg}</Styled.Error>}
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.FormGroup>
          <Styled.Label htmlFor="name">name</Styled.Label>
          <Styled.Input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={handleChange}
            bColor={name.length > 3 ? 'green' : 'red'}
            required
          />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <Styled.Label htmlFor="birthday">birthday</Styled.Label>
          <Styled.Input
            type="text"
            name="birthday"
            placeholder="birthday"
            value={birthday}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            bColor={birthday.length > 8 ? 'green' : 'red'}
            required
          />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <Styled.Label htmlFor="address">address</Styled.Label>
          <Styled.Input
            type="text"
            name="address"
            placeholder="address"
            value={address}
            onChange={handleChange}
            bColor={address.length > 4 ? 'green' : 'red'}
            required
          />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <Styled.Label htmlFor="email">email</Styled.Label>
          <Styled.Input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={handleChange}
            bColor={validateUser(email) && emailValidation(email) ? 'green' : 'red'}
            required
          />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <Styled.Label htmlFor="zipcode">zipCode</Styled.Label>
          <Styled.Input
            type="text"
            name="zipcode"
            placeholder="zip code"
            value={zipcode}
            onChange={handleChange}
            bColor={zipcode.length > 3 ? 'green' : 'red'}
            required
          />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <Styled.Label htmlFor="city">city</Styled.Label>
          <Styled.Input
            type="text"
            name="city"
            placeholder="city"
            value={city}
            onChange={handleChange}
            bColor={city.length > 3 ? 'green' : 'red'}
            required
          />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <Styled.Label htmlFor="phone">phone</Styled.Label>
          <Styled.Input
            type="text"
            name="phone"
            placeholder="phone"
            value={phone}
            onChange={handleChange}
            bColor={phone.length > 3 && !isNaN(Number(phone)) ? 'green' : 'red'}
            required
          />
        </Styled.FormGroup>
        <Button text="save" />
      </Styled.Form>
    </Styled.Container>
  )
}

export default StudentForm
