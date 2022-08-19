<template>
  <div class="margin-left">
    <div class="body-table">
      <div class="panel-heading">
        <a data-toggle="collapse" href="#" role="button" aria-expanded="false" aria-controls="collapseExample">
          <h3 class="panel-title">Availability</h3>
        </a>
      </div>
      <div class="collapse " v-bind:class="{ show: isShow }" id="collapseExample">
        <table>
          <tr>
            <th class="time-right prev-week" rowspan="2">
              <font-awesome-icon icon="fa-solid fa-chevron-left" class="icon-next" @click="prevDate()" />
            </th>
            <th class="time-right day" v-for="(item1, index1) in monthLabels" :key="index1" :colspan="item1.numberDay">
              <div class="date-num">{{ item1.monthLabel }}</div>
            </th>
            <th class="time-right prev-week" rowspan="2">
              <font-awesome-icon icon="fa-solid fa-chevron-right" class="icon-next" @click="nextDate()" />
            </th>
          </tr>
          <tr>
            <th class="time-right day" v-for="(item, index) in arr" :key="index">
              <div class="day-name">{{ item['label'] }}</div>
              <div class="date-num">{{ item['day'] }}</div>
            </th>
          </tr>

          <tr v-for="(date, key) in timeOrder" :key="key">
            <td class="center border " :class="(index == 0 || index == 8) ? '' : 'color'" v-for="(time, index) in date "
              :key="index">
              <template v-if="index == 0 || index == 8">
                {{ time.value }}
              </template>
              <template v-else>
                <template v-if="timett.includes(time.value)">
                  <font-awesome-icon icon="fa-solid fa-xmark" :class="{ style_disable: isActive }" />
                </template>
                <template v-else>
                  <font-awesome-icon :icon="circleCheck == time.value ? 'fa-solid fa-circle-check' : 'fa-solid fa-o'"
                    @click="selectTime(time)" />
                </template>
              </template>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { timeShop } from '@/helpers/constant'
export default {
  name: 'comp-table',

  data() {
    return {
      timeShop: timeShop,
      isActive: true,
      circleCheck: '',
    };
  },
  props: {
    isShow: {
      type: Boolean,
      default: true
    },
    arr: {
      type: Array,
      default: []
    },
    getday: {
      type: String,
      default: ' '
    },
    timeOrder: {
      type: Array,
      default: []
    },
    monthLabels: {
      type: Array,
      default: []
    },
    timeWorkShop: {
      type: Array,
      default: []
    },
    classDis: {
      type: String,
      default: ''
    },
    timett: {
      type: Array,
      default: []
    }
  },

  watch: {
    // classDisable(){
    //   this.disable()
    // }
  },
  methods: {
    selectTime(time) {
      this.circleCheck = time.value;
      console.log(time.value);
    },
    nextDate() {
      this.$emit('next');
    },
    prevDate() {
      this.$emit('prev');
    },
    disable() {
      console.log(this.classDis);
    }
  },
};
</script>

<style scoped>
.active {
  display: block;
}
.style_disable {
  background: rgb(160, 162, 160);
  color: #5d5c5c!important;
  width: 65px;
  height: 23px;
}

.style_disable:hover .color {
  background: blanchedalmond !important;
}
</style>
