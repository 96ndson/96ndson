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
                  {{ message.IS_VALID("Email") }}
                </div>
                <div class="invalid-feedback">
                  <span v-if="!$v.form.email.required" >{{ message.IS_REQUIRED("Email") }}</span>
                  <span v-if="$v.form.email.minLength && !$v.form.email.email">{{ message.INCORRECT_FORM("Email") }}</span>
                  <span v-if="!$v.form.email.minLength" >{{ message.HAVE_AT_LEAST("Email", $v.form.email.$params.minLength.min) }}.</span>
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
                  {{ message.IS_VALID("Password") }}
                </div>
                <div class="invalid-feedback">
                  <span v-if="!$v.form.password.required" >{{ message.IS_REQUIRED("Password") }}</span>
                  <span v-if="$v.form.password.minLength && !$v.form.password.email">{{ message.INCORRECT_FORM("Password") }}</span>
                  <span v-if="!$v.form.password.minLength" >{{ message.HAVE_AT_LEAST("Password", $v.form.password.$params.minLength.min) }}.</span>
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
import { IS_VALID, IS_REQUIRED, INCORRECT_FORM, HAVE_AT_LEAST } 
from '../../constant/validate';
export default {
  name: 'login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      message: {
        IS_VALID,
        IS_REQUIRED,
        INCORRECT_FORM,
        HAVE_AT_LEAST,
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
  }
}
</script>
