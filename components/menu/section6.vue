<template>
  <div class="section6">
    <p class="tit_s6 col-xl-12">Confiam na WD House</p>
    <p class="subtit_s6 col-xl-12">
      S&atilde;o mais de 450 projetos entregues ao longo dos 14 anos.
      Possu&iacute;mos mais de 280 contratos ativos e j&aacute; s&atilde;o + de
      20 lojas <br />
      entregues nas &uacute;ltimas semanas, uma m&eacute;dia de 1 loja virtual
      por dia.
    </p>
    <div class="col-xl-12">
      <div class="container">
        <div class="row mobileOff">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <div class="cards_s6 col-xl-12">
              <p class="text_s6">
                Lorem ipsum dolor sit amet, <br />
                consectetuer adipiscing elit. <br />
                Suspendisse et justo Praesent mattis <br />
                commodo.
              </p>

              <p class="text2_s6">Michael Nicholas</p>
              <p class="text3_s6">Nome da empresa</p>
            </div>
            <img class="img_s6" src="../../assets/bg.png" alt="cliente 1" />
          </div>
          <div class="col-xl-4">
            <div class="cards_s6 col-xl-12">
              <p class="text_s6">
                Lorem ipsum dolor sit amet, <br />
                consectetuer adipiscing elit. <br />
                Suspendisse et justo Praesent mattis <br />
                commodo.
              </p>
              <p class="text2_s6">Michael Nicholas</p>
              <p class="text3_s6">Nome da empresa</p>
            </div>
            <img class="img_s6" src="../../assets/bg_1.png" alt="cliente 2" />
          </div>
          <div class="col-xl-4">
            <div class="cards_s6 col-xl-12">
              <p class="text_s6">
                Lorem ipsum dolor sit amet, <br />
                consectetuer adipiscing elit. <br />
                Suspendisse et justo Praesent mattis <br />
                commodo.
              </p>
              <p class="text2_s6">Michael Nicholas</p>
              <p class="text3_s6">Nome da empresa</p>
            </div>
            <img class="img_s6" src="../../assets/bg2.png" alt="cliente 3" />
          </div>
        </div>
        <div class="row_s6 row"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.section6 {
  background-color: #f5f5f5;
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
@media screen and (max-width:375px){
  .mobileOff{
    display: none;
  }
}
</style>
