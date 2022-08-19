<template>
  <div class="timetable">
    <div class="content-order col-lg-10 col-lg-offset-1">
      <div class="panel panel-invisible">
        <div class="panel-heading">
          <a class="panel-title" href="">Availability</a>
          <div class="pull-right" v-on:click="showTimeContent">
            <a>
              <font-awesome-icon class="fa-2x" icon="minus"/>
            </a>
          </div>
        </div>
        <div class="timetable-collapse">
          <table>
            <tbody>
            <!--            <tr class="mobile_week_change"></tr>-->
            <!--            <tr class="navTableMobile">-->
            <!--              <td colspan="4">-->
            <!--                <a v-on:click="prevWeek" class="prev-week next_prev_btn">-->
            <!--                  <font-awesome-icon class="icon-time fa-2x" icon="fa-solid fa-angle-left"/>-->
            <!--                </a>-->
            <!--              </td>-->
            <!--              <td colspan="4">-->
            <!--                <a v-on:click="nextWeek" class="next-week next_prev_btn">-->
            <!--                  <font-awesome-icon class="icon-time fa-2x" icon="fa-solid fa-chevron-right"/>-->
            <!--                </a>-->
            <!--              </td>-->
            <!--            </tr>-->
            <tr>
              <th class="time-left-arrow" colspan="1">
                <a v-on:click="prevWeek" class="prev-week next_prev_btn">
                  <font-awesome-icon class="icon-time fa-2x" icon="fa-solid fa-angle-left"/>
                </a>
              </th>
              <th class="month" colspan="7" v-for="(item1, index1) in monthLabels" :key="index1"
                  :colspan="item1.numberDay">
                <div class="date-num">{{ item1.monthLabel }}</div>
              </th>
              <th class="time-right" colspan="2">
                <a v-on:click="nextWeek" class="next-week next_prev_btn">
                  <font-awesome-icon class="icon-time fa-2x" icon="fa-solid fa-chevron-right"/>
                </a>
              </th>
            </tr>
            <tr class="timetable-body">
              <td class="wday-hidden"></td>
              <td class="wday cob" v-for="dateLists in dateList">
                <div class="date-name">{{ dateLists.label }}</div>
                <div class="date-num">{{ dateLists.day }}</div>
              </td>
              <td class="wday-hidden"></td>
            </tr>
            <tr class="timetable-row" v-for="date in timeOrder">

              <td class="time time-left" v-for="(time, key) in date">
                <template v-if="key === 0 || key === 8">
                  {{ time.value }}
                </template>
                <template v-else>
                  <template v-if="timePrev.includes(time.value)">
                    <font-awesome-icon class="dislable available table-icon"
                                       icon="x"/>
                  </template>
                  <template v-else>
                    <font-awesome-icon class="available table-icon " @click="selectTime(time)"
                                       :icon="chooseTime === time.value ? 'circle-check' : 'fa-solid fa-o'"/>
                  </template>
                </template>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpenTimeContent: true,
      chooseTime: '',
    }
  },
  props: {
    calendar: {
      type: String,
      default: ''
    },
    isOpenCalendar: {
      type: Boolean,
      default: false
    },
    dateList: {
      type: Array,
      default: []
    },
    timeOrder: {
      type: Array,
      default: []
    },
    monthLabels: {
      type: Array,
      default: []
    },
    timePrev: {
      type: Array,
      default: []
    }
  },
  methods: {
    showTimeContent() {
      if (this.isOpenCalendar) {
        this.$emit('showCalendar', {open: this.isOpenTimeContent})
        this.$emit('closeHeading', {open: this.isOpenCalendar})
      }
    },
    selectTime(time) {
      this.chooseTime = time.value;
      this.$emit('submitFormReservation',this.chooseTime)
      console.log(time.value)
    },
    nextWeek() {
      this.$emit('showWeek', 'next');
    },
    prevWeek() {
      this.$emit('showWeek');
    }
  }
}
</script>

<style scoped>
.timetable {
  display: block;
}

.panel-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--primary-color);
}

.pull-right {
  display: inline-block;
  float: right;
  cursor: pointer;
}

.pull-right a {
  color: var(--primary-color);
}

.timetable a.next_prev_btn {
  display: block;
  padding: 20px 0;
  margin: -20px 0;
  cursor: pointer;
}

.timetable .date-num {
  font-weight: bold;
}

.timetable table {
  width: 100%;
}

.timetable th, .timetable td {
  height: 26px;
  text-align: center;
  vertical-align: middle;
  border: solid 1px #dddddd;
  padding: 0;
}

.timetable .available:hover {
  background-color: #5CB85C;
  color: #fff;
}

.time-left-arrow {
  border-bottom: none !important;
}

.time-right {
  border-bottom: none !important;
}

.next_prev_btn {
  color: #7E5BEF;
  text-decoration: none;
  margin: auto; /* Magic! */
  max-width: 100%;
  max-height: 100%;
  border-bottom: none;
}

.timetable .month {
  padding: 5px 0;
}

.timetable .time {
  font-weight: normal;
  font-size: 16px;
}

.available {
  display: block;
  padding: 0;
  color: #5CB85C;
  width: 100%;
  height: 100%;
  background-color: #def1de;
  cursor: pointer;
}

.wday-hidden {
  border-top: none !important;
}

.dislable {
  background: #BBBBBB;
  pointer-events: none;
  color: #fff;
}
</style>
