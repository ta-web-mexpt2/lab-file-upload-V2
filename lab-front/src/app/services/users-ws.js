import {_api} from './api' 

export const loginEndpoint = (data) => _api.post('/users/login',data)

export const signupEndpoint = (data) => {
    return _api.post('/users/signup',data)
}

export const logoutEndpoint = () => _api.post('/users/logout')