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
    <AddFood v-if="optionActive==='Food'"/>
    <Profile v-if="optionActive==='Profile'"/>
    <Reservation v-if="optionActive==='Reservation'" :reservations="reservations"></Reservation>
  </div>
</template>

<script>
import Reservation from "@/components/table_check/Reservation"
import Header from "@/components/layout/Header"
import Profile from "@/pages/auth/Profile"
import {ReservationService} from '@/services'
import AddFood from "@/pages/table_check/AddFood"

export default {
  name: "TableCheck",
  data() {
    return {
      reservations: [],
      optionActive: 'Reservation',
      listOption:[
        {
          name:'Reservation'
        },
        {
          name:'Profile'
        },
        {
          name:'Food'
        }
      ]
    }
  },
  components: {Header, Reservation, Profile, AddFood},
  created() {

    this.getReservation()
  },
  methods: {
    checkOption(name) {
      this.optionActive = name
    },
    async getReservation() {
      let repo = await ReservationService.getReservation(this.$store.getters.getUser.id);
      this.reservations = repo.data
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
