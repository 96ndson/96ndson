import ApiService from './ApiService';


const ReservationService = {
  addReservation(data) {
    return ApiService.post('/api/reservation/add-reservation', data)
  },
  getReservation(id) {
    return ApiService.get('/api/reservation/show-reservation/?id=' + id)
  },
  getReservationByID(id){
    return ApiService.get('/api/reservation/show-edit-reservation/?id=' + id)
  },
  deleteReservation(id) {
    return ApiService.get(`/api/reservation/delete-reservation/${id}`)
  },
  editReservation(id, data) {
    return ApiService.post(`/api/reservation/edit-reservation/${id}`, data)
  }
}
export default ReservationService
