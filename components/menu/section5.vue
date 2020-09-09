<template>
  <div class="section5" id="section5">
    <div class="container col-xl-12">
      <div class="row">
        <div class="col-xl-1 col-lg-1 col-md-0 col-sm-0 col-0"></div>
        <img :src="lojavirtual.image1" :title="lojavirtual.name" :alt="lojavirtual.name" class="img_s5 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" />
        <div class="col-xl-4 col-lg-4 col=md-4 col-sm-4 col-12">
          <p class="tit_s5">
            Sua loja virtual em 
            até 7 dias
          </p>
          <div class="text_s5" v-html="lojavirtual.text1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lojavirtual: []
    };
  },

  async fetch() {
    this.lojavirtual = await this.$axios
      .$get(
        "https://wdshop-j.dev.wdhouse.com.br/wdframe/api/v1/cms?page_id=11"
      )
      .then(res => {
        return res.data;
      });
  }
};
</script>

<style>
.section5 {
  background-color: #f5f5f5;
  padding-bottom: 100px;
    width: 100%;
}
.img_s5 {
  padding-top: 100px;
}
.tit_s5 {
  padding-top: 100px;
  color: #006837;
  font-family: "Raleway-Bold";
  font-size: 40px;
}

.text_s5 {
  padding-top: 15px;
  font-family: "OpenSans";
  color: #16161696;
  font-size: 14px;
}

@media screen and (max-width: 800px){
  .text_s5 {
  padding-top: 0px;
  font-size: 12px;
}

}
@media screen and (max-width: 425px){
.tit_s5 {
  padding-top: 40px;
}}
</style>
