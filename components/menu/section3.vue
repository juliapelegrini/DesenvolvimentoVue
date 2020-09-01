<template>
  <div class="section3">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <h1 class="tit_s3 mt-5 mb-2">
            Social Ads
          </h1>
          <div class="text_s3" v-html="sociais.text1"></div>
          <div class=" offset-2">
            <div class="row">
              <div
                class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"
                v-for="data in sociais.category1.list"
                :key="data.id"
              >
                <div>
                  <img :src="data.image1" :title="data.name" :alt="data.name" />
                </div>
                <div class="subtit_s3">{{ data.name }}</div>
                <div class="p_s3" v-html="data.text1"></div>
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
      sociais: []
    };
  },

  async fetch() {
    this.sociais = await this.$axios
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
  margin-top: 30px;
  margin-bottom: 20px;
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
