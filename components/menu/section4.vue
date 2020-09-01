<template>
  <div class="section4" id="quem">
    <div class="container">
      <div class="tit_s4 mt-5 mb-2">
        Para quem é o WD Shop
      </div>
      <div class="text_s4" v-html="quem.text1"></div>
      <div class="row">
        <div
          class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"
          v-for="para in quem.category1.list"
          :key="para.id"
        >
          <img
            :src="para.image1"
            :title="para.name"
            :alt="para.name"
            class="img_card"
          />
          <div class="box_s4">
            <div class="tit2_s4">{{ para.name }}</div>
            <div class="text2_s4" v-html="para.text1"></div>
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
      quem: []
    };
  },

  async fetch() {
    this.quem = await this.$axios
      .$get(
        "https://wdshop-j.dev.wdhouse.com.br/wdframe/api/v1/cms?page_id=10&categories_content=true"
      )
      .then(res => {
        return res.data;
      });
  }
};
</script>

<style>
.section4 {
  content: "";
  background-image: linear-gradient(
      to right,
      rgba(172, 188, 54, 0.83),
      rgba(42, 165, 132, 0.83)
    ),
    url("../../assets/entrega.png");
  background-color: transparent;
  width: 100%;
  position: RELATIVE;
}
.tit_s4 {
  color: #ffffff;
  font-size: 40px;
  font-family: "Raleway-Bold";
  text-align: center;
  padding-top: 50px;
  padding-bottom: 20px;
}
.text_s4 {
  text-align: center;
  color: #ffffff;
  font-family: "OpenSans-SemiBold";
  font-size: 14px;
  padding-bottom: 40px;
}

.box_s4 {
  background-color: #ffffff;
  top: 20px;
  margin-top: 50px;
  padding-top: 90px;
  padding-right: 68px;
  padding-left: 68px;
  padding-bottom: 60px;
  z-index: 1;
  position: RELATIVE;
  text-align: center;
  height: 280px;
}

.img_card {
  height: 150px;
  width: 150px;
  align-content: center;
  position: absolute;
  z-index: 2;
  margin-left: 100px;
}

.tit2_s4 {
  padding-top: 15px;
  font-size: 28px;
  font-family: "Roboto-Regular";
}

.text2_s4 {
  font-size: 16px;
  opacity: 80%;
  font-family: "OpenSans";
}

@media screen and (max-width: 800px) {
  .car {
    width: 100px;
  }
  .img_card {
    margin-top: 20px;
    position: absolute;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20%;
  }
  .tit2_s4 {
    font-size: 18px;
    align-content: center;
  }
  .text2_s4 {
    font-size: 13px;
  }
  .box_s4 {
    padding-right: 55px;
    padding-left: 55px;
    height: 280px;
    margin-bottom: 20px;
  }
}
</style>
