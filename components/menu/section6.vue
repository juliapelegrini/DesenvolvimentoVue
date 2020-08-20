<template>
  <div class="section6">
    <p class="tit_s6 col-xl-12">{{ titulo }}</p>
    <div class="container">
        <p class="subtit_s6 col-xl-12">
          {{ descricao }}
        </p>
      </div>
      <!--<div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" v-for="cliente in lista">
            <div class="cards_s6 col-xl-12">
              <p class="text_s6">
                {{cliente.texto}}
              </p>
              <p class="text2_s6">{{cliente.nome}}</p>
              <p class="text3_s6">{{cliente.empresa}}</p>
            </div>
            <img class="img_s6" :src="cliente.imagem" alt="cliente 3" />
          </div>
          </div>-->
      <carrossel :depo="lista" />
  </div>
</template>

<script>
import carrossel from "~/components/menu/carrossel.vue";
export default {
  components: {
    carrossel
  },
  data: function() {
    return {
      titulo: "Confiam na WD House",
      descricao:
        "São mais de 450 projetos entregues ao longo dos 14 anos. Possuímos mais de 280 contratos ativos e já são + de 20 lojas entregues nas últimas semanas, uma mídia de 1 loja virtual por dia.",
      lista: [
        {
          texto:
            "Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit. Suspendisse et justo Praesent mattis  commodo.",
          nome: "Michael Nicholas",
          empresa: "Nome da empresa",
          imagem: "../../assets/bg2.png"
        },
        {
          texto:
            "Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit. Suspendisse et justo Praesent mattis commodo.",
          nome: "Michael Nicholas",
          empresa: "Nome da empresa",
          imagem: "../../assets/bg2.png"
        },
        {
          texto:
            "Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit. Suspendisse et justo Praesent mattis commodo.",
          nome: "Michael Nicholas",
          empresa: "Nome da empresa",
          imagem: "../../assets/bg2.png"
        }
      ]
    };
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
  text-align: center;
  padding-top: 30px;
  margin-top: 20px;
  z-index: 3;
}

.text2_s6 {
  color: #101010;
  font-size: 18px;
  background-color: #ffffff;
  text-align: center;
  margin-top: -17px;
  padding-top: 10px;
  font-family: "Roboto-Regular";
  z-index: 2;
}

.text3_s6 {
  color: #727272;
  font-size: smaller;

  text-align: center;
  margin-top: -17px;
  font-family: "OpenSans";
  font-size: 14px;
  padding-bottom: 30px;
  z-index: 1;
}

.img_s6 {
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 6px solid #a6ce39;
  border-radius: 50%;
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
