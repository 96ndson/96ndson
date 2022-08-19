import ApiService from './ApiService';
import axios from 'axios';


const ReservationService = {
  postReservation(data) {
    return axios.post('http://reservation.test/api/add-reservation',data)
  }
}
export default ReservationService
