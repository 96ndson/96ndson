import ApiService from './ApiService';
import axios from 'axios';


const LoginService = {
  login(data) {
    return axios.post('http://reservation.test/api/auth/login', data, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
  }
}
export default LoginService
