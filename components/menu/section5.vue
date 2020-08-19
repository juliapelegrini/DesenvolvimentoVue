<template>
  <div class="section5" id="section5">
    <div class="container col-xl-12">
      <div class="row">
        <div class="col-xl-1 col-lg-1 col-md-0 col-sm-0 col-0"></div>
        <img
          class="img_s5 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"
          src="../../assets/mockup.png"
          alt="computador e celular com o site da WDSHOP"
        />
        <div class="col-xl-4 col-lg-4 col=md-4 col-sm-4 col-12">
          <p class="tit_s5">
            Sua loja virtual em 
            at&eacute; 7 dias
          </p>
          <p class="text_s5">
            Somos diferentes de qualquer plataforma, aqui voc&ecirc; n&atilde;o
            est&aacute; sozinho, nosso atendimento &eacute; individual e
            humanizado. Ajudamos voc&ecirc; em todo o processo de
            cria&ccedil;&atilde;o de sua loja, voc&ecirc; n&atilde;o precisa de
            conhecimento para personalizar, n&oacute;s fazemos para voc&ecirc;.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.section5 {
  background-color: #f5f5f5;
  padding-bottom: 100px;
}
.img_s5 {
  padding-top: 100px;
}
.tit_s5 {
  padding-top: 100px;
  color: #006837;
  font-family: "Raleway-Bold";
  font-size: 40px;
}

.text_s5 {
  padding-top: 15px;
  font-family: "OpenSans";
  color: #161616;
  opacity: 60%;
  font-size: 14px;
}

@media screen and (max-width: 800px){
  .text_s5 {
  padding-top: 0px;
  font-size: 12px;
}

}
</style>
