<template>
  <div class="section7" id="planos">
    <div class="container">
      <div class="row">
        <div class="tit_s7 col-xl-12">Nossos planos</div>
        <div class="text1_s7 col-xl-12" v-html="planos.text1"></div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xl-2 col-lg-2 col-md-0 col-sm-12 col-12"></div>
        <div
          class=" col-xl-3 col-lg-3 col-md-4 col-sm-11 col-11"
          v-for="(data, index) in planos.category1.list"
          :key="data.id"
          :class="'card' + parseInt(index + 1)"
        >
          <div class="cabecalho1_s7" :id="'quant' + parseInt(index + 1)">
            {{ data.name1 }}
          </div>
          <div class="rs col-xl-1">{{ data.name2 }}</div>
          <div class="dinheiro col-xl-10">{{ data.name3 }}</div>
          <div class="mes">{{ data.name4 }}</div>
          <div v-for="(card, index1) in data.category1.list" :key="index1.id">
            <div
              v-if="index1 % 2 == 0"
              :style="'background-color:#f5f5f5; height:100%; '"
            >
              <div class="text2_s7" v-html="card.text1"></div>
            </div>
            <div v-else>
              <div class="text3_s7" v-html="card.text1"></div>
            </div>
          </div>
          <button :id="'botao' + parseInt(index + 1)" :href="data.name6">
            {{ data.name5 }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      planos: []
    };
  },
  async fetch() {
    this.planos = await this.$axios
      .$get(
        "https://wdshop-j.dev.wdhouse.com.br/wdframe/api/v1/cms?page_id=13&categories_content=true"
      )
      .then(res => {
        return res.data;
      });
  }
};
</script>

<style>
.section7 {
  background-color: #006837;
  width: 100%;
}

.tit_s7 {
  font-family: "Raleway-Bold";
  font-size: 40px;
  text-align: center;
  color: #ffffff;
  padding-top: 42px;
}

.text1_s7 {
  color: #ffffff;
  font-family: "OpenSans-SemiBold";
  text-align: center;
  font-size: 14px;
  padding-top: 15px;
  margin-bottom: 60px;
}

.card1 {
  background-color: #ffffff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-color: #ebebeb;
  padding-bottom: 40px;
  height: 650px;
  padding-right: 10px;
  margin-bottom: 40px;
}

.cabecalho1_s7 {
  background-color: #ffffff;
  border-bottom: 1px solid #ebebeb;
  color: #a6ce39;
  text-align: center;
  font-size: 18px;
  font-family: "Lato-Bold";
  padding-top: 20px;
  padding-bottom: 20px;
  text-transform: uppercase;
}
.rs {
  color: #2f2f2f;
  font-family: "Lato-Regular";
  font-size: 18px;
  padding-top: 30px;
}

.dinheiro {
  color: #454545;
  font-family: "Lato-Regular";
  font-size: 60px;
  text-align: center;
  margin-top: -50px;
  margin-left: 20px;
  padding-right: 15px;
}
.mes {
  color: #dcdcdc;
  font-family: "Lato-Regular";
  font-size: 14px;
  text-align: center;
  border-bottom: 1px solid #ebebeb;
}

.text2_s7 {
  color: #727272;
  font-size: 13px;
  font-family: "Lato-Light";
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ebebeb;
  background-color: #f7f7f7;
  text-align: center;
}

.text3_s7 {
  color: #727272;
  font-size: 13px;
  font-family: "Lato-Light";
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ebebeb;
  text-align: center;
}

.text4_s7 {
  color: #727272;
  font-size: 13px;
  font-family: "Lato-Bold";
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ebebeb;
  background-color: #f7f7f7;
  text-align: center;
}

#botao1 {
  margin-top: 120px;
  background-color: #c4d641;
  color: #ffffff;
  font-family: "Lato-Bold";
  font-size: 16px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
  border-color: #ffffff;
  align-items: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  border-width: 0px;
}
.card2 {
  background-color: #ffffff;
  border-radius: 10px;
  padding-bottom: 45px;
  padding-left: 0px;
  padding-right: 0px;
  margin-top: -20px;
  height: 700px;
  margin-bottom: 20px;
  border: 1px solid #ebebeb;
  -webkit-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 1);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 1);
  z-index: 3;
}

#quant2 {
  background-image: linear-gradient(to right, #abbc36, #9fba3d, #2aa482);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #ffffff;
  text-align: center;
  font-size: 24px;
  font-family: "Lato-Bold";
  padding-top: 29px;
  padding-bottom: 59px;
  height: 70px;
  text-transform: uppercase;
}
#botao2 {
  margin-top: 70px;
  background-image: linear-gradient(to right, #acbc37, #2ba583);
  color: #ffffff;
  font-family: "Lato-Bold";
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
  border-color: #ffffff;
  align-items: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -20px;
  cursor: pointer;
  border-width: 0px;
}

#botao3 {
  margin-top: 20px;
  background-color: #c4d641;
  color: #ffffff;
  font-family: "Lato-Bold";
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
  border-width: 0px;
  align-items: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
}
.card3 {
  background-color: #ffffff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-bottom: 40px;
  height: 650px;
  margin-bottom: 90px;
}

@media screen and (max-width: 425px) {
  .card1 {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-bottom: 40px;
    height: 590px;
    margin-left: 13px;
  }

  .card2 {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-bottom: 40px;
    height: 630px;
    margin-left: 13px;
  }

  .card3 {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-bottom: 40px;
    height: 500px;
    margin-left: 13px;
  }
}
@media screen and (max-width: 425px) {
  .card1 {
    height: 550px;
  }
  .card2 {
    height: 590px;
  }
  .card3 {
    height: 565px;
  }
}
</style>
