<template>
  <div class="wrapper">
    <div class="list-group">
      <a href="javascript:void(0)" class="list-group-item list-group-item-action">
        <span class="list-group-title">Tên đăng nhập :</span>
        {{ user.name }}
      </a>
      <a href="javascript:void(0)" class="list-group-item list-group-item-action"><span class="list-group-title">Email :</span>{{ user.email }}</a>
      <a href="javascript:void(0)" class="list-group-item list-group-item-action"><span class="list-group-title">Ảnh đại diện :</span>{{ user.image }}</a>
      <a href="javascript:void(0)" class="list-group-item list-group-item-action"><span class="list-group-title">Address :</span>{{ user.address }}</a>
      <a href="javascript:void(0)" class="list-group-item list-group-item-action"><span class="list-group-title">Phone :</span>{{ user.mobile }}</a>
    </div>
    <button type="button" class="btn btn-info btn-profile">Chỉnh sửa thông tin</button>
  </div>
</template>

<script>
import Header from "@/components/layout/Header"
import {UserService} from '@/services'

export default {
  name: "Login",
  components: {Header},
  data() {
    return {
      user:{}
    }
  },
  created() {
    this.getUserProfile();
  },
  methods:{
    async getUserProfile(){
      const responsive = await UserService.getUser()
      this.user = responsive.data
    }
  }


}
</script>
<style scoped>
.list-group{
  text-align: center;
}
.list-group-title{
  color: #1c1e21;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  padding-right: 5px;
  width: 190px!important;
  display: block;
}
.btn-profile{
  padding: 10px;
  margin-top: 10px;
}
</style>

