<template>
  <div class="container">
    <div class="body">
      <div class="body-heading">
        <h3>Book at HUGE Head Office</h3>
      </div>
      <div class="body-note">
        <label for="">Message from Venue</label>
        <br>
        ※お1人様につき500円のコペルト(席料)を頂戴致します(ランチは除く)。下記のコース料金はすべてコペルトを含む金額となっております。
        <br>
        ※表記のメニュー金額はすべて税抜きです。お会計時には消費税が表記の金額に別途加算されます。
        <br>
        ※ご予約のお時間から20分以上遅れられた場合は、自動的にキャンセルとさせて頂く場合がございます。
        <br>
        ※万が一、ご予約のキャンセルもしくは人数の変更をされる場合は、ご予約日の前日までにお願いいたします。ご連絡を頂けない場合はキャンセル料を頂戴いたします。
        <br>
        <br>
        ◆終日　全館禁煙
        <br>
        ◆お子様の同伴：ランチ・ディナー共に小学生以上とさせて頂いております。
        <br>
        ◆ドレスコード：スポーツウェア・ランニングシャツ・ビーチサンダル・スポーツキャップ着用でのご来店をご遠慮頂いております。
        <br>
        <br>
        <a href="" class="markup-a">詳細はこちら</a>
      </div>
      <div class="checkbox">
        <input type="checkbox">
        <p class="checkbox-span">I confirm I've read the Message from Venue above</p>
      </div>
      <div class="body__booking">
        <div class="body__booking-1">
          <div class="body__booking-1-people padding-width">
            <font-awesome-icon icon="fa-solid fa-user" class="body__booking-1-icon" />
            <select name="" id="" @change="addTable()"
              class="body__booking-1-select error-parent-no-tooltip border-bottom boder-none">
              <option value="">--Adults--</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
            </select>
          </div>
          <div class="body__booking-1-calender padding-width">
            <font-awesome-icon icon="fa-solid fa-calendar-days" class="body__booking-1-icon" />
            <input type="date" v-model="getday"
              class="body__booking-1-select error-parent-no-tooltip border-bottom boder-none">
          </div>
          <div class="body__booking-1-time padding-width">
            <font-awesome-icon icon="fa-solid fa-clock" class="body__booking-1-icon" />
            <select name="" id="" class="body__booking-1-select error-parent-no-tooltip border-bottom boder-none">
              <option value="">--SelectTimer--</option>
              <option value="">10:00AM</option>
              <option value="">11:00AM</option>
              <option value="">12:00AM</option>
              <option value="">13:00PM</option>
            </select>
          </div>
        </div>
        <div class="body__booking-2">
          <div class="body__booking-2-children padding-width">
            <font-awesome-icon icon="fa-solid fa-child-reaching" class="body__booking-1-icon " />
            <div class="body__booking-2-children-item">
              <select name="" id="" class="body__booking-1-select boder-none border-bottom1">
                <option value="">--Children--</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
              </select>
              <div class=""></div>
            </div>

          </div>
          <div class="body__booking-2-baby padding-width">
            <font-awesome-icon icon="fa-solid fa-baby" class="body__booking-1-icon boder-none" />
            <select name="" id="" class="body__booking-1-select boder-none border-bottom1">
              <option value="">--Baby--</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
            </select>
          </div>
        </div>
        <div class="body__seattype">
          <font-awesome-icon icon="fa-solid fa-chair" class="body__booking-1-icon1" />
          <div class="body__seattype--group">
            <label class="body__seattype-radio margin-bottom ">Any</label>
            <label class="body__seattype-radio margin-bottom">Table</label>
            <label class="body__seattype-radio margin-bottom">Counter</label>
            <label class="body__seattype-radio margin-bottom">Outside</label>
            <label class="body__seattype-radio margin-bottom">Semi-Private</label>
            <label class="body__seattype-radio margin-bottom">Tatami</label>
          </div>
        </div>
      </div>
      <div class="body__table">
        <comp-table v-if="selectedComponent" :arr="arr" :timeOrder="timeOrder" :timeWorkShop="timeWorkShop"
          :getday="getday" :monthLabels="monthLabels" v-on:next="next" v-on:prev="prev" :classDis="classDis" :timett="timett" />
      </div>
      <div class="body__menu">
        <div class="body__menu-img ">
          <img
            src="https://cdn1.tablecheck.com/menu_items/5f87d47849dc22000164c198/images/sm/carpacchio2_2_1_.jpg?1602737273"
            alt="Prefix Lunch Course">
        </div>
        <div class="body__menu-content ">
          <div class="body__menu-content-heading block">Prefix Lunch Course</div>
          <div class="body__menu-content-tagline block">Please enjoy the original course with your favorite
            dishes.
            Today's soup is already included in this course menu, thereafter you can choose one item each
            from appetizer, main dish and dessert.
          </div>
          <div class="body__menu-content-des block">
            ■ Today's soup
            <br>
            <br>
            ■ Appetizers (Choose one dish from these items)
            <br>
            <br>
            · TODAY’S FISH CARPACCIO soy bean-genovese, potato mousse
            <br>
            · SEA URCHIN FLAN consomme gelatina (+ 700)
            <br>
            · CAPRESE OF JAPANESE PEAR house-made mozzarella, sweet cherry tomatoes
            <br>
            · MARINATED NORWEGIAN SALMON red & yellow bell pepper purée, zucchini, tapenade sauce
            <br>
            · DUCK SALAD sliced breast of duck, eggplant, watercress, lime-anchovy dressing
            <br>
            <br>
            <span id="dots">...</span><span id="more">
              <br>
              ■ Main dish (Choose one dish from these items)
              <br>
              · FISH OF THE DAY
              <br>
              · LOBSTER RISOTTO tomato sauce, parmigiano reggiano　(+600)
              <br>
              · SAUTEED PORK BELLY poached egg, white wine braised shiitake mushrooms
              <br>
              · LAMB & EGGPLANT “ MOUSSAKKA” minced lamb, eggplant, blue cheese gratine, potatoes, cumin
              <br>
              · ROASTED CHICKEN “POLPETTA” braised mushrooms, piperade sauce
              <br>
              ■ Dessert (Choose one dish from these items)
              <br>
              · GINGER & LIME MOUSSE
              <br>
              · FIG TARTE gorgonzola, port & black currant sauce
              <br>
              · HOUSE-MADE YOGURT granola - almonds, coconuts, dried cranberries
              <br>
              · TODAY’S ICE CREAM
              <br>
              <br>
              ■ Coffee or Tea
            </span>
            <button @click="myFunction()" id="myBtn" style="display: block;">Read more</button>
          </div>
          <div class="body__menu-content-print block">
            <div class="body__menu-content-print-label">Fine Print</div>
            ※ The contents of the menu may change without prior notice depending on the market. Please
            acknowledge it beforehand.
            <br>
            ※ If you have allergy, please let us know in advance.
            <br>
            ※ Last-in time is 1:50 p.m. Close time is 3:00 p.m.
            <br>
            Meals LunchOrder Limit 2 ~ 6
          </div>

        </div>
        <div class="body__menu-price">
          <span>¥ 2,200 </span><span>(Tax Excl.)</span>
          <button class="btn-block" style="display: block;">Select</button>
        </div>
      </div>
      <div class="body_menu2">
        <div class="body_menu2-name">
          Prefix Lunch Course
        </div>
        <div class="body_menu2-tagline">
          Please enjoy the original course with your favorite
          dishes.
          Today's soup is already included in this course menu, thereafter you can choose one item each
          from appetizer, main dish and dessert.
        </div>
        <div class="body_menu2-img-price">
          <img
            src="https://cdn0.tablecheck.com/menu_items/5f87d47849dc22000164c198/images/sm/carpacchio2_2_1_.jpg?1602737273"
            alt="">
          <div class="body_menu2-price">
            <span>¥ 2,200</span><span>(Tax Excl.)</span>
            <button class="btn-block" style="display: block;">Select</button>
          </div>
        </div>
        <div class="body_menu2-content">
          ■ Today's soup
          <br>
          <br>
          ■ Appetizers (Choose one dish from these items)
          <br>
          <br>
          · TODAY’S FISH CARPACCIO soy bean-genovese, potato mousse
          <br>
          · SEA URCHIN FLAN consomme gelatina (+ 700)
          <br>
          · CAPRESE OF JAPANESE PEAR house-made mozzarella, sweet cherry tomatoes
          <br>
          · MARINATED NORWEGIAN SALMON red & yellow bell pepper purée, zucchini, tapenade sauce
          <br>
          · DUCK SALAD sliced breast of duck, eggplant, watercress, lime-anchovy dressing
          <br>
          <br>
          ■ Main dish (Choose one dish from these items)
          <br>
          · FISH OF THE DAY
          <br>
          · LOBSTER RISOTTO tomato sauce, parmigiano reggiano　(+600)
          <br>
          · SAUTEED PORK BELLY poached egg, white wine braised shiitake mushrooms
          <br>
          · LAMB & EGGPLANT “ MOUSSAKKA” minced lamb, eggplant, blue cheese gratine, potatoes, cumin
          <br>
          · ROASTED CHICKEN “POLPETTA” braised mushrooms, piperade sauce
          <br>
          ■ Dessert (Choose one dish from these items)
          <br>
          · GINGER & LIME MOUSSE
          <br>
          · FIG TARTE gorgonzola, port & black currant sauce
          <br>
          · HOUSE-MADE YOGURT granola - almonds, coconuts, dried cranberries
          <br>
          · TODAY’S ICE CREAM
          <br>
          <br>
          ■ Coffee or Tea
        </div>
      </div>
      <div class="body__request">
        <div class="body__request--title">
          <h3>Requests</h3>
        </div>
        <div class="body__request--content">
          <label for="">Requests</label>
          <div class="body__request--content">
            <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
          </div>
        </div>
      </div>
    </div>
    <back-to-top bottom="50px" right="50px">
      <button type="button" class="btn btn-info btn-to-top">
        <font-awesome-icon icon="fa-solid fa-chevron-up" />
      </button>
    </back-to-top>
  </div>
</template>
<script>
import BackToTop from 'vue-backtotop'
import CompTable from '@/components/reservation/CompTable.vue'
import moment from 'moment';
import { workTime, timeShop } from '@/helpers/constant.js'

export default {
  name: 'Comp-Container',
  components: {
    BackToTop,
    'comp-table': CompTable,
  },
  data() {
    return {
      isShow: false,
      getday: '2022/08/20',
      arr: [],
      selectedComponent: false,
      timeOrder: [],
      time: workTime,
      timeShop: timeShop,
      monthLabels: [],
      timeWorkShop: [],
      classDis: ' ',
    };
  },
  props: {
    timett: {
      type: Array,
      default: []
    }
  },
  watch: {
    getday() {
      this.$emit('getDay',this.getday);
      let days = [];
      let today = moment(this.getday);

      let start = today.startOf('week').format('YYYY-MM-DD');
      let startDay = today.startOf('week').format('d');
      let end = today.endOf('week').format('YYYY-MM-DD');
      let endDay = today.endOf('week').format('d');
      let tempDate = start;
      let result = [
        {
          monthLabel: moment(this.getday).startOf('week').format('MMM'),
          numberDay: 1
        }
      ]
      for (let i = 0; i <= endDay - startDay; i++) {
        tempDate = moment(tempDate).add(1, 'd').format('YYYY-MM-DD');
        let label = moment(tempDate).format('dd');
        let day = moment(tempDate).format('DD');
        let month = moment(tempDate).format('MMM');
        days = [...days, ...[{
          label: label,
          date: tempDate,
          day: day,
          month: month
        }]]
        if (i > 0) {
          if (moment(tempDate).format('DD') == '01') {
            result.push({
              monthLabel: moment(tempDate).format('MMM'),
              numberDay: 1
            })
          } else {
            result[result.length - 1].numberDay += 1;
          }
        }
      }
      this.monthLabels = [];
      this.monthLabels = [...result];
      this.arr = days;
      //
      let testTimeValue = [];
      for (let j = 0; j < this.time.length; j++) {
        let th = [];
        tempDate = start;
        for (let k = 0; tempDate <= end; k++) {
          tempDate = moment(tempDate).add(1, 'd').format('YYYY-MM-DD');
          th.push({
            value: tempDate + ' ' + this.time[j],
            date: tempDate
          })
        }
        th.unshift({ value: this.time[j] });
        th.push({ value: this.time[j] });
        // console.log(th);
        testTimeValue.push(th)
      }
      console.log(testTimeValue);
      this.timeOrder = testTimeValue;
    }
  },
  methods: {
    addTable() {
      this.isShow = true;
      this.selectedComponent = true;
    },
    myFunction() {
      let dots = document.getElementById("dots");
      let moreText = document.getElementById("more");
      let btnText = document.getElementById("myBtn");

      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
      }
    },
    next() {
      this.getday = moment(this.getday).add(7, 'd').format('YYYY-MM-DD');
    },
    prev() {
      this.getday = moment(this.getday).subtract(7, 'd').format('YYYY-MM-DD');
    }
  }
};
</script>

<style scoped>
</style>
