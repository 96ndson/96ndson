import ApiService from './ApiService';


const ReservationService = {
  postReservation(data) {
    return ApiService.post('http://reservation.test/api/add-reservation', data)
  },
  getReservation(id) {
    return ApiService.get('/api/show-reservation/?id=' + id)
  },
  deleteReservation(id) {
    return ApiService.get(`/api/delete-reservation/${id}`)
  },
  editReservation(id,data) {
    return ApiService.post(`/api/edit-reservation/${id}`,data)
  }
}
export default ReservationService
