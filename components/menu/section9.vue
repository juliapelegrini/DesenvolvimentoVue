<template>
  <div class="section9">
    <div class="container-luid">
      <div class="row">
        <img
          :src="digitais.image1"
          :title="digitais.name"
          :alt="digitais.name"
          class="col-xl-6"
        />
        <div class="col-xl-6">
          <p class="tit_s9">&lt;somos digitais/&gt;</p>
          <div v-for="somos in digitais.category1.list" :key="somos.id">
            <div class="text1_s9">{{ somos.name }}</div>
            <div class="text2_s9" v-html="somos.text1"></div>
            <div class="" id="contato"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      digitais: []
    };
  },

  async fetch() {
    this.digitais = await this.$axios
      .$get(
        "https://wdshop-j.dev.wdhouse.com.br/wdframe/api/v1/cms?page_id=15&categories_content=true"
      )
      .then(res => {
        return res.data;
      });
  }
};
</script>

<style>
.section9 {
  background-color: #f5f5f5;
  width: 90%;
}

.tit_s9 {
  color: #006837;
  font-family: "Raleway-Bold";
  font-size: 40px;
  margin-top: 40px;
  margin-left: 10px;
}

.text1_s9 {
  color: #101010;
  font-size: 20px;
  font-family: "Raleway-Regular";
  margin-left: 10px;
}

.text2_s9 {
  color: #727272;
  font-family: "OpenSans";
  font-size: 14px;
  margin-top: -5px;
  margin-bottom: 35px;
  margin-left: 10px;
}
</style>
