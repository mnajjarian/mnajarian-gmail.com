export interface StateInterface {
  students: StudentType[]
  courses: CourseType[]
}
export type CourseType = {
  id: number
  name: string
  startdate: string
  enddate: string
}
export type StudentType = {
  id: number
  name: string
  birthday: string
  address: string
  zipcode: string
  city: string
  phone: string
  email: string
  courses: number[]
}
export enum ActionType {
  'FETCH_STUDENTS',
  'FETCH_COURSES',
  'ADD_STUDENT',
  'EDIT_STUDENT',
  'REMOVE_STUDENT',
  'REMOVE_STUSENT_COURSE',
  'ADD_COURSE',
  'EDIT_COURSE',
  'REMOVE_COURSE',
}
export type Action =
  | { type: ActionType.FETCH_STUDENTS; payload: StudentType[] }
  | { type: ActionType.FETCH_COURSES; payload: CourseType[] }
  | { type: ActionType.ADD_STUDENT; payload: StudentType }
  | { type: ActionType.EDIT_STUDENT; payload: StudentType }
  | { type: ActionType.REMOVE_STUDENT; payload: number }
  | { type: ActionType.REMOVE_STUSENT_COURSE; payload: StudentType }
  | { type: ActionType.ADD_COURSE; payload: CourseType }
  | { type: ActionType.REMOVE_COURSE; payload: number }
  | { type: ActionType.EDIT_COURSE; payload: CourseType }
export const initialState: StateInterface = {
  students: [
    {
      id: 0,
      name: '',
      birthday: '',
      address: '',
      zipcode: '',
      city: '',
      phone: '',
      email: '',
      courses: [],
    },
  ],
  courses: [
    {
      id: 0,
      name: '',
      startdate: '',
      enddate: '',
    },
  ],
}

function reducer(state: StateInterface, action: Action): StateInterface {
  switch (action.type) {
    case ActionType.FETCH_STUDENTS:
      return { ...state, students: action.payload }
    case ActionType.FETCH_COURSES:
      return { ...state, courses: action.payload }
    case ActionType.ADD_STUDENT:
      return { ...state, students: state.students.concat(action.payload) }
    case ActionType.EDIT_STUDENT:
      return {
        ...state,
        students: state.students.map((student) => (student.id !== action.payload.id ? student : action.payload)),
      }
    case ActionType.REMOVE_STUDENT:
      return { ...state, students: state.students.filter((st) => st.id !== action.payload) }
    case ActionType.REMOVE_STUSENT_COURSE:
      return {
        ...state,
        students: state.students.map((student) => (student.id !== action.payload.id ? student : action.payload)),
      }
    case ActionType.ADD_COURSE:
      return { ...state, courses: state.courses.concat(action.payload) }
    case ActionType.EDIT_COURSE:
      return {
        ...state,
        courses: state.courses.map((course) => (course.id !== action.payload.id ? course : action.payload)),
      }
    case ActionType.REMOVE_COURSE:
      return { ...state, courses: state.courses.filter((course) => course.id !== action.payload) }
    default:
      return state
  }
}

export default reducer
