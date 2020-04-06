import axios from 'axios'
import { ActionType, Action, StateInterface, StudentType, CourseType } from '../reducer'

const baseUrl = 'http://localhost:3001'
const customAxios = axios.create({
  url: baseUrl,
})
export type DataService = {
  fetchStudents: () => void
  fetchCourses: () => void
  addStudent: (student: StudentType) => void
  removeStudent: (id: number) => void
  removeStudentCourse: (studentId: number, courseId: number) => void
  updateStudent: (student: StudentType) => void
  addCourse: (course: CourseType) => void
  updateCourse: (course: CourseType) => void
  removeCourse: (courseId: number) => void
}

export function useDataService(data: StateInterface, dispatch: React.Dispatch<Action>): DataService {
  const fetchStudents = (): void => {
    customAxios
      .get('/students')
      .then((res) => {
        dispatch({
          type: ActionType.FETCH_STUDENTS,
          payload: res.data,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const fetchCourses = (): void => {
    customAxios
      .get('/courses')
      .then((res) => {
        dispatch({
          type: ActionType.FETCH_COURSES,
          payload: res.data,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const addStudent = (student: StudentType): void => {
    customAxios
      .post('/students', student)
      .then((res) => {
        dispatch({
          type: ActionType.ADD_STUDENT,
          payload: res.data,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const updateStudent = (student: StudentType): void => {
    customAxios
      .put(`/students/${student.id}`, student)
      .then((res) => {
        dispatch({
          type: ActionType.EDIT_STUDENT,
          payload: res.data,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const removeStudent = (id: number): void => {
    customAxios
      .delete(`/students/${id}`)
      .then(() => {
        dispatch({
          type: ActionType.REMOVE_STUDENT,
          payload: id,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const removeStudentCourse = (studentId: number, courseId: number): void => {
    const student = data.students.find((student) => student.id === studentId)
    const updatedStudent = { ...student, courses: student?.courses.filter((c) => c !== courseId) }

    customAxios
      .put(`/students/${studentId}`, updatedStudent)
      .then((res) => {
        dispatch({
          type: ActionType.REMOVE_STUSENT_COURSE,
          payload: res.data,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const addCourse = (course: CourseType): void => {
    customAxios
      .post('/courses', course)
      .then((res) => {
        dispatch({
          type: ActionType.ADD_COURSE,
          payload: res.data,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const updateCourse = (course: CourseType): void => {
    customAxios
      .put(`/courses/${course.id}`, course)
      .then((res) => {
        dispatch({
          type: ActionType.EDIT_COURSE,
          payload: res.data,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const removeCourse = (courseId: number): void => {
    customAxios
      .delete(`/courses/${courseId}`)
      .then(() => {
        dispatch({
          type: ActionType.REMOVE_COURSE,
          payload: courseId,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return {
    fetchStudents,
    fetchCourses,
    addStudent,
    removeStudent,
    removeStudentCourse,
    updateStudent,
    addCourse,
    updateCourse,
    removeCourse,
  }
}
