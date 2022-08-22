import ApiService from './ApiService';


const FoodService = {
  getFoods() {
    return ApiService.get('/api/food')
  }
}
export default FoodService
