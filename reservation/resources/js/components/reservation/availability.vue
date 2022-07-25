<template>
  <div class="timetable" >
    <div class="content-order col-lg-10 col-lg-offset-1">
      <div class="panel panel-invisible">
        <div class="panel-heading">
          <a class="panel-title" href="">Availability</a>
          <div  class="pull-right" v-on:click="showTimeContent">
            <a >
            <font-awesome-icon class="fa-2x" icon="minus" />
            </a>
          </div>
        </div>
        <div class="timetable-collapse">
          <table>
            <tbody>
<!--            <tr class="mobile_week_change"></tr>-->
            <tr>
              <th class="time-left-arrow" colspan="1">
                  <a class="prev-week next_prev_btn"><font-awesome-icon class="icon-time fa-2x" icon="fa-solid fa-angle-left" /></a>
              </th>
              <th class="month" colspan="7">Jul</th>
              <th class="time-right" colspan="2">
                <a class="next-week next_prev_btn"><font-awesome-icon class="icon-time fa-2x" icon="fa-solid fa-chevron-right" /></a>
              </th>
            </tr>
            <tr class="timetable-body">
              <td class="wday-hidden"></td>
              <td class="wday cob">
                <div class="day-name">F</div>
                <div class="date-num">22</div>
              </td>
              <td class="wday table-danger">
                <div class="day-name ">F</div>
                <div class="date-num">22</div>
              </td>
              <td class="wday table-success">
                <div class="day-name">F</div>
                <div class="date-num">22</div>
              </td>
              <td class="wday">
                <div class="day-name">F</div>
                <div class="date-num">22</div>
              </td>
              <td class="wday">
                <div class="day-name">F</div>
                <div class="date-num">22</div>
              </td>
              <td class="wday">
                <div class="day-name">F</div>
                <div class="date-num">22</div>
              </td>
              <td class="wday">
                <div class="day-name">F</div>
                <div class="date-num">22</div>
              </td>
              <td class="wday-hidden"></td>
            </tr>
            <tr class="timetable-row">
              <th class="time time-left">10:00 AM</th>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <th class="time time-left">10:00 AM</th>
            </tr>
            <tr class="timetable-row">
              <th class="time time-left">10:30 AM</th>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <th class="time time-left">10:30 AM</th>
            </tr>
            <tr class="timetable-row">
              <th class="time time-left">11:00 AM</th>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <th class="time time-left">11:00 AM</th>
            </tr>
            <tr class="timetable-row">
              <th class="time time-left">11:30 AM</th>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <th class="time time-left">11:30 AM</th>
            </tr>
            <tr class="timetable-row">
              <th class="time time-left">12:00 PM</th>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <th class="time time-left">12:00 PM</th>
            </tr>
            <tr class="timetable-row">                  <th class="time time-left">12:30 PM</th>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <th class="time time-left">12:30 PM</th></tr>
            <tr class="timetable-row">                  <th class="time time-left">1:00 PM</th>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <th class="time time-left">1:00 PM</th></tr>
            <tr class="timetable-row">                  <th class="time time-left">1:30 PM</th>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <th class="time time-left">1:30 PM</th></tr>
            <tr class="timetable-row">                  <th class="time time-left">2:00 PM</th>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <th class="time time-left">2:00 PM</th></tr>
            <tr class="timetable-row">                  <th class="time time-left">2:30 PM</th>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <th class="time time-left">2:30 PM</th></tr>
            <tr class="timetable-row">                  <th class="time time-left">3:00 PM</th>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <th class="time time-left">3:00 PM</th></tr>
            <tr class="timetable-row">                  <th class="time time-left">3:30 PM</th>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <th class="time time-left">3:30 PM</th></tr>
            <tr class="timetable-row">                  <th class="time time-left">4:00 PM</th>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <th class="time time-left">4:00 PM</th></tr>
            <tr class="timetable-row">                  <th class="time time-left">4:30 PM</th>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <th class="time time-left">4:30 PM</th></tr>
            <tr class="timetable-row">                  <th class="time time-left">5:00 PM</th>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <td class="available">
                <a href=""><font-awesome-icon icon="fa-solid fa-o" /></a>
              </td>
              <th class="time time-left">5:00 PM</th></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      isOpenTimeContent:true,
    }
  },
  props:{
    calendar:{
      type:String,
      default:''
    },
    isOpenCalendar:{
      type:Boolean,
      default: false
    },
  },
  methods:{
    showTimeContent(){
      if(this.isOpenCalendar){
        this.$emit('showCalendar',{open:this.isOpenTimeContent})
        this.$emit('closeHeading',{open:this.isOpenCalendar})
      }
    }
  }
}
</script>

<style scoped>
.timetable{
  display: block;
}
.panel-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--primary-color);
}
.pull-right{
  display: inline-block;
  float: right;
}
.pull-right a {
  color: var(--primary-color);
}
.timetable a.next_prev_btn {
  display: block;
  padding: 20px 0;
  margin: -20px 0;
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
.timetable .available a:hover{
  background-color: #5CB85C;
  color: #fff;
}
.time-left-arrow{
  border-bottom: none!important;
}
.time-right{
  border-bottom: none!important;
}
.next_prev_btn{
  color: #7E5BEF;
  text-decoration: none;
  margin: auto;  /* Magic! */
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
.available a {
  display: block;
  padding: 3px 0;
  color: #5CB85C;
  background-color: #def1de;
}
.wday-hidden{
  border-top: none!important;
}
</style>
