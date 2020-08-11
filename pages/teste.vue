<template>
    <div >
        <h1>{{id}}</h1>
        <br>
        {{nome}}
        <br>
        <div v-html="html" >
        </div>
        {{html}}
        <h3>{{lista.length}}</h3>
        <ul>
            <li v-for="item in lista" v-bind:key="item.id">
                {{item.titulo}}
            </li>
        </ul>
        <h3>Lista de nomes:</h3>
        <ul>
          <li v-for="item in lista_nomes" v-bind:key="item.id">
            {{item.nome}}
          </li>
        </ul>
    </div>
</template>
<script>
export default {
  data: function() {
      return {
          id: 0,
          nome: '',
          html: '',
          lista: [],
          lista_nomes: [],
          seo_title: ''
      }
  },
    // async validate ({ params, store }) {
        // console.log(params);
        // return true;
    // Throws a 500 internal server error with custom message
    // throw new Error('Under Construction!')
//   },
  async asyncData(context) {
    console.log(context.params);
      // console.log(context);
      // console.log('------');
      // console.log(app);
    // const request = await app.$axios.$get('http://localhost.deploycloud.com.br/wdframe/index.php?n_sistema=8109')

    //     axios.post('/save', { firstName: 'Marlon', lastName: 'Bernardes' })
    //     .then(function(response){
    //         console.log('salvo com sucesso')
    //     });
    // const request = await context.$axios.$post('http://localhost.deploycloud.com.br/wdframe/index.php?n_sistema=8109', {id: context.params.id, categoria: context.params.categoria})
    const request = await context.$axios.$post('https://www.comelrg.com.br/produto/'+context.params.produto+'/', {})
    console.log(request);
    // const nome = request.name
    const html = request
    // const id = request.id
    // if (request.redirect !== undefined) {
    //     return context.redirect(request.redirect)      
    // }
    // if (id == 10) {
        // return context.redirect(request.redirect)
        // $router.push(/);
    // }
    // const lista = request.lista
    // const lista_nomes = request.lista_nomes;
    // const seo_title = request.seo_title;
    // return { nome, lista, id, html, lista_nomes, seo_title}
    return {html}
  },
  components: {
  },
  created() {
  },
  head () {
    return {
      title: this.seo_title,
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
