<template>
    <b-row class="wp-content">
      <!-- <b-col md="4"></b-col> -->
      <b-col md="4" sm="12" class="wp-form">
        <b-form class="form-container" @submit.prevent="onSubmit">
          <h1 class="text-center">Đăng nhập</h1>
          <b-form-group label="Email address:">
            <b-form-input
            v-model="form.email"
            type="email" placeholder="Enter email">
            </b-form-input>
          </b-form-group>

          <b-form-group label="Password:">
            <b-form-input 
            v-model="form.password"
            type="password" placeholder="Enter password">
            </b-form-input>
          </b-form-group>

          <b-button type="submit" variant="success" class="w-100">Đăng nhập</b-button>
        </b-form>
      </b-col>
    </b-row>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
    }
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    }
  }
};
</script>

<style scope>
body{
  background: url('@/assets/images/nha-hang-dep-view-cao.jpg');
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.form-container{
  font-weight: 700;
  border: 1px solid #fff;
  padding: 50px 60px;
  margin-top: 20vh;
  -webkit-box-shadow: -1px 4px 26px 11px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 4px 26px 11px rgba(0,0,0,0.75);
  box-shadow: -1px 4px 26px 11px rgba(0,0,0,0.75);
}
.wp-form {
  margin: 0px auto;
}
</style>
