<template>
  <div>
    <div class="carousel ">
      <slick class="row" :is="slickComp" ref="slick" :options="slickOptions">
        <div
          class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12"
          v-for="cliente in depo"
          :key="cliente.id"
        >
          <div class="cards_s6 col-xl-12">
            <div class="text_s6" v-html="cliente.text1">
            </div>
            <div class="text2_s6">{{ cliente.name1}}</div>
            <div class="text3_s6">{{ cliente.name2 }}</div>
            </div>
            <img class="img_s6" :src="cliente.image1" alt="cliente 3" />
          
        </div>
      </slick>
    </div>
  </div>
</template>

<script>
export default {
  props:["depo"], 
  components: {
    Slick: () => import('vue-slick')
  },
  data(){
    return{
        slickComp: '',
        slickOptions:{
            arrows:true,
            dots: true,
            infinite: true,
            speed: 500,
            fade: false,
            slidesToShow:3,
            slidesToScroll:1,
            mobileFirst:true,
             responsive: [               
                {
                breakpoint: 768,
                settings: 
                    "unslick"
                    
                
                },
                {
                breakpoint: 320,
                settings: {
                    infinite:true,
                    arrows: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
                }
            ]
        }
    }
  },
  mounted() {
        this.$nextTick(function () {
           this.slickComp = 'Slick'
        })
    },
};
</script>

<style></style>
