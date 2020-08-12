<template>
  <div class="section2" id="func">
    <div class="container">
      <div class="cartao_s2 col-xl-9">
        <div class="row">
          <div class="cartao col-xl-12 col-12">
            <h5 class="titulo_s2">Algumas funcionalidades</h5>

            <div class="row itens">
              <div class="img_s2 ml-5 col-xl-1 col-12">
                <img
                  src="../../assets/computer.svg"
                  alt="Imagem de um Computador e telefone"
                />
              </div>

              <div class="col-xl-4 col-xl-1 col-12">
                <p class="tit_s2 col-xl-12 col-12">
                  Customizada e responsiva
                </p>
                <p class="subtit_s2 col-12">
                  Personalizamos o layout de acordo com sua identidade visual,
                  acess&iacute;vel pelo computador ou celular
                </p>
              </div>

              <div class="img_s2 ml-5 col-xl-1 col-12">
                <img src="../../assets/pay.svg" alt="Cartões" />
              </div>

              <div class="col-xl-4 col-xl-1 col-12">
                <p class="tit_s2 col-xl-12 col-12">
                  Meio de pagamento
                </p>
                <p class="subtit_s2 col-12">
                  Checkout transparente via Cielo, Redecard, Mercado Pago, Stone
                  ou Ita&uacute; Shopline
                </p>
              </div>
            </div>

            <div class="row itens">
              <div class="img_s2 ml-5 col-xl-1 col-12">
                <img src="../../assets/ssl.svg" alt="Cadeado" />
              </div>

              <div class="col-xl-4 col-xl-1 col-12">
                <p class="tit_s2 col-xl-12 col-12">
                  Seguran&#231;a e desempenho
                </p>
                <p class="subtit_s2 col-12">
                  Certificado SSL com prote&#231;&atilde;o de dados e hospedados
                  em servidores nacionais garantindo que esteja sempre online
                </p>
              </div>

              <div class="img_s2 ml-5 col-xl-1 col-12">
                <img src="../../assets/delivery-truck.svg" alt="Caminhão" />
              </div>

              <div class="col-xl-4 col-xl-1 col-12">
                <p class="tit_s2 col-xl-12 col-12">Formas de entrega</p>
                <p class="subtit_s2 col-12">
                  Entrega local, Correios (PAC ou Sedex e Melhor envio (correios
                  e transportadoras
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.section2 {
  position: relative;
  width: 100%;
  height: auto;
  background: #f5f5f5 0% 0% no-repeat padding-box;
  opacity: 1;
}
.cartao_s2 {
  position: relative;
  width: 100%;
  height: auto;
  background-color: white;
}
@media screen and (min-width: 700px) {
  .section2 {
    position: relative;
    width: 100%;
    height: 577px;
    background: #f5f5f5 0% 0% no-repeat padding-box;
    opacity: 1;
  }
  .cartao_s2 {
    position: absolute;
    width: 100%;
    height: 577px;
    transform: translate(90px, -30px);
    background-color: white;
    -webkit-box-shadow: 0px 5px 32px 0px #504f4f;
    -moz-box-shadow: 0px 5px 32px 0px #504f4f;
    box-shadow: 0px 5px 32px 0px #504f4f;
  }
}
.titulo_s2 {
  text-align: center;
  font-size: 40px;
  font-family: "Raleway-Light";
  color: #006837;
  padding-top: 60px;
  padding-bottom: 60px;
}

.img_s2 {
  padding-left: 0px;
}

.tit_s2 {
  color: #161616;
  font-family: "Raleway-Medium";
  font-size: 16px;
}

.subtit_s2 {
  color: #727272;
  font-size: 12px;
  font-family: "OpenSans";
  margin-bottom: 50px;
}
</style>
