<template>
  <div class="section7" id="planos">
    <div class="tit_s7">Nossos planos</div>
    <div class="text1_s7 col-xl-12">
      Todos os planos cont&eacute;m checkout transparente via Cielo, Redecard,
      Mercado Pago, Stone ou Itaú Shopline. Entrega local, <br />
      Correios (PAC ou Sedex e Melhor envio (correios e transportadoras).
      Certificado de segurança SSL e suporte humanizado.
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xl-2"></div>
        <div class="card1 col-xl-3 col-12">
          <div class="cabecalho1_s7">100 produtos</div>
          <div>
            <div class="row col-xl-12">
              <div class="rs col-xl-1">R$</div>
              <div class="dinheiro col-xl-10">49,90</div>
            </div>
            <div class="mes">por m&ecirc;s</div>
          </div>
          <div class="text2_s7">
            Hospedagem com visitas e usu&aacute;rios ilimitadas
          </div>
          <div class="text3_s7">Sem taxas por venda conclu&iacute;da</div>
          <div class="text2_s7">Sem taxa de ades&atilde;o</div>
          <div class="text3_s7">Treinamento individual da plataforma</div>
          <div class="text4_s7">1h de consultoria de marketing digital</div>
          <div>
            <button class="botao1_s7" onclick="location.href = '#sectionvenda'">
              Testar 30 dias gr&aacute;tis
            </button>
          </div>
        </div>
        <div class="card2 col-xl-3 col-12">
          <div class="cabecalho2_s7">300 produtos</div>
          <div>
            <div class="row col-xl-12">
              <div class="rs col-xl-1">R$</div>
              <div class="dinheiro col-xl-10">99,90</div>
            </div>
            <div class="mes">por m&ecirc;s</div>
          </div>
          <div class="text2_s7">
            Hospedagem com visitas e usu&aacute;rios ilimitadas
          </div>
          <div class="text3_s7">Sem taxas por venda conclu&iacute;da</div>
          <div class="text2_s7">Sem taxa de ades&atilde;o</div>
          <div class="text3_s7">Treinamento individual da plataforma</div>
          <div class="text4_s7">1h de consultoria de marketing digital</div>
          <div class="text3_s7">Busca com elastic search</div>
          <div>
            <button class="botao2_s7" onclick="location.href = '#sectionvenda'">
              Testar 30 dias gr&aacute;tis
            </button>
          </div>
        </div>
        <div class="card3 col-xl-3">
          <div class="cabecalho1_s7">produtos ilimitados</div>
          <div>
            <div class="row col-xl-12">
              <div class="rs col-xl-1">R$</div>
              <div class="dinheiro col-xl-10">179,90</div>
            </div>
            <div class="mes">por m&ecirc;s</div>
          </div>
          <div class="text2_s7">
            Hospedagem com visitas e usu&aacute;rios ilimitadas
          </div>
          <div class="text3_s7">Sem taxas por venda conclu&iacute;da</div>
          <div class="text2_s7">Sem taxa de ades&atilde;o</div>
          <div class="text3_s7">Treinamento individual da plataforma</div>
          <div class="text4_s7">1h de consultoria de marketing digital</div>
          <div class="text3_s7">Busca com elastic search</div>
          <div class="text2_s7">Filtros e 1 e-mail corporativo</div>
          <div>
            <button class="botao3_s7" onclick="location.href = '#sectionvenda'">
              Testar 30 dias gr&aacute;tis
            </button>
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
.section7 {
  background-color: #006837;
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
  margin-bottom: 30px;
}

.card1 {
  background-color: #ffffff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-color: #ebebeb;
  padding-bottom: 40px;
  height: 550px;
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
  padding-top: 20px;
}

.dinheiro {
  color: #454545;
  font-family: "Lato-Regular";
  font-size: 60px;
  text-align: center;
  padding-top: 20px;
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

.botao1_s7 {
  margin-top: 90px;
  background-color: #c4d641;
  color: #ffffff;
  font-family: "Lato-Bold";
  font-size: 16px;
  padding: 7px;
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
  height: 600px;
  margin-bottom: 20px;
  border: 1px solid #ebebeb;
  -webkit-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 1);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 1);
}

.cabecalho2_s7 {
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
.botao2_s7 {
  margin-top: 70px;
  background-image: linear-gradient(to right, #acbc37, #2ba583);
  color: #ffffff;
  font-family: "Lato-Bold";
  padding: 7px;
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

.botao3_s7 {
  margin-top: 20px;
  background-color: #c4d641;
  color: #ffffff;
  font-family: "Lato-Bold";
  padding: 7px;
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
  height: 550px;
  padding-right: 10px;
  margin-bottom: 90px;
}
</style>
