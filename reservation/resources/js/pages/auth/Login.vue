<template>
  <b-container>
    <b-row class="justify-content-md-center mt-5">
      <b-col col md="5">
        <b-card header="Đăng nhập" header-bg-variant="primary" header-text-variant="white">
          <b-card-text>
            <b-form @submit.prevent="onSubmit">
              <b-form-group description="Enter your email" label="Email">
                <b-form-input 
                  v-model.trim="$v.form.email.$model"
                  :class="{
                    'is-invalid': $v.form.email.$error, 
                    'is-valid': !$v.form.email.$invalid 
                  }">
                </b-form-input>
                <div class="valid-feedback">
                  {{ message.EMAIL_IS_VALID }}
                </div>
                <div class="invalid-feedback">
                  <span v-if="!$v.form.email.required" >{{ message.EMAIL_IS_REQUIRED }}</span>
                  <span v-if="!$v.form.email.minLength" >{{ message.haveAtLeast("Email", $v.form.email.$params.minLength.min) }}.</span>
                  <span v-if="$v.form.email.minLength && !$v.form.email.email">{{ message.INCORRECT_EMAIL_FORMAT }}</span>
                </div>
              </b-form-group>
              <b-form-group description="Enter your password" label="Password">
                <b-form-input 
                  v-model.trim="$v.form.password.$model" type="password"
                  :class="{
                    'is-invalid': $v.form.password.$error, 
                    'is-valid': !$v.form.password.$invalid 
                  }">
                </b-form-input>
                <div class="valid-feedback">
                  {{ message.PASSWORD_IS_VALID}}
                </div>
                <div class="invalid-feedback">
                  <span v-if="!$v.form.password.required" >{{ message.PASSWORD_IS_REQUIRED }}</span>
                  <span v-if="!$v.form.password.minLength" >{{ message.haveAtLeast("Password", $v.form.password.$params.minLength.min) }}.</span>
                </div>
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
import { required, minLength, email } from 'vuelidate/lib/validators';
import { haveAtLeast } from '@/helpers/functions';
import { EMAIL_IS_VALID, PASSWORD_IS_VALID, EMAIL_IS_REQUIRED, PASSWORD_IS_REQUIRED, INCORRECT_EMAIL_FORMAT } 
from '@/helpers/message';
export default {
  name: 'login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      message: {
        EMAIL_IS_VALID,
        PASSWORD_IS_VALID,
        EMAIL_IS_REQUIRED,
        PASSWORD_IS_REQUIRED,
        INCORRECT_EMAIL_FORMAT,
        haveAtLeast,
      }
    }
  },
  validations: {
    form: {
      email: {
        required,
        email,
        minLength: minLength(5)
      },
      password: {
        required,
        minLength: minLength(8)
      }
    }
  },
  methods: {
    onSubmit() {
      console.log("Form: ",this.form);
    }
  }
}
</script>
