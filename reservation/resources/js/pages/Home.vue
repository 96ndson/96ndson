<template>
  <div class="wrapper">
    <a href="#" v-on:click="calendarMethods">CCCCCCCCCCCCCCCCCCCC</a>
    <div class="header d-flex justify-content-between">
      <div class="navbar-brand">
        <img
          src="https://cdn0.tablecheck.com/shops/557ecc9ba0749e2a48003703/tc_header_images/md/DAZZLE_WD%E3%83%AD%E3%82%B4.png?1473998345"
          alt="">
      </div>
      <nav class="navbar navbar-expand-lg navbar-expand-sm ">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <font-awesome-icon class="nav-icon" icon="fa-solid fa-circle-question"/>
                Help</a>
            </li>
            <div class="nav-item nav-item-dropdown">
              <div class=" dropdown show">
                <a class="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false">
                  <font-awesome-icon class="nav-icon" icon="earth-europe"/>
                  English
                </a>
                <div class="dropdown-menu dropdown-menu-header" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item" href="#">English</a>
                  <a class="dropdown-item" href="#">日本語</a>
                  <a class="dropdown-item" href="#">한국어</a>
                  <a class="dropdown-item" href="#">Vietnamese</a>
                  <a class="dropdown-item" href="#">Brazil</a>
                  <a class="dropdown-item" href="#">ภาษาไทย</a>
                  <a class="dropdown-item" href="#">العربية</a>
                  <a class="dropdown-item" href="#">Italiano</a>

                </div>
              </div>
            </div>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <font-awesome-icon class="nav-icon" icon="utensils"/>
                My Reservations</a>
            </li>
          </ul>
        </div>
      </nav>
      <button class="btn nav-mobile-toggle" type="button" data-toggle="collapse"
              data-target="#cc"
              aria-controls="navbarToggleExternalContent" aria-expanded="false">
        <font-awesome-icon icon="bars"/>
      </button>
      <div class="nav-mobile collapse show navbar-collapse" v-bind:class="isOpenNavMobile ? '' : 'hidden'" id="cc">
        <ul class="nav navbar-nav">
          <li class="nav-mobile-link-about ">
            <a class="dropdown-toggle nav-link-mobile" role="button"
               id="dropdownMenuLinkMobile" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false" href="#">
              <font-awesome-icon class="nav-icon" icon="earth-europe"/>
              English
            </a>
            <ul class="dropdown-menu dropdown-menu-mobile" aria-labelledby="dropdownMenuLinkMobile">
              <li class="dropdown-item-mobile" href="#">English</li>
              <li class="dropdown-item-mobile" href="#">日本語</li>
              <li class="dropdown-item-mobile" href="#">한국어</li>
              <li class="dropdown-item-mobile" href="#">Vietnamese</li>
              <li class="dropdown-item-mobile" href="#">Brazil</li>
              <li class="dropdown-item-mobile" href="#">ภาษาไทย</li>
              <li class="dropdown-item-mobile" href="#">العربية</li>
              <li class="dropdown-item-mobile" href="#">Italiano</li>
            </ul>
          </li>
          <li><a class="nav-link-mobile" href="#">
            <font-awesome-icon class="nav-icon" icon="utensils"/>
            My Reservation</a></li>
          <li><a class="nav-link-mobile" href="#">
            <font-awesome-icon class="nav-icon" icon="circle-question"/>
            Helps</a></li>
          <li><a class="nav-link-mobile" href="#">For Retaurants</a></li>
          <li class="nav-mobile-link-out" v-on:click="closeNav()">
            <font-awesome-icon class="nav-icon" icon="angles-right"/>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
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
                    <select v-on:change="showCalendar" name="" id=""
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
                    <datetime  placeholder="-- Select Date --" type="datetime-local" v-model="calendar" class="form-control form-group-booking-input-danger alert-danger"></datetime>
                  </div>
                  <div
                    class="form-group-booking  input-group-icn res-widget-col  col-sm-4 error-parent-no-tooltip input-group">
                    <font-awesome-icon class="form-group-booking-icon" :icon="['far', 'clock']"/>
                    <select class="form-control form-group-booking-input-danger select-disabled">
                      <option>-- Select Time --</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group row form-group-shared form-group-shared-children">
              <div class="form-group-booking input-group-icn res-widget-col  col-sm-4">
                <div class="input-group form-group-children">
                  <font-awesome-icon class="form-group-booking-icon" icon="child-reaching"/>
                  <select name="" class="form-control form-group-booking-input">
                    <option>-- Children --</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div class="help-block resform-agenote">12 years and under</div>
              </div>
              <div class="form-group-booking input-group-icn res-widget-col  col-sm-4 ">
                <div class="input-group form-group-children">
                  <font-awesome-icon class="form-group-booking-icon" icon="baby"/>
                  <select name="" class="form-control form-group-booking-input">
                    <option>-- Baby --</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div class="help-block resform-agenote">5 years and under</div>
              </div>
            </div>
            <div class="form-group form-group-shared form-group-shared-children">
              <div class="form-group-table col-xs-12 col-xs-only input-group-icn form-group-booking">
                <div class="top-icon">
                  <font-awesome-icon class="form-group-booking-icon" icon="couch"/>
                </div>
                <div class="btn-group d-lg-flex">
                  <label class="form-group-table-label-active" for=""><input class="radio_buttons optional" value="1"
                                                                             type="radio">Any</label>
                  <label class="form-group-table-label" for=""><input class="radio_buttons optional" value="2"
                                                                      type="radio">Table</label>
                  <label class="form-group-table-label" for=""><input class="radio_buttons optional" value="3"
                                                                      type="radio">Counter</label>
                  <label class="form-group-table-label" for=""><input class="radio_buttons optional" value="4"
                                                                      type="radio">Outside</label>
                  <label class="form-group-table-label" for=""><input class="radio_buttons optional" value="5"
                                                                      type="radio">Semi-private</label>
                  <label class="form-group-table-label" for=""><input class="radio_buttons optional" value="6"
                                                                      type="radio">Tatami</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <availability v-if="isOpenCalendar" :isOpenCalendar="isOpenCalendar"  :calendar="calendar" v-on:showCalendar="showCalendar"/>
      <div class="content-order col-lg-10 col-lg-offset-1 showheading" :style="{display: showHeadingCalendar ? 'block' : ''}">
        <div class="panel-heading" >
          <a class="panel-title" href="">Availability</a>
          <div class="pull-right" v-on:click="showCalendar">
            <a>
              <font-awesome-icon class="fa-2x" :icon="changeIcon ? 'plus' : 'minus' "/>
            </a>
          </div>
        </div>
      </div>
      <div class="content2">
        <div class="row">
          <div class="reserveform-menu-items col-lg-10 col-lg-offset-1">
            <div class="panel panel-invisible">
              <div class="heading-menu-item"></div>
              <div class="menu-items-content d-flex">
                <div class="col-sm-2 col-xs-5 no-pad-right pull-left group1">
                  <img class="menu-item-image img-responsive"
                       src="https://cdn3.tablecheck.com/menu_items/5f87d47849dc22000164c198/images/sm/carpacchio2_2_1_.jpg?1602737273"
                       alt="">
                </div>
                <div class="col-sm-8 col-xs-12 group2">
                  <div class="menu-item-heading order-1">Prefix Lunch Course</div>
                  <div class="menu-item-desc">
                    Please enjoy the original course with your favorite dishes.<br>
                    Today's soup is already included in this course menu, thereafter you can choose one item each from
                    appetizer, main dish and dessert.
                  </div>
                  <div class="menu-item-content">
                    <div class="menu-item-content-desc">
                      ■ Today\'s soup
                      <br><br>
                      ■ Appetizers (Choose one dish from these items)
                      <br><br>
                      · TODAY’S FISH CARPACCIO soy bean-genovese, potato mousse<br>
                      · SEA URCHIN FLAN consomme gelatina (+ 700)<br>
                      · CAPRESE OF JAPANESE PEAR house-made mozzarella, sweet cherry tomatoes<br>
                      · MARINATED NORWEGIAN SALMON red & yellow bell pepper purée, zucchini, tapenade sauce<br>
                      <br>
                    </div>
                    <div class="menu-item-content-document" :class="!showreadMore ? '' : 'd-block' ">
                      · DUCK SALAD sliced breast of duck, eggplant, watercress, lime-anchovy dressing<br>
                      ■ Main dish (Choose one dish from these items)<br>
                      <br>
                      · FISH OF THE DAY<br>
                      · LOBSTER RISOTTO tomato sauce, parmigiano reggiano　(+600)<br>
                      · SAUTEED PORK BELLY poached egg, white wine braised shiitake mushrooms<br>
                      · LAMB & EGGPLANT “ MOUSSAKKA” minced lamb, eggplant, blue cheese gratine, potatoes, cumin<br>
                      · ROASTED CHICKEN “POLPETTA” braised mushrooms, piperade sauce<br>
                      <br>
                      ■ Dessert (Choose one dish from these items)<br>
                      <br>
                      · GINGER & LIME MOUSSE<br>
                      · FIG TARTE gorgonzola, port & black currant sauce<br>
                      · HOUSE-MADE YOGURT granola - almonds, coconuts, dried cranberries<br>
                      · TODAY’S ICE CREAM<br>
                      <br>
                      ■ Coffee or Tea<br>'"
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
                      <div class="menu-item-price-value">¥ 2,200</div>
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
    <div class="footer">
      <div class="container text-center">
        <table class="footer-links">
          <tbody>
          <tr>
            <td class="footer-list"><a class="footer-link" href="#">For Restaurants</a></td>
            <td class="footer-list"><a class="footer-link" href="#">Terms of Service</a></td>
            <td class="footer-list"><a class="footer-link" href="#">Privacy Policy</a></td>
            <td class="footer-list"><a class="footer-link" href="#">Payment Policy</a></td>
          </tr>
          </tbody>
        </table>
        <div class="copyright">
          <p>
            Copyright ©
            <a class="footer-link" href="">TableCheck Inc.</a>
            All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
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
import { Datetime } from 'vue-datetime'
import moment from 'moment';
export default {
  name: "Home",
  components: {availability,    datetime: Datetime},
  data() {
    return {
      isOpenNavMobile: false,
      isOpenCalendar: false,
      showreadMore:false,
      closereadMore:false,
      calendar : null,
      changeIcon:false,
      showHeadingCalendar:false,
      dateList:[],
    }
  },
  watch:{
    calendar(){
      const today = moment(this.calendar);
      const from_date = today.startOf('week');
      const to_date = today.endOf('week');
      var getDaysBetweenDates = function(startDate, endDate) {
        var now = startDate.clone(), dates = [];

        while (now.isSameOrBefore(endDate)) {
          dates.push(now.format('MM/DD/YYYY'));
          now.add(1, 'days');
        }
        return dates;
      };
      this.dateList = getDaysBetweenDates(from_date, to_date);
    },
  },
  methods: {
    closeNav() {
      this.isOpenNavMobile = !this.isOpenNavMobile
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
    readMore(){
      this.showreadMore = true
      this.closereadMore = true
    },
    calendarMethods(){
      const today = moment(this.calendar);
      console.log(today);
      const from_date = today.startOf('week');
      const to_date = today.endOf('week');
      var getDaysBetweenDates = function(startDate, endDate) {
        var now = startDate.clone(), dates = [];

        while (now.isSameOrBefore(endDate)) {
          dates.push(now.format('MM/DD/YYYY'));
          now.add(1, 'days');
        }
        return dates;
      };
      var dateList = getDaysBetweenDates(from_date, to_date);
      console.log(dateList);
      console.log({
        from_date: from_date.toString(),
        to_date: to_date.toString(),
      });
    },
  },
}
</script>

<style scoped>
.showheading{
  display: none;
}
/*.panel-title {*/
/*  font-size: 18px;*/
/*  font-weight: 700;*/
/*  color: var(--primary-color);*/
/*}*/
.pull-right{
  display: inline-block;
  float: right;
}
.pull-right a {
  color: var(--primary-color);
}
</style>
