<template>
  <div class="wrapper">
    <Header :listShop="listShop" v-on:getFoodByID="getFoodByID"></Header>
    <div class="content">
      <form v-on:submit.prevent="submitFormReservation">
        <div class="content1">
          <div class="content-order col-lg-10 col-lg-offset-1">
            <div class="panel panel-invisible">
              <div class="panel-heading">
                <h3 class="panel-title">Book at HUGE Head Office</h3>
              </div>
            </div>
            <div class="panel-body">
              <div class="form-group form-group-note">
                <div class="col-sm-8 col-sm-offset-2 form-group-note1">
                  <div class="reservation-label">Message from Venue</div>
                  <div class="reservation_online_note">
                    ※お1人様につき500円のコペルト(席料)を頂戴致します(ランチは除く)。下記のコース料金はすべてコペルトを含む金額となっております。<br>
                    ※表記のメニュー金額はすべて税抜きです。お会計時には消費税が表記の金額に別途加算されます。<br>
                    ※ご予約のお時間から20分以上遅れられた場合は、自動的にキャンセルとさせて頂く場合がございます。<br>
                    ※万が一、ご予約のキャンセルもしくは人数の変更をされる場合は、ご予約日の前日までにお願いいたします。ご連絡を頂けない場合はキャンセル料を頂戴いたします。<br>

                    ◆終日　全館禁煙<br>
                    ◆お子様の同伴：ランチ・ディナー共に小学生以上とさせて頂いております。<br>
                    ◆ドレスコード：スポーツウェア・ランニングシャツ・ビーチサンダル・スポーツキャップ着用でのご来店をご遠慮頂いております。<br><br>
                    <a class="reservation_online_note-link" href="">詳細はこちら</a>
                  </div>
                </div>
                <div class="col-sm-8 col-sm-offset-2 form-group-note1">
                  <div class="checkbox error alert-danger">
                    <input type="checkbox" class="reservation-confirm-shop-note">
                    <span class="reservation-confirm-shop-note">I confirm I've read the Message from Venue above</span>
                  </div>
                </div>
              </div>
              <div class="form-group row form-group-shared">
                <div class="form-group-booking-datetime col-sm-12">
                  <div class="row">
                    <div
                      class="form-group-booking input-group-icn res-widget-col col-sm-4 error-parent-no-tooltip input-group">
                      <font-awesome-icon class="form-group-booking-icon" icon="user-large"/>
                      <select v-on:change="showCalendar" name="" id="" v-model="form.people"
                              class="form-control form-group-booking-input-danger alert-danger">
                        <option>-- Adults --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                    <div
                      class="form-group-booking input-group-icn res-widget-col  col-sm-4 error-parent-no-tooltip input-group">
                      <font-awesome-icon class="form-group-booking-icon" :icon="['far', 'calendar-days']"/>
                      <datetime :min-datetime="dateNow" placeholder="-- Select Date --" type="datetime-local" v-model="calendar"
                                class="form-control form-group-booking-input-danger alert-danger"></datetime>
                    </div>
                    <div
                      class="form-group-booking  input-group-icn res-widget-col  col-sm-4 error-parent-no-tooltip input-group">
                      <font-awesome-icon class="form-group-booking-icon" :icon="['far', 'clock']"/>
                      <select class="form-control form-group-booking-input-danger select-disabled" v-model="form.time">
                        <option>-- Select Time --</option>
                        <option v-for="times in testTime" :value="times">{{ times }}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group row form-group-shared form-group-shared-children">
                <div class="form-group-booking input-group-icn res-widget-col  col-sm-4">
                  <div class="input-group form-group-children">
                    <font-awesome-icon class="form-group-booking-icon" icon="child-reaching"/>
                    <select name="" class="form-control form-group-booking-input" v-model="form.children">
                      <option>-- Children --</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  <div class="help-block resform-agenote">12 years and under</div>
                </div>
                <div class="form-group-booking input-group-icn res-widget-col  col-sm-4 ">
                  <div class="input-group form-group-children">
                    <font-awesome-icon class="form-group-booking-icon" icon="baby"/>
                    <select name="" class="form-control form-group-booking-input" v-model="form.baby">
                      <option value="">-- Baby --</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  <div class="help-block resform-agenote">5 years and under</div>
                </div>
              </div>
              <div class="form-group form-group-shared form-group-shared-children">
                <div class="form-group-table col-xs-12 col-xs-only input-group-icn form-group-booking ">
                  <div class="top-icon">
                    <font-awesome-icon class="form-group-booking-icon" icon="couch"/>
                  </div>
                  <div class="btn-group d-lg-flex">
                    <label v-on:click="checkTableStyle(listTableStyles)"
                           v-for="(listTableStyles) in listTableStyle"
                           :class="tableStyle === listTableStyles.name ? 'form-group-table-label-active' : 'form-group-table-label'">
                      <input
                        class="radio_buttons optional"
                        :value="listTableStyles.value"
                        type="radio">
                      {{ listTableStyles.name }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <availability v-if="isOpenCalendar" :timeOrder="timeOrder" v-on:showWeek="showWeek" :monthLabels="monthLabels"
                      :isOpenCalendar="isOpenCalendar" :calendar="calendar" v-on:showCalendar="showCalendar"
                      :dateList="dateList" :timePrev="timePrev" v-on:submitFormReservation="submitFormReservation"/>
        <div class="content-order col-lg-10 col-lg-offset-1 showheading"
             :style="{display: showHeadingCalendar ? 'block' : ''}">
          <div class="panel-heading">
            <a class="panel-title" href="">Availability</a>
            <div class="pull-right" v-on:click="showCalendar">
              <a>
                <font-awesome-icon class="fa-2x" :icon="changeIcon ? 'plus' : 'minus' "/>
              </a>
            </div>
          </div>
        </div>
      </form>
      <div class="content2">
        <div class="row">
          <div class="reserveform-menu-items col-lg-10 col-lg-offset-1">
            <div class="panel panel-invisible">
              <div class="heading-menu-item"></div>
              <div class="menu-items-content d-flex">
                <div class="col-sm-2 col-xs-5 no-pad-right pull-left group1">
                  <img class="menu-item-image img-responsive"
                       :src="food.image"
                       alt="">
                </div>
                <div class="col-sm-8 col-xs-12 group2">
                  <div class="menu-item-heading order-1">{{ food.title }}</div>
                  <div class="menu-item-desc">
                    {{ food.description }}
                  </div>
                  <div class="menu-item-content">
                    <div class="menu-item-content-desc">
                      {{ food.content ? food.content.slice(0, 300) : '' }}
                    </div>
                    <div class="menu-item-content-document" :class="!showreadMore ? '' : 'd-block' ">
                      {{ food.content ? food.content.slice(301) : '' }}
                      <div class="menu-item-small">
                        Fine Print ※ The contents of the menu may change without prior notice depending on the market.
                        Please acknowledge it beforehand.<br>
                        ※ If you have allergy, please let us know in advance.<br>
                        ※ Last-in time is 1:50 p.m. Close time is 3:00 p.m.<br>
                        Meals LunchOrder Limit 2 ~ 6<br>
                      </div>
                    </div>
                    <div v-if="!closereadMore" class="show-more-btn-wrapper">
                      <a v-on:click="readMore" class="btn btn-default show-more-btn">Read More</a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-2 col-xs-7 pull-right group3">
                  <div class="menu-item-right">
                    <div class="menu-item-price row">
                      <div class="menu-item-price-value">¥ {{ food.price }}</div>
                      <div class="menu-item-price-tax">(Tax Excl.)</div>
                    </div>
                    <div class="menu-item-select">
                      <button type="button" class="menu-item-btn">Select</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-10 col-lg-offset-1 content-order">
        <div class="panel panel-invisible">
          <div class="panel-heading">
            <h3 class="panel-title">Request</h3>
          </div>
          <div class="panel-body">
            <div class="reserveform-customerrequest">
              <label for="" class="reserveform-customerrequest-label col-sm-3">Requests</label>
              <div class="col-sm-7 control-area">
                <textarea class="reserveform-customerrequest-textarea"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    <back-to-top bottom="50px" right="50px">
      <button type="button" class="btn btn-info btn-to-top">
        <div class="d-flex content-to-top">
          <font-awesome-icon class="icon-to-top fa-2x" icon="angle-up"/>
          <span class="text-to-top">Next</span>
        </div>
      </button>
    </back-to-top>
  </div>
</template>

<script>
import availability from "@/components/reservation/availability"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import {Datetime} from 'vue-datetime'
import moment from 'moment';
import {workTime, listTableStyle} from '@/helpers/constant.js';
import {ShopService, FoodService, ReservationService, SettingService} from '@/services'

export default {
  name: "Home",
  components: {availability, Header, Footer, datetime: Datetime},
  data() {
    return {
      isOpenCalendar: false,
      showreadMore: false,
      closereadMore: false,
      calendar: '',
      changeIcon: false,
      showHeadingCalendar: false,
      dateList: [],
      tableStyle: '',
      timeOrder: [],
      testTime: workTime,
      listTableStyle: listTableStyle,
      monthLabels: [],
      timePrev: [],
      activeLogin: false,
      food: {},
      form: {
        people: null,
        children: null,
        baby: null,
        date: '',
        time:'',
        user_id: null,
        shop_id: null,
        style: null
      },
      listShop: [],
      dateNow : ''
    }
  },
  created() {
    this.dateNow = moment().format('YYYY-MM-DD')
    this.getListFood()
    this.getListShop()
  },
  watch: {
    calendar() {
      this.getListTime();
      let days = [];
      let today = moment(this.calendar);
      let start = today.startOf('week').format('YYYY-MM-DD');
      let end = today.endOf('week').format('YYYY-MM-DD');
      let tempDate = start;
      let listMonth = [
        {
          monthLabel: moment(this.calendar).startOf('isoWeek').format('MMM'),
          numberDay: 1
        },
      ];
      for (let i = 0; i <= 6; i++) {
        tempDate = moment(tempDate).add(1, 'd').format('YYYY-MM-DD');
        let label = moment(tempDate).format('dd');
        let day = moment(tempDate).format('DD');
        let month = moment(tempDate).format('MMM');
        days = [...days, ...[{
          label,
          date: tempDate,
          day,
          month
        }]];
        if (i > 0) {
          if (moment(tempDate).format('DD') == '01') {
            listMonth.push({
              monthLabel: moment(tempDate).format('MMM'),
              numberDay: 1
            })
          } else {
            listMonth[listMonth.length - 1].numberDay += 1;
          }
        }
      }

      this.monthLabels = [];
      this.monthLabels = [...listMonth];
      let testTimeValue = [];
      for (let j = 0; j < this.testTime.length; j++) {
        let th = []
        tempDate = start;
        for (let k = 0; tempDate <= end; k++) {
          tempDate = moment(tempDate).add(1, 'd').format('YYYY-MM-DD');
          th.push({
            value: tempDate + ' ' + this.testTime[j]
          })
        }
        th.unshift({value: this.testTime[j]});
        th.push({value: this.testTime[j]});
        testTimeValue.push(th)
      }

      this.dateList = days;
      this.timeOrder = testTimeValue;
    },
  },
  methods: {
    getFoodByID(id){
      FoodService.getFoodByID(id).then(res =>{
        this.food = res.data
      })
    },
    getListShop() {
      ShopService.getShops().then((res)=>{
        this.listShop = res.data
      })
    },
    submitFormReservation(date,time) {
      alert('Bạn có chắc chắn muốn đặt bàn không?')
      if(date) {
        let {form} = this;
        form.user_id = this.$store.getters.getUser.id
        form.style = this.tableStyle;
        form.date = date
        form.time = time
        form.shop_id = this.food.shop_id || 1
        ReservationService.addReservation(form)
          .then((res) => {
            this.$toast.success('Đặt lịch thành công')
          })
          .catch((error) => {
            console.log(error)
          });
      }
      else
      {
        this.$toast.error('Chọn ngày không hợp lệ vui lòng chọn ngày khác')
      }
    },
    showCalendar(cc) {
      if (cc.open) {
        this.showHeadingCalendar = true;
        this.changeIcon = true
        this.isOpenCalendar = !this.isOpenCalendar;
      } else {
        this.isOpenCalendar = !this.isOpenCalendar
      }
    },
    readMore() {
      this.showreadMore = true
      this.closereadMore = true
    },
    showWeek($status) {
      if ($status === 'next') {
        this.calendar = moment(this.calendar).add(7, 'd').format('YYYY-MM-DD');
      } else {
        this.calendar = moment(this.calendar).subtract(7, 'd').format('YYYY-MM-DD');
      }
    },
    checkTableStyle(listTableStyles) {
      this.tableStyle = listTableStyles.name;
    },
    async getListTime() {
      try {
        const response = await SettingService.getSettings({
            params:
              {
                date: moment(this.calendar).format('YYYY-MM-DD')
              }
          }
        );
        for (let i = 0; i < response.data.length; i++) {
          let arr = JSON.parse(response.data[i].setting_time);
          for (let j = 0; j < arr.length; j++) {
            this.timePrev.push(
              response.data[i].date + ' ' + arr[j])
          }
        }
      } catch (error) {
        this.error = error.response?.data;
      }
    },
    async getListFood() {
      const response = await FoodService.getFoods();
      this.food = response.data
    }
  },
}
</script>

<style scoped>
.showheading {
  display: none;
}

.pull-right {
  display: inline-block;
  float: right;
}

.pull-right a {
  color: var(--primary-color);
}
</style>
