import Vue from "vue";
import Vuelidate from "vuelidate";
import VuelidateErrorExtractor, {templates} from "vuelidate-error-extractor";


const messages = {
  required: "{attribute} is required!",
  notGmail: "{attribute} must not be gmail",
  minLength: "{attribute} phải nhiều hơn 5 kí tự",
  email: "{attribute} is not a valid Email address.",
  isEmailAvailable:
    "{attribute} is not available. Must be at least 10 characters long."
}

Vue.use(Vuelidate);
Vue.config.productionTip = false;
Vue.use(VuelidateErrorExtractor, {
  i18n: false,
  messages,
});
// Vue.component('formWrapper', templates.FormWrapper);
Vue.component('b-form-group', templates.singleErrorExtractor.foundation6);
