import ApiService from './ApiService';


const ReservationService = {
  addReservation(data) {
    return ApiService.post('/api/add-reservation', data)
  },
  getReservation(id) {
    return ApiService.get('/api/show-reservation/?id=' + id)
  },
  getReservationByID(id) {
    return ApiService.get('/api/get-reservation/?id=' + id)
  },
  deleteReservation(id) {
    return ApiService.get(`/api/delete-reservation/${id}`)
  },
  editReservation(id, data) {
    return ApiService.post(`/api/edit-reservation/${id}`, data)
  }
}
export default ReservationService
