import { CourseType, StudentType } from '../reducer'

type Data = CourseType | StudentType

export const formatDate = (date: string): string =>
  new Intl.DateTimeFormat('en-us', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(new Date(date))

export const emailValidation = (email: string): RegExpMatchArray | null =>
  email.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/)

export const generateId = (data: Data[]): number =>
  data && data.length ? data.sort((a: Data, b: Data) => b.id - a.id)[0].id + 1 : 1
