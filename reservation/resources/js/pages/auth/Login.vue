<template>
  <b-container>
    <b-row class="justify-content-md-center mt-5">
      <b-col col md="5">
        <b-card header="Đăng nhập" header-bg-variant="primary" header-text-variant="white">
          <b-card-text>
            <b-form @submit.prevent="onSubmit">
              <b-form-group description="Enter your email" label="Email"
                :class="{ 'form-group--error': $v.form.email.$error }">
                <b-form-input v-model.trim="$v.form.email.$model"></b-form-input>
                <div class="error" v-if="!$v.form.email.required">Email is required</div>
                <div class="error" v-if="!$v.form.email.email">Email is invalid</div>
              </b-form-group>

              <b-form-group description="Enter your password" label="Password"
                :class="{ 'form-group--error': $v.form.password.$error }">
                <b-form-input v-model.trim="$v.form.password.$model" type="password" class="form-control">
                </b-form-input>
                <div class="error" v-if="!$v.form.password.required">Password is required</div>
                <div class="error" v-if="!$v.form.password.minLength">Password must be at least 6 characters</div>
              </b-form-group>
              <div class="form-group" :class="{ 'form-group--error': $v.form.$error }">
                <div class="error" v-if="$v.form.$error">Form is invalid.</div>
              </div>
              <tree-view :data="$v" :options="{ rootObjectKey: '$v', maxDepth: 2 }"></tree-view>
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
import { required, email, minLength } from "vuelidate/lib/validators";
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
  validations: {
    form: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
    }
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    }
  },

}
</script>
<style>
.error {
  color: #f57f6c;
  font-size: .75rem;
}
</style>
