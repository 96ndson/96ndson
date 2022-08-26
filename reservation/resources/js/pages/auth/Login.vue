<template>
  <section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
               class="img-fluid" alt="Sample image">
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form action="#" v-on:submit.prevent="handleSubmitLogin()">
            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p style="font-size: 1.8rem;font-weight: 500" class="lead fw-normal mb-0 me-3">Sign in with </p>
              <button type="button" class="btn btn-primary btn-floating mx-1">
                <font-awesome-icon icon="fa-brands fa-facebook"/>
              </button>

              <button type="button" class="btn btn-primary btn-floating mx-1">
                <font-awesome-icon icon="fa-brands fa-twitter"/>
              </button>

              <button type="button" class="btn btn-primary btn-floating mx-1">
                <font-awesome-icon icon="fa-brands fa-google"/>
              </button>
            </div>

            <div class="divider d-flex align-items-center my-4">
              <p class="text-center fw-bold mx-3 mb-0">Or</p>
            </div>
            <div class="alert alert-danger" v-if="errorValidate">
              <span>{{ errorValidate }}</span>
            </div>
            <!-- Email input -->
            <div class="form-outline mb-4">
              <label class="form-label" for="form3Example3">Email</label>
              <input style="padding: 20px 20px;font-size: 1.4rem" v-model="form.email" type="text" id="form3Example3"
                     class="form-control form-control-lg"
                     placeholder="Enter a valid email address"
                     :class="{'is-error' : (!$v.form.email.required && $v.$dirty)}"/>
              <div class="validate" v-if="$v.$dirty">
                <span class="pt-1" v-if="!$v.form.email.required"> Vui lòng nhập email </span>
              </div>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-3">
              <label class="form-label" for="form3Example4">Password</label>
              <input style="padding: 20px 20px;font-size: 1.4rem" v-model="form.password" type="password"
                     id="form3Example4" class="form-control form-control-lg"
                     placeholder="Enter password" :class="{'is-error' : (!$v.form.password.required && $v.$dirty)}"/>
              <div class="validate" v-if="$v.$dirty">
                <span class="pt-1" v-if="!$v.form.password.required"> Vui lòng nhập password </span>
              </div>
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <!-- Checkbox -->
              <div class="form-check mb-0">
                <input style="margin-top: 5px" class="form-check-input me-2" type="checkbox" value=""
                       id="form2Example3"
                       v-model="form.is_remember"
                />
                <label class="form-check-label" for="form2Example3">
                  Remember me
                </label>
              </div>
              <a href="#!" class="text-body">Forgot password?</a>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button type="submit" class="btn btn-primary btn-lg"
                      style="padding-left: 2.5rem; padding-right: 2.5rem;">Login
              </button>
              <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                                                                class="link-danger">Register</a></p>
            </div>

          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {UserService} from '@/services';
import EventBus from '@/plugins/eventBus'
import {required} from 'vuelidate/lib/validators';

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: '',
        password: '',
        is_remember: false
      },
      errorValidate: '',
    }
  },
  validations() {
    return {
      form:
        {
          email: {
            required,
          },
          password: {
            required,
          }
        }
    }
  },
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  methods: {
    async handleSubmitLogin() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        let data = {
          email: this.form.email,
          password: this.form.password,
        }
        await UserService.login(data).then(response => {
          this.$router.push({name: 'home'}, () => {
          })
          this.$toast.success('Đăng nhập thành công')
          this.$store.dispatch('actionSetToken', response.data.access_token)
          this.$store.dispatch('actionSetUser', response.data.user)

        }).catch(err => {
          this.$toast.error(err.data.message)
        })
      }
    },
  },

}
</script>
<style scoped>
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}

.h-custom {
  height: calc(100% - 73px);
}

@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}

.validate span {
  color: red;
  font-size: 1.4rem;
}

.is-error {
  border: 1px solid red !important;
}
</style>
