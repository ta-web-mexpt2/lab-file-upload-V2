import {_api} from './api' 

export const postEndpoint = (data) => _api.post('/posts',data)