import { ApiService } from './server'
const endpoint = 'courses'

export const CourseService = {
  list(){
    return ApiService.get(endpoint)
  },
  
  create(newCourse){
    return ApiService.post(endpoint, newCourse)
  },
  
  remove(courseId){
    return ApiService.delete(endpoint, courseId)
  }
}