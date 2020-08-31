<template>
  <div class="section3">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <h1 class="tit_s3 mt-5 mb-2">
            Social Ads
          </h1>
          <div class="text_s3" v-html="social.text1"></div>

          <div class=" offset-2">
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <div v-for="social in social.category1.list" :key="social.id">
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <img
                      :src="social.image1"
                      :title="social.name"
                      :alt="social.name"
                    />
                  </div>
                  <div>{{social.name}}</div>
                </div>
                <!-- <p class="subtit_s3 mt-4">Google</p>
                  <p class="p_s3">
                    Analise e anúncie nas poderosas ferramentas Google
                    Analytics, Google Shopping e Google Ads
                  </p>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <img src="../../assets/icon(1).svg" alt="" />
                  <p class="subtit_s3 mt-4">Facebook</p>
                  <p class="p_s3">
                    Utilize o pixel do Facebook na sua loja virtual para fazer
                    anúncios assertivos e de remarketing
                  </p>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <img src="../../assets/icon(2).svg" alt="" />
                  <p class="subtit_s3 mt-4">Instagram</p>
                  <p class="p_s3">
                    Integramos seus produtos da loja com a sacolinha do
                    Instagram para aumentar sua conversão dentro da rede social
                  </p>-->
              </div>
            </div>
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
      social: []
    };
  },
  async fetch() {
    this.social = await this.$axios
      .$get(
        "https://wdshop-j.dev.wdhouse.com.br/wdframe/api/v1/cms?page_id=9&categories_content=true"
      )
      .then(res => {
        return res.data;
      });
  }
};
</script>

<style>
.section3 {
  margin-top: 5px;
  padding-bottom: 8%;
  margin-left: -100px;
  width: 100%;
}
.tit_s3 {
  font-size: 40px;
  font-family: "Raleway-Bold";
  color: #006837;
  position: relative;
  text-align: center;
}
.text_s3 {
  color: #161616;
  font-family: "OpenSans";
  text-align: center;
  opacity: 0.6;
  font-size: 14px;
  padding-bottom: 5%;
}

.subtit_s3 {
  color: #161616;
  font-size: large;
  font-family: "Raleway-Medium";
  font-size: 18px;
}

.p_s3 {
  color: #161616;
  font-family: "OpenSans";
  opacity: 0.9;
  font-size: 14px;
}

@media screen and (max-width: 800px) {
  .section3 {
    margin-left: 0px;
  }
}
@media screen and (min-width: 760px) {
  .section3 {
    padding-left: 100px;
  }
}
</style>
