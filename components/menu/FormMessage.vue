<template>
  <transition name="expand">
    <div class="alert" :class="alert_class" role="alert" v-if="msg" v-html="msg" :key="!!msg"></div>
  </transition>
</template>
<script>
  export default {
    props: {
      msg: {},
      type: {
        default: 'success'
      }
    },
    computed: {
      alert_class(){
        if (this.type === 'success') {
          return 'alert-success'
        } else {
          return 'alert-danger'
        }
      }
    }
  }
</script>
