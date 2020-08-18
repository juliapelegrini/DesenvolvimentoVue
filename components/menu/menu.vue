<template>
  <b-navbar class="fixed-top menu" toggleable="lg" type="light" variant="light">
    <b-container>
      <b-navbar-brand href="#sectionvenda">
        <img
          class=""
          src="../../assets/Logo.png"
          alt="Logotipo WD House"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" class="mr-4"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#sectionvenda" id="text_menu">Home</b-nav-item>
          <b-nav-item href="#func" id="text_menu">Funcionalidades</b-nav-item>
          <b-nav-item href="#quem" id="text_menu">Para quem?</b-nav-item>
          <b-nav-item href="#section5" id="text_menu">Diferencial</b-nav-item>
          <b-nav-item href="#planos" id="text_menu">Planos</b-nav-item>
          <b-nav-item href="#contato" id="text_menu">Contato</b-nav-item>
          <b-nav-item href="#" id="img_menu">
            <img
              src="../../assets/facebook-square (2).svg"
              alt="Link para o Facebook"
            />
          </b-nav-item>
          <b-nav-item href="#" id="img_menu">
            <img
              src="../../assets/instagram (1).svg"
              alt="Link para o Instagram"
            />
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style>
html {
  scroll-behavior: smooth;
}

#text_menu {
  color: #161616;
  text-transform: uppercase;
  font-family: "Roboto-Medium";
  font-size: 12px;
  margin-left: 20px;
}

#text_menu:hover {
  color: #006837;
}

.nav-item {
  padding-left: 25px;
}
</style>
