<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
            <form onsubmit="return false">
              <div class="form-floating mb-3">
                <label for="floatingInput">Email address</label>
                <input type="email" class="form-control" id="floatingInput"
                       placeholder="name@example.com"
                       v-model="form.email"
                >
              </div>
              <div class="form-floating mb-3">
                <label for="floatingPassword">Password</label>
                <input type="password" class="form-control" id="floatingPassword"
                       placeholder="Password"
                       v-model="form.password"
                >
              </div>

              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck">
                <label class="form-check-label" for="rememberPasswordCheck">
                  Remember password
                </label>
              </div>
              <div class="d-grid">
                <button v-on:click="handleClick()"
                        class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                  in
                </button>
              </div>
              <hr class="my-4">
              <div class="d-grid mb-2">
                <button class="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                  <font-awesome-icon :icon="['fab','google']"/>
                  Sign in with Google
                </button>
              </div>
              <div class="d-grid">
                <button class="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
                  <font-awesome-icon :icon="['fab','facebook']"/>
                  Sign in with Facebook
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleClick() {
      console.log(this.form);
    }
  },
}
</script>

<style scoped>
.container {
  background-image: url("https://chupanhmonan.com/wp-content/uploads/2019/03/ma%CC%82%CC%83u-thie%CC%82%CC%81t-ke%CC%82%CC%81-nha%CC%80-ha%CC%80ng-%C4%91e%CC%A3p.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  width: 100%;
}

.btn-google {
  color: white !important;
  background-color: #ea4335;
}

.btn-facebook {
  color: white !important;
  background-color: #3b5998;
}

</style>
