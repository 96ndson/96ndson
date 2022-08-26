import ApiService from './ApiService';


const ShopService = {
  getShops() {
    return ApiService.get('/api/shop')
  },
  // addFood(data) {
  //   return ApiService.post('/api/add-food',data)
  // }
}
export default ShopService
