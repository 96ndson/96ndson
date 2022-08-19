<template>
  <div>
    <Comp-Header />
    <Comp-Container :timett="timett" v-on:getDay="timeApi" />
  </div>
</template>

<script>
import axios from 'axios';
import CompContainer from './home/CompContainer.vue'
import CompHeader from './home/CompHeader.vue'
import CompFooter from './home/CompFooter.vue'
import moment from 'moment';
export default {
  components: { CompHeader, CompContainer, CompFooter },
  name: "Home",
  data() {
    return {
      timett: []
    }
  },
  created() {
    this.timeApi();
  },
  methods: {
    timeApi(getday) {
      const params = {
        date: moment(getday).format('YYYY-MM-DD')
      };
      // console.log(params);
      axios.get('http://127.0.0.1:8000/api/auth/time',params).then(response => {
        let timeSetting = [];
        for (let i = 0; i < response.data.length; i++) {
          let data = response.data[i].time_setting;
          let arr = JSON.parse(data);
          console.log(arr);
          for (let j = 0; j < arr.length; j++) {
            timeSetting.push(
              response.data[i].date + ' ' + arr[j])
          }
        }
        this.timett = timeSetting;
        console.log(this.timett);
      });
    }
  }
}
</script>
<style scoped>
</style>
