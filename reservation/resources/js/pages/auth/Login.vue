<template>
  <b-container>
    <b-row class="justify-content-md-center mt-5">
      <b-col col md="5">
        <b-card header="Đăng nhập" header-bg-variant="primary" header-text-variant="white">
          <b-card-text>
            <b-form @submit.prevent="submit">
              <b-form-group label="Email" name="email" :validator="$v.form.email">
                <b-form-input
                  v-model="form.email"
                  @input="$v.form.email.$touch()"
                />
              </b-form-group>
              <b-form-group label="Password" name="password" :validator="$v.form.password">
                <b-form-input
                  v-model="form.password"
                  type="password"
                  @input="$v.form.password.$touch()"
                />
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
import {required, email, minLength} from 'vuelidate/lib/validators'
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
    submit() {
      let {form, $v} = this;
      $v.form.$touch();
      if ($v.form.$pending || $v.form.$error) {
        form.password = '';
        return
      }alert("Form submitted");
    }
  },
  computed: {},
  validations() {
    return {
      form:
        {
          email: {
            required,
            email
          },
          password: {
            required,
            minLength: minLength(5)
          }
        }
    }
  },

}
</script>
<style scoped>
</style>
