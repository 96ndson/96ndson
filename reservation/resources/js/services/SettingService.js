import ApiService from './ApiService';
import axios from 'axios';


const SettingService = {
  getSettings(data) {
    return axios.get('http://reservation.test/api/time', data)
  }
}
export default SettingService

