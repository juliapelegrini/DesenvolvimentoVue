<template>
    <h1>404</h1>
</template>

<script>

export default {
  async asyncData({ res}) {
        res.statusCode = 404
  },
  components: {
  },
  head () {
    return {
      title: 'Não existe',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>
<style>
</style>
