<template>
  <b-container>
    <b-row class="justify-content-md-center mt-5">
      <b-col col md="5">
        <b-card header="Đăng nhập" header-bg-variant="primary" header-text-variant="white">
          <b-card-text>
            <b-form @submit.prevent="onSubmit">
              <b-form-group description="Enter your email" label="Email">
                <b-form-input v-model="form.email" type="email" required></b-form-input>
              </b-form-group>
              <b-form-group description="Enter your password" label="Password">
                <b-form-input v-model="form.password" type="password" required></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-button type="submit" variant="outline-primary">Login</b-button>
              </b-form-group>
            </b-form>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
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
  },

}
</script>
