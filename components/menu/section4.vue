<template>
     <div class="section4 col-12" id="quem">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-12">
              <h1 class="tit_s4 mt-5 mb-2 col-12">
                Para quem &eacute; o WD Shop
              </h1>
              <p class="text_s4 col-12">
                Principalmente para quem n&atilde;o tem conhecimento ou tempo para
                perder em aprender a customizar sua loja, ler <br />
                tutoriais, testar, quebrar a cabeça com algo que n&atilde;o domina.
                Voc&ecirc; deve usar este tempo para focar no seu <br />
                neg&oacute;cio, a parte t&eacute;cnica, deixa para n&oacute;s.
              </p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="car col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
              <img class="img_card" src="../../assets/clothes.png" alt="roupas" />
              <div class="box_s4">
                <p class="tit2_s4">Lojistas</p>
                <p class="text2_s4">
                  Tem loja f&iacute;sica e quer vender online podendo integrar com seu
                  sistema
                </p>
              </div>
            </div>

            <div class="car col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
              <img class="img_card" src="../../assets/homem.png" alt="roupas" />
              <div class="box_s4">
                <p class="tit2_s4">Representantes</p>
                <p class="text2_s4">
                  Precisa agilizar seu atendimento aos lojistas com venda B2B
                </p>
              </div>
            </div>

            <div class="car col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
              <img class="img_card" src="../../assets/mulher.png" alt="roupas" />
              <div class="box_s4">
                <p class="tit2_s4">Aut&ocirc;nomos</p>
                <p class="text2_s4">
                  Vende pelas redes sociais e quer se profissionalizar escalando
                  suas vendas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
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

  position: RELATIVE;
}
.tit_s4 {
  color: #ffffff;
  font-size: 40px;
  font-family: "Raleway-Bold";
  text-align: center;
  padding-top: 10px;
  padding-bottom: 20px;
}
.text_s4 {
  text-align: center;
  color: #ffffff;
  font-family: "OpenSans-SemiBold";
  font-size: 14px;
}

.box_s4 {
  background-color: #ffffff;
  top: 20px;
  margin-top: 75px;
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
  margin-top: 20px;
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
  font-size: 14px;
  opacity: 80%;
  font-family: "OpenSans";
}


</style>