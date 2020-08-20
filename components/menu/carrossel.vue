<template>
  <div>
    <div class="carousel ">
      <slick class="row" :is="slickComp" ref="slick" :options="slickOptions">
        <div
          class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12"
          v-for="cliente in depo"
        >
          <div class="cards_s6 col-xl-12">
            <p class="text_s6">
              {{ cliente.texto }}
            </p>
            <p class="text2_s6">{{ cliente.nome }}</p>
            <p class="text3_s6">{{ cliente.empresa }}</p>
            <img class="img_s6" :src="cliente.imagem" alt="cliente 3" />
          </div>
        </div>
      </slick>
    </div>
  </div>
</template>

<script>
export default {
  props: ["depo"],
  components: {
    Slick: () => import("vue-slick")
  },
  data() {
    return {
      slickComp: "",
      slickOptions: {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 993,
            settings: "unslick"
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerPadding: "40px",
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerPadding: "40px",
              slidesToShow: 2
            }
          }
        ]
      }
    };
  },

  mounted() {
    this.$nextTick(function() {
      this.slickComp = "Slick";
    });
  }
};
</script>

<style></style>
