import ApiService from './ApiService';
import axios from 'axios';


const FoodService = {
  getFoods() {
    return axios.get('http://reservation.test/api/food')
  }
}
export default FoodService
