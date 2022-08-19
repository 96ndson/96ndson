<template>
  <div class="container">
    <div class="header">
      <div class="header_img">
        <img
          src="https://cdn2.tablecheck.com/shops/557ecc9ba0749e2a48003703/tc_header_images/md/DAZZLE_WD%E3%83%AD%E3%82%B4.png?1473998345"
          alt="">
      </div>
      <div class="header_menu">
        <ul>
          <li>
            <font-awesome-icon icon="question" class="icon" />
            Help
          </li>
          <li>
            <font-awesome-icon icon="fa-solid fa-earth-asia" class="icon" />
            English
            <font-awesome-icon icon="fa-solid fa-caret-down" />
            <ul class="sub-menu">
              <li>English</li>
              <li>English</li>
              <li>English</li>
              <li>English</li>
              <li>English</li>
              <li>English</li>
              <li>English</li>
            </ul>
          </li>

          <li>
            <font-awesome-icon icon="fa-solid fa-utensils" class="icon" />
            My Reservations
          </li>
        </ul>
      </div>

      
      <label for="nav-mobile-input" class="icon_bars">
        <font-awesome-icon icon="fa-solid fa-bars" class="bars" />
      </label>
      <input type="checkbox" hidden name="" class="nav__input" id="nav-mobile-input">

      <label for="nav-mobile-input" class="nav_overlay">

      </label>
      <div class="header_menu-mobile">
        <label for="nav-mobile-input" class="nav__mobile-close">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.<path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
        </label>

        <ul>
          <li>
            <font-awesome-icon icon="fa-solid fa-earth-asia" class="icon" />
            English
            <font-awesome-icon icon="fa-solid fa-caret-down" />
            <ul class="sub-menu-mobile">
              <li>English</li>
              <li>English</li>
              <li>English</li>
              <li>English</li>
              <li>English</li>
              <li>English</li>
              <li>English</li>
            </ul>
          </li>
          <li>
            <font-awesome-icon icon="fa-solid fa-utensils" class="icon" />
            My Reservations
          </li>
          <li>
            <font-awesome-icon icon="question" class="icon" />
            Help
          </li>
          <li>
            For Restaurants
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Comp-Header',

  data() {
    return {

    };
  },
  methods: {
    // showMenu(){
    //   this.isActive == true;
    // }
  }
};
</script>

<style>
</style>
