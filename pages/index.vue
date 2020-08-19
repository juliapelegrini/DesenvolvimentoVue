<template>
<div>
  <Menu></Menu>
  <Section1></Section1>
  <Section2></Section2>
  <Section3></Section3>
  <Section4></Section4>
  <Section5></Section5>
  <Section6></Section6>
  <Section7></Section7>
  <Section8></Section8>
  <Section9></Section9>
  <Footer></Footer>
  

  </div>
</template>

<script>
import menu from '../components/menu/menu'
import section1 from '../components/menu/section1'
import section2 from '../components/menu/section2'
import section3 from '../components/menu/section3'
import section4 from '../components/menu/section4'
import section5 from '../components/menu/section5'
import section6 from '../components/menu/section6'
import section7 from '../components/menu/section7'
import section8 from '../components/menu/section8'
import section9 from '../components/menu/section9'
import footer from '../components/menu/footer'

export default {
  components: {
    "Menu": menu,
    "Section1": section1,
    "Section2": section2,
    "Section3": section3,
    "Section4": section4,
    "Section5": section5,
    "Section6": section6,
    "Section7": section7,
    "Section8": section8,
    "Section9": section9,
    "Footer":footer,
  }
}
</script>

<style>
@font-face {
  font-family: "Roboto-Medium";
  src: url("../fonts/Roboto/Roboto-Medium.ttf");
}
@font-face {
  font-family: "Roboto-Black";
  src: url("../fonts/Roboto/Roboto-Black.ttf");
}
@font-face {
  font-family: "Raleway-Regular";
  src: url("../fonts/Raleway/Raleway-Regular.ttf");
}
@font-face {
  font-family: "OpenSans";
  src: url("../fonts/OpenSans/OpenSans-Regular.ttf");
}
@font-face {
  font-family: "Roboto-Regular";
  src: url("../fonts/Roboto/Roboto-Regular.ttf");
}
@font-face {
  font-family: "Roboto-Italic";
  src: url("../fonts/Roboto/Roboto-Italic.ttf");
}
@font-face {
  font-family: "Roboto-Bold";
  src: url("../fonts/Roboto/Roboto-Bold.ttf");
}
@font-face {
  font-family: "Raleway-Light";
  src: url("../fonts/Raleway/Raleway-Light.ttf");
}
@font-face {
  font-family: "Raleway-Medium";
  src: url("../fonts/Raleway/Raleway-Medium.ttf");
}
@font-face {
  font-family: "Raleway-Bold";
  src: url("../fonts/Raleway/Raleway-Bold.ttf");
}
@font-face {
  font-family: "OpenSans-SemiBold";
  src: url("../fonts/OpenSans/OpenSans-SemiBold.ttf");
}
@font-face {
  font-family: "Lato-Bold";
  src: url("../fonts/Lato/Lato-Bold.ttf");
}
@font-face {
  font-family: "Lato-Regular";
  src: url("../fonts/Lato/Lato-Regular.ttf");
}
@font-face {
  font-family: "Lato-Light";
  src: url("../fonts/Lato/Lato-Light.ttf");
}
</style>
