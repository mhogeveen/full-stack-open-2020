import axios from 'axios'

const baseURL = '/api/persons'

const getAll = () => {
   const request = axios.get(baseURL)
   return request.then((response) => response.data)
}

const create = (newObject) => {
   const request = axios.post(baseURL, newObject)
   return request.then((response) => response.data)
}

const remove = (toRemoveObject) => {
   const request = axios.delete(`${baseURL}/${toRemoveObject.id}`)
   return request.then((response) => response.data)
}

const update = (id, alteredObject) => {
   const request = axios.put(`${baseURL}/${id}`, alteredObject)
   return request.then((response) => response.data)
}

export default { getAll, create, remove, update }
