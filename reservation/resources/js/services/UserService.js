import ApiService from './ApiService';
import axios from 'axios';


const UserService = {
  login(data) {
    return ApiService.post('/api/auth/login', data)
  }
}
export default UserService
