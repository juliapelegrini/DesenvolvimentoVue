<template>
  <div class="section8">
    <div class="tit_s8">Contrate também (opcional)</div>
    <div class="text1_s8 col-xl-12" v-html="contrate.text1"></div>
    <div class="container">
      <div class="row">
        <div
          class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"
          v-for="data in contrate.category1.list"
          :key="data.id"
        >
          <img
            :src="data.image1"
            :title="data.name"
            :alt="data.name"
            class="img_s8"
          />
          <div class="text2_s8">{{ data.name1 }}</div>
          <div
            class="text3_s8 col-xl-11 col-lg-11 col-md-11 col-sm-12 col-12"
            v-html="data.text1"
          ></div>
          <div class="text4_s8" v-html="data.text2"></div>
        </div>
      </div>
    </div>
    <div class="divisao_s8"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contrate: []
    };
  },
  async fetch() {
    this.contrate = await this.$axios
      .$get(
        "https://wdshop-j.dev.wdhouse.com.br/wdframe/api/v1/cms?page_id=14&categories_content=true"
      )
      .then(res => {
        return res.data;
      });
  }
};
</script>

<style>
.section8 {
  width: 100%;
}

.tit_s8 {
  font-family: "Raleway-Bold";
  color: #006837;
  font-size: 40px;
  text-align: center;
  margin-top: 40px;
}

.text1_s8 {
  font-family: "OpenSans";
  font-size: 16px;
  text-align: center;
  color: #161616;
  opacity: 60%;
  margin-top: 20px;
  margin-bottom: 50px;

}

.text2_s8 {
  padding-top: 10px;
  color: #444444;
  font-family: "Lato-Regular";
  font-size: 18px;
  text-align: center;
}

.text3_s8 {
  color: #8f8f8f;
  font-family: "Lato-Light";
  text-align: center;
  font-size: 16px;
}

.text4_s8 {
  color: #006837;
  font-family: "Lato-Bold";
  font-size: 18px;
  text-align: center;
  padding-bottom: 30px;
}

.img_s8 {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.divisao_s8 {
  margin-bottom: 50px;
}

@media screen and (max-width: 375px) {
  
}
</style>
