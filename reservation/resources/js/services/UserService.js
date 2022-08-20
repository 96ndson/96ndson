import ApiService from './ApiService';

const UserService = {
  login(data) {
    return ApiService.post('/api/auth/login', data)
  },

  logout() {
    return ApiService.post('/api/auth/logout')
  },

  getUser() {
    return ApiService.get('/api/auth/user-profile')
  }
}
export default UserService
