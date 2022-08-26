<template>
  <div class="wrapper">
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Mã đặt bàn</th>
        <th scope="col">Shop</th>
        <th scope="col">Số người</th>
        <th scope="col">Ngày</th>
        <th scope="col">Giờ</th>
        <th scope="col">Kiểu bàn</th>
        <th scope="col">Option</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="reservation in reservations">
        <th scope="row">{{ reservation.id }}</th>
        <td>{{ reservation.shop_id===1 ? 'Nguyễn Khánh Toàn' : 'Trần Nhân Tông' }}</td>
        <td>{{ reservation.people }}</td>
        <td>{{ reservation.date }}</td>
        <td>{{ reservation.time }}</td>
        <td>{{ reservation.style }}</td>
        <td v-if="reservation.length!=0">
          <router-link class="btn btn-success btn-sm" :to="{ name: 'edit_reservation', params: { id : reservation.id }}"><font-awesome-icon icon="fa-solid fa-pen-to-square"/></router-link>
          <a class="btn btn-danger btn-sm" href="javascript:void(0)" @click="deleteReservation(reservation.id)">
            <font-awesome-icon icon="fa-solid fa-trash"/>
          </a>
        </td>
      </tr>
      </tbody>
    </table>
    <h3 v-if="statusReservation||reservations.length==0">Bạn chưa đặt bàn hãy đặt bàn để thưởng thức một thế giới ẩm thực Nhật Bản mới mẻ</h3>
  </div>
</template>

<script>
import {ReservationService} from '@/services'
export default {
  name: "Reservation",
  data(){
    return{
      statusReservation : false
    }
  },
  props: {
    reservations: {
      type: Array,
      default: []
    }
  },
  methods:{
    async deleteReservation(id){
      alert('Bạn có chắc muốn xóa bàn không?')
      await ReservationService.deleteReservation(id).then(response =>{
        this.$toast.success('Hãy tiếp tục đặt bàn');
        this.statusReservation = true
        this.$router.push({name : 'home'},() =>{})
      })
    }
  }
}
</script>

<style scoped>
.wrapper{
  text-align: center;
}
.table {
  border: 2px solid #ccc;
}
</style>
