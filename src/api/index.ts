import Dogs, { Api as DogsApi } from './dogs'

export interface Api {
  dogs: DogsApi
}

const api: Api = {
  dogs: new Dogs()
}

export default api
