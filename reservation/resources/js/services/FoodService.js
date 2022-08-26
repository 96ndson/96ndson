import ApiService from './ApiService';


const FoodService = {
  getFoods() {
    return ApiService.get('/api/food')
  },
  addFood(data) {
    return ApiService.post('/api/add-food',data)
  },
  getFoodByID(id){
    return ApiService.get('/api/food-by-id/?id=' + id)
  }
}
export default FoodService
