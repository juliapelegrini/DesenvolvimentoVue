import { extend, localize, configure } from "vee-validate";
import { required, required_if, email, min, regex, confirmed } from "vee-validate/dist/rules";
import pt_BR from 'vee-validate/dist/locale/pt_BR.json';

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})

// Install required rule.
extend("required", required);

// Install required rule.
extend("required_if", required_if);

// Install email rule.
extend("email", email);

// Install min rule.
extend("min", min);

// Install regex rule.
extend("regex", regex);

extend("confirmed", confirmed);

localize('pt_BR', pt_BR);