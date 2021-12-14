<template lang>

  <section class="src-components-dolar">
    <h1><b>Conversor a dólares</b> </h1>
    <p>Ingreso monto $ <input type="number" id="peso" name="peso" v-model="valorPeso"></p>
    <p>Valor del dolar en $ <input type="number" id="dolar" name="dolar" v-model="valorDolar"></p>
    <p>Valor convertido USD {{convertirADolares}}</p>
    <br>
    <br>
    <br>
    <p><b>Respuestas del multiple choice:</b></p>
    <p>1. c</p>
    <p>2. b</p>
    <p>3. c</p>
    <p>4. a, d</p>
    <p>5. b, c</p>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-dolar',
    props: [],
    mounted () {

    },
    data () {
      return {
        valorPeso: 0,
        valorDolar: 0,
      }
    },
    methods: {

    },
    computed: {
      convertirADolares(){
        return this.valorPeso/this.valorDolar
      }
    }
}


</script>

<style scoped lang="css">
  .src-components-dolar {
    color: black
  }
</style>
