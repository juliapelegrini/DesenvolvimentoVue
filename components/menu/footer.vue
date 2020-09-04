<template>
  <footer>
    <div class="container">
      <div class="row">
        <div
          class="distanciamento col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12m "
        >
          <img
            src="../../assets/Camada2(2).svg"
            alt="Logotipo WD House"
            width="155"
          />
          <div v-for="shop in wdshop.subitems" :key="shop.id">
            <div class="texto1">{{shop.name}}</div>
          </div>
        </div>
        <div class="distanciamento col-xl-3 col-lg-2 col-md-2 col-sm-12 col-12">
          <div class="rodape">{{ parceiro.name }}</div>
          <div v-for="parc in parceiro.subitems" :key="parc.id">
            <a href="parc.href" class="texto">{{ parc.name }}</a>
          </div>
        </div>
        <div class="distanciamento col-xl-3 col-lg-2 col-md-2 col-sm-12 col-12">
          <div class="rodape">{{ suporte.name }}</div>
          <div v-for="sup in suporte.subitems" :key="sup.id">
            <a href="sup.href" class="texto">{{ sup.name }}</a>
          </div>
        </div>
        <div class="distanciamento col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
          <div class="rodape">{{ acompanhe.name }}</div>
          <div v-for="acomp in acompanhe.subitems" :key="acomp.id">
            <a href="acomp.href" class="texto">{{ acomp.name }}</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      parceiro: [],
      suporte: [],
      acompanhe: [],
      wdshop: []
    };
  },
  async fetch() {
    this.footer = await this.$axios
      .$get("https://wdshop-j.dev.wdhouse.com.br/wdframe/api/v1/menu/?area=3")
      .then(res => {
        (this.parceiro = res.data[0]),
          (this.suporte = res.data[1]),
          (this.acompanhe = res.data[2]),
          (this.wdshop = res.data[3]);
      });
  }
};
</script>

<style>
footer {
  background-color: #006837;
  width: 100%;
}

.rodape {
  padding-top: 30px;
  color: #ffffff;
  font-size: 14px;
  font-family: "OpenSans";
}

.distanciamento {
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 1%;
}

.texto {
  color: #a6ce39;
  font-size: 14px;
  font-family: "OpenSans";
}
.texto1 {
  color: #ffffff;
  font-size: 14px;
  font-family: "OpenSans";
}
.texto:hover {
  color: white;
  text-decoration: none;
  font-family: "OpenSans";
}
</style>
