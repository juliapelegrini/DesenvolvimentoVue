<template>
  <div class="section2" id="func">
    <div class="container">
      <div class="cartao_s2 col-xl-12" data-aos="fade-down">
        <div class="row">
          <div class="cartao col-xl-12 col-12">
            <h5 class="titulo_s2">Algumas funcionalidades</h5>
            <div class="subir">
              <div class="row">
                <div
                  class="col-xl-6 col-lg-6 col-md-6 col-sm-6"
                  v-for="item in itens"
                  :key="item.id"
                >
                  <div class="row items">
                    <div
                      class="col-xl-1 col-lg-1 col-md-6 col-sm-0 col-0"
                    ></div>
                    <div class="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-3">
                      <img
                        :src="item.image1"
                        :title="item.name"
                        :alt="item.name"
                      />
                    </div>
                    <div class="tit_s2 col-xl">
                      <div v-html="item.name"></div>
                      <div class="subtit_s2" v-html="item.text1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  mounted() {
    AOS.init();
  },
  data() {
    return {
      itens: []
    };
  },
  async fetch() {
    this.itens = await this.$axios
      .$get(
        "https://wdshop-j.dev.wdhouse.com.br/wdframe/api/v1/cms/?category_code=5"
      )
      .then(res => {
        return res.data;
      });
  }
};
</script>

<style>
@media screen and (min-width: 600px) {
  .section2 {
    position: relative;
    height: auto;
    background: #f5f5f5 0% 0% no-repeat padding-box;
    opacity: 1;
    margin-bottom:40px;
  }
  .cartao_s2 {
   margin-top: -50px;
    background-color: white;
    height:577px;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.521);
    padding-top: 40px;
  }
}
.titulo_s2 {
  text-align: center;
  font-size: 38px;
  font-family: "Raleway-Light";
  color: #006837;
  padding-top: 60px;
  padding-bottom: 40px;
}

.img_s2 {
  padding-left: 0px;
}

.tit_s2 {
  color: #161616;
  font-family: "Raleway-Medium";
  font-size: 18px;
  margin-left: 10px;
}

.subtit_s2 {
  color: #727272;
  font-size: 14px;
  font-family: "OpenSans";
  margin-bottom: 50px;
  margin-right: 10px;
}
</style>
