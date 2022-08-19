import {parseJwt} from "@/helpers/constant";
export default {
  isLogin: state => {
    console.log(state.ACCESS_TOKEN,'vv')
    let userObj = parseJwt(localStorage.getItem('ACCESS_TOKEN'));
    if (userObj) {
      return true;
    } else {
      return false;
    }
  },
  currentUser : state =>{
    return state.currenUser
  }
}
