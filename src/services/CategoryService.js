import { ApiService } from './server'
const endpoint = 'category'

export const CategoryService = {
  list(){
    return ApiService.get(endpoint)
  },
}