<template>
<div>
  <div class="section1" id="sectionvenda">
    <div class="container">
      <div class="row col-xl-12">
        <div class="col-xl-6 col-12">
          <p class="texto1_s1">n&atilde;o pare o seu neg&oacute;cio</p>
          <p class="texto2_s1">
            VENDA 24H <br />
            COM SUA <br />
            LOJA VIRTUAL
          </p>
          <p class="texto3_s1">
            Mais que uma plataforma de loja virtual, uma equipe ao seu lado lhe
            ajudando a construir seu sonho.
          </p>
          <button class="botao1">VEJA NOSSOS PLANOS</button>
        </div>
        <div class="col-xl-1"></div>
        <!--form-->
        <div class="formulario col-xl-4">
          <form action="/action_page.php ">
            <h1 class="titform">
              Teste por 30 dias gr&aacute;tis, <br />
              solicite um atendimento.
            </h1>
            <label for="1"></label><br />
            <input
              type="text"
              id="1"
              class="form-control col-xl-10"
              placeholder="Nome"
            />
            <label for="2"></label><br />
            <input
              type="text"
              id="2"
              class="form-control col-xl-10"
              placeholder="Telefone com DDD"
            />
            <label for="3"></label><br />
            <input
              type="text"
              id="3"
              class="form-control col-xl-10"
              placeholder="E-mail"
            />
            <label for="4"></label><br />
            <input
              type="text"
              id="4"
              class="form-control col-xl-10"
              placeholder="Nome de sua empresa"
            />
            <br />
            <input type="submit" class="botao2" value="Me liguem" />
          </form>
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
.section1 {
  margin-top: 35px;
  background-image: linear-gradient(to right, #acbc36, #2aa584);
  padding-bottom: 6%;
}

.texto1_s1 {
  margin-top: 100px;
  color: #fefefe;
  font-size: 18px;
  text-transform: uppercase;
  font-family: "Roboto-Medium";
}

.texto2_s1 {
  color: #fefefe;
  font-size: 50px;
  text-transform: uppercase;
  font-family: "Roboto-Black";
  margin-top: -15px;
}

.texto3_s1 {
  color: #fefefe;
  font-size: 16px;
  font-family: "Raleway-Regular";
}

.botao1 {
  color: #ffffff;
  font-size: 14px;
  background-color: #006904;
  margin-top: 5%;
  padding: 10px;
  padding-left: 7%;
  padding-right: 7%;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 20px;
  box-shadow: none none;
  font-family: "OpenSans";
  border-width: 0px;
}

.formulario {
  height: 490px;
  margin-top: 50px;
  margin-right: 15px;
  margin-left: 15px;
  background-color: #f5f5f5;
}
.titform {
  font-size: 25px;
  text-align: center;
  padding-top: 35px;
  font-family: "Roboto-Regular";
}

.form-control {
  color: #c8c8c8;
  font-size: 14px;
  font-family: "Roboto-Italic";
  padding: 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.botao2 {
  background-color: #a6ce39;
  box-shadow: #fffffd;
  color: #ffffff;
  padding: 10px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 5px;
  font-family: "Roboto-Bold";
  border-width: 0px;
  margin-left: 35px;
}
</style>
