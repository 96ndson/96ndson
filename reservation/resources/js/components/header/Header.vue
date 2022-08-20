<template>
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
          <li class="nav-item" @click="profile">
            <a class="nav-link">
              <font-awesome-icon class="nav-icon" icon="utensils"/>
              My Reservations</a>
          </li>
          <li class="nav-item" @click="logout" v-if="isLogin">
            <a class="nav-link">
              <font-awesome-icon class="nav-icon" icon="fa-solid fa-right-to-bracket" />
              Logout</a>
          </li>
          <li class="nav-item" @click="login" v-else>
            <a class="nav-link">
              <font-awesome-icon class="nav-icon" icon="fa-solid fa-right-to-bracket" />
              Login</a>
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
            <li class="dropdown-item-mobile">Italiano</li>
          </ul>
        </li>
        <li><a class="nav-link-mobile" href="javascript:void(0)"  @click="profile" id="myBtn">
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
</template>

<script>
  import {UserService} from '@/services';

  export default {
    name: "Header",
    data() {
      return {
        isLogin: false
      }
    },
    created() {
      this.isLogin = this.$store.getters.getToken || false
    },
    methods: {
      profile() {
        console.log(1)
        this.$router.push({ name: 'profile'}, () => {})
      },
      login() {
        this.$router.push({ name: 'login'}, () => {})
      },
      logout() {
        // clear token = call api
        UserService.logout().then(response => {
          // 1.thông báo login thành công (toast)

          // 2.redirect trang login
          this.$router.push({ name: 'login'}, () => {})

          // 3. clear (vuex + localStorage)
          this.$store.dispatch('actionSetToken', '')
          this.$store.dispatch('actionSetUser', null)
        }).catch(errors => {

        })
      }
    }
  }
</script>

<style scoped>

</style>