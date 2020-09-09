export default {
  data: () => ({
    sending: false,
    msg_form: '',
    msg_form_type: ''
  }),
  methods: {
    recaptcha_error(e) {
      this.msg_form = 'Erro ao gerar recaptcha'
      console.error('recaptcha: ', e)
    }
  },
  watch: {
    sending(newvalue) {
      if (newvalue) {
        this.msg_form = ''
      }
    },
    msg_form(newvalue) {
      if (newvalue !== '') {
        this.sending = false
      }
    }
  }
}
