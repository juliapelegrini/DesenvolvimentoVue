<template>
  <div>
    <div class="section1" id="sectionvenda" >
      <div class="container">
        <div class="row col-xl-12">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <p class="texto1_s1">{{ banner.name1 }}</p>

            <p class="texto2_s1">{{ banner.name2 }}</p>
            <div v-html="banner.text1" class="texto3_s1">
              {{ banner.text1 }}
            </div>
            <div class="botao1" data-aos="fade-up">{{ banner.name4 }}</div>
          </div>
          <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
          <!--form-->
          <div class="formulario col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <formulario :bannerTexto="banner" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formulario from "~/components/menu/formulario.vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  mounted() {
    AOS.init();
  },
  data() {
    return {
      banner: [],
      name1: 'Home Page WD Shop',
    };
  },
  components: {
    formulario
  },
  async fetch() {
    this.banner = await this.$axios
      .$get("https://wdshop-j.dev.wdhouse.com.br/wdframe/api/v1/cms?page_id=7")
      .then(res => {
        return res.data;
      });
  }
};
</script>

<style>
.section1 {
  margin-top: 90px;
  background-image: linear-gradient(to right, #acbc36, #2aa584);
  padding-bottom: 6%;
  width: 100%;
}

.texto1_s1 {
  margin-top: 100px;
  color: #fefefe;
  font-size: 18px;
  text-transform: uppercase;
  font-family: "Roboto-Medium";
  margin-left: 10px;
}

.texto2_s1 {
  color: #fefefe;
  font-size: 50px;
  text-transform: uppercase;
  font-family: "Roboto-Black";
  margin-top: -15px;
  margin-left: 10px;
}

.texto3_s1 {
  color: #fefefe;
  font-size: 16px;
  font-family: "Raleway-Regular";
  margin-left: 10px;
}

.botao1 {
  color: #ffffff;
  font-size: 14px;
  background-color: #006904;
  margin-top: 5%;
  padding: 10px;
  padding-left: 7%;
  padding-right: 7%;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 20px;
  box-shadow: none none;
  font-family: "OpenSans";
  border-width: 0px;
  width: 220px;
}

.formulario {
  height: 490px;
  margin-top: 50px;
  margin-right: 15px;
  margin-left: 15px;
  background-color: #f5f5f5;
}

@media screen and (max-width: 375px) {
  .texto2_s1 {
    font-size: 45px;
  }
}
</style>
