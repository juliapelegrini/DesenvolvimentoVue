<template>
  <div>
    <b-navbar
      class="fixed-top menu"
      toggleable="lg"
      type="light"
      variant="light"
    >
      <b-container>
        <b-navbar-brand href="#sectionvenda">
          <img src="../../assets/Logo.png" class="img-fluid" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :href="item.href" v-for="item in menu" :key="item.id">{{item.name}}</b-nav-item>
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
  </div>
</template>

<script>
export default {
  data(){
    return{
      menu: []
    }
  },
  async fetch() {
    this.menu = await this.$axios.$get('https://wdshop-j.dev.wdhouse.com.br/wdframe/api/v1/menu/?area=2').then((res) =>{
      return res.data
    });
  }
}
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
.nav-bar {
  display: none;
}

@media screen and (max-width: 465px) {
  .nav-item {
    padding-left: 0px;
  }
}
</style>
