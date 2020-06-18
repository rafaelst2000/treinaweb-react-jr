const api = 'http://192.168.31.137:3002/api/react-cursos'

export const ApiService = {
  get(endpoint){
    return fetch(`${api}${endpoint}`)
      .then(res => res.json())
  },

  post(endpoint, data){
    return fetch(`${api}${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(res => res.json())
  },

  delete(endpoint, id){
    return fetch(`${api}${endpoint}?id=${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
  }
} 