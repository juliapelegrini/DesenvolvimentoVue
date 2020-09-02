<template>
  <div class="section6">
    <div class="tit_s6 col-xl-12">Confiam na WD Shop</div>
    <div class="container">
      <div class="row">
        <div class="subtit_s6 col-xl-12" v-html="confiam.text1"></div>
      </div>
    </div>
    <carrossel :depo="confiam.category1.list" />
  </div>
</template>

<script>
import carrossel from "~/components/menu/carrossel.vue";
export default {
  components: {
    carrossel
  },
  data() {
    return {
      confiam: []
    };
  },

  async fetch() {
    this.confiam = await this.$axios
      .$get(
        "https://wdshop-j.dev.wdhouse.com.br/wdframe/api/v1/cms/?page_id=12&categories_content=true"
      )
      .then(res => {
        console.log(res.data.category1.list);
        return res.data;
      });
  }
};
</script>

<style>
.section6 {
  background-color: #f5f5f5;
  width: 100%;
}
.tit_s6 {
  font-family: "Raleway-Bold";
  color: #006837;
  font-size: 40px;
  text-align: center;
}
.subtit_s6 {
  text-align: center;
  font-family: "OpenSans";
  font-size: 16px;
  opacity: 60%;
  z-index: 4;
}

.cards_s6 {
  background-color: #ffffff;
}
.cards_s6:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;

  -webkit-box-shadow: 0px 5px 5px 0px #a09f9f;
  -moz-box-shadow: 0px 5px 5px 0px #a09f9f;
  box-shadow: 0px 5px 5px 0px #a09f9f;
}
.text_s6 {
  color: #727272;
  font-size: 14px;
  font-family: "OpenSans";
  background-color: #ffffff;
  text-align: start;
  padding-top: 50px;
  padding-right: 40px;
  padding-left: 50px;
  margin-top: 20px;
  z-index: 3;
}

.text2_s6 {
  color: #101010;
  font-size: 18px;
  background-color: #ffffff;
  text-align: start;
  margin-top: -17px;
  padding-top: 10px;
  font-family: "Roboto-Regular";
  padding-left: 50px;
  z-index: 2;
}

.text3_s6 {
  color: #727272;
  font-size: smaller;
  text-align: start;
  margin-top: 0px;
  font-family: "OpenSans";
  font-size: 14px;
  padding-bottom: 50px;
  padding-left: 50px;
  z-index: 1;
}

.img_s6 {
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 6px solid #a6ce39;
  border-radius: 50%;
  margin-top: 30px;
  margin-bottom: 120px;
}

.row_s6 {
  padding-bottom: 100px;
}
@media screen and (max-width: 375px) {
  .mobileOff {
    display: none;
  }
}
</style>
