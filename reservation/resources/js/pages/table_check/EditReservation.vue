<template>
  <div class="wrapper">
    <Header></Header>
    <div class="form-reservation wrapper">
      <h3>Chỉnh sửa thông tin đặt bàn</h3>
      <form v-on:submit.prevent="editReservation">
        <div class="form-group">
          <label>Số người</label>
          <input :value="form.people" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label class="d-block">Shop</label>
          <select class="form-select" v-model="form.shop_id">
            <option :value="item.value" v-for="item in listShop" :selected="form.shop_id === item.value">Shop
              {{ item.name }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label>Kiểu bàn</label>
          <input v-model="form.style" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label>Ngày</label>
          <input v-model="form.date" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label>Giờ</label>
          <input v-model="form.time" type="text" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "@/components/layout/Header"
import {listShop} from '@/helpers/constant.js';
import {ReservationService} from '@/services'

export default {
  name: "EditReservation",
  components: {Header},
  data() {
    return {
      form: {
        people: null,
        children: null,
        baby: null,
        date: '',
        time: '',
        user_id: null,
        shop_id: '',
        style: null
      },
      listShop: listShop
    }
  },
  created() {
    this.getReservation()
  },
  methods: {
    editReservation() {
      ReservationService.editReservation(this.form.id, this.form).then(response => {
        this.$toast.success('Điều chỉnh thành công');
        this.$router.push({name: 'home'}, () => {
        })
      }).catch(err => {
        this.$toast.error(err.data.message)
      })
    },
    async getReservation() {
      let repo = await ReservationService.getReservationByID(this.$route.params.id)
      this.form = repo.data
    }
  }
}
</script>

<style scoped>
.form-reservation {
  max-width: 800px;
  margin-top: 20px;
}

.form-control {
  padding: 20px 16px !important;
  font-size: 14px !important;
}

.form-select {
  padding: 10px 16px !important;
  font-size: 14px !important;
}
</style>
