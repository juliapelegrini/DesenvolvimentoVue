<template>
  <div>
    <ValidationObserver v-slot="{ handleSubmit }" ref="observer">
      <form
        action="/action_page.php"
        method="POST"
        @submit.prevent="handleSubmit(onSubmit)"
      >
        <div class="titform" v-html="bannerTexto.text2">
          
        </div>
        <ValidationProvider
          name="nome"
          rules="required"
          slim
          v-slot="{ errors, classes, required }"
        >
          <label for="1"></label><br />
          <input
            type="text"
            id="1"
            class="form-control col-xl-10"
            placeholder="Nome"
            v-model="nome"
            :class="classes"
          />
          <small v-show="errors[0]">{{ errors[0] }}</small>
        </ValidationProvider>

        <ValidationProvider
          name="telefone"
          :rules="{
            required: true,
            regex: /^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$/
          }"
          slim
          v-slot="{ errors, classes, required }"
        >
          <label for="2"></label><br />
          <the-mask
            type="tel"
            id="2"
            class="form-control col-xl-10"
            placeholder="Telefone com DDD"
            inputmode="numeric"
            :mask="['(##) ####-####', '(##) #####-####']"
            :masked="true"
            v-model="telefone"
            :class="classes"
          />
          <small v-show="errors[0]">{{ errors[0] }}</small>
        </ValidationProvider>

        <ValidationProvider
          name="email"
          rules="required"
          slim
          v-slot="{ errors, classes, required }"
        >
          <label for="3"></label><br />
          <input
            type="email"
            id="3"
            class="form-control col-xl-10"
            placeholder="E-mail"
            v-model="email"
            :class="classes"
          />
          <small v-show="errors[0]">{{ errors[0] }}</small>
        </ValidationProvider>

        <ValidationProvider
          name="empresa"
          rules="required"
          slim
          v-slot="{ errors, classes, required }"
        >
          <label for="4"></label><br />
          <input
            type="text"
            id="4"
            class="form-control col-xl-10"
            placeholder="Nome de sua empresa"
            v-model="empresa"
            :class="classes"
          />
         <small v-show="errors[0]">{{ errors[0] }}</small>
        </ValidationProvider>
        <br />
        <!--<recaptcha @error="recaptcha.error()" />-->
        <FormMessage :msg="msg_form" :type="msg_form_type"></FormMessage>
        <input type="submit" class="botao2" :value="bannerTexto.name5" /> 
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { TheMask } from "vue-the-mask";
import FormMessage from "~/components/menu/FormMessage.vue";
import form from "~/mixins/form";
export default {
  props:["bannerTexto"],
  data: function() {
    return {
      banner: [],
      errors: "",
      nome: "",
      telefone: "",
      email: "",
      empresa: "",
      msg_form: ""
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver,
    TheMask,
    FormMessage
  },
  mixins: [form],
  methods: {
    reset() {
      (this.nome = ""),
        (this.telefone = ""),
        (this.email = ""),
        (this.empresa = "");
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    },
    async onSubmit() {
      this.msg_form = "";
      console.log("enviando");
      const params = new URLSearchParams();
      params.append("nome", this.nome);
      params.append("telefone", this.telefone);
      params.append("email", this.email);
      params.append("empresa", this.empresa);
      params.append("form-sistema", "6000");
      params.append("enviar", "sim");
      params.append(
        "g-recaptcha-response",
        await this.$recaptcha.getResponse()
      );
      this.sending = true;
      this.$axios
        .$post("?p=form_ajax", params)
        .then(response => {
          if (response.enviado === "sim") {
            this.msg_form = "Mensagem enviada";
            this.msg_form_type = "sucess";
            this.reset();
          } else {
            this.msg_form = "Não foi possível enviar " + response.msg;
            this.msg_form_type = "error";
          }
        })
        .catch(e => {
          this.msg_form = "Não foi possível enviar!";
          this.msg_form_type = "error";
        });
      await this.$recaptcha.reset();
    }
  }
};
</script>

<style>
.titform {
  font-size: 25px;
  text-align: center;
  padding-top: 35px;
  font-family: "Roboto-Regular";
}

.form-control {
  color: #c8c8c8;
  font-size: 14px;
  font-family: "Roboto-Italic";
  padding: 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.botao2 {
  background-color: #a6ce39;
  box-shadow: #fffffd;
  color: #ffffff;
  padding: 10px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 5px;
  font-family: "Roboto-Bold";
  border-width: 0px;
  margin-left: 35px;
}
</style>
