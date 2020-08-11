<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <a class="navbar-brand" href="#sectionvenda">
      <img src="../../assets/Logo.png" alt="Logotipo WD House" width="120px"
    /></a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#sectionvenda" id="text_menu"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#func" id="text_menu">Funcionalidades</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#quem" id="text_menu">Para quem?</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#section5" id="text_menu">Diferencial</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#planos" id="text_menu">Planos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contato" id="text_menu">Contato</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="img_menu">
            <img
              src="../../assets/facebook-square (2).svg"
              alt="Link para o Facebook"
          /></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="img_menu"
            ><img
              src="../../assets/instagram (1).svg"
              alt="Link para o Instagram"
          /></a>
        </li>
      </ul>
    </div>
  </nav>
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

.bloco_h {
  background-color: #ffffff;
}
</style>
