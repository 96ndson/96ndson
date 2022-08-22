<template>
  <div class="wrapper">
    <Header></Header>
    <div class="tab-table">
      <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
        <li v-for="option in listOption" class="nav-item" role="presentation">
          <a
            @click="checkOption(option.name)"
            class="nav-link" :class="optionActive===option.name ? 'active' : ''"
          >{{option.name}}</a
          >
        </li>
      </ul>
    </div>
    <Profile v-if="optionActive==='Profile'"/>
    <Reservation v-else :reservation="reservation"></Reservation>
  </div>
</template>

<script>
import Reservation from "@/components/table_check/Reservation"
import Header from "@/components/layout/Header"
import Profile from "@/pages/auth/Profile"
import {ReservationService} from '@/services'

export default {
  name: "TableCheck",
  data() {
    return {
      reservation: {},
      optionActive: 'Reservation',
      listOption:[
        {
          name:'Reservation'
        },
        {
          name:'Profile'
        }
      ]
    }
  },
  components: {Header, Reservation, Profile},
  created() {

    this.getReservation()
  },
  methods: {
    checkOption(name) {
      this.optionActive = name
    },
    async getReservation() {
      let repo = await ReservationService.getReservation(this.$store.getters.getUser.id);
      this.reservation = repo.data
    }
  }
}
</script>
<style scoped>
.tab-table {
  margin-top: 20px;
}

.nav-link {
  font-weight: 600;
  color: #000;
}
</style>
