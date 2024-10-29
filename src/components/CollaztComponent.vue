<template>
  <div>
    <h1>Collazt Component</h1>
    <label>Introduce un numero: </label>
    <input type="number" v-model="numero"/>
    <button @click="conjeturaCollazt()">Calcular</button>
    <ul>
      <li v-for="(num, index) in secuencia" :key="index" v-html="num"></li>
    </ul>
    <div v-html="$filters.parImpar(numero)"></div> <!--!LE PASO NUMERO PORQUE ES LA VARIABLE QUE HEMOS CREADO Y LE DECIMOS QUE PINTE EL FILTRO COMO HTML PARA QUE INTERPRETE LOS ESTILOS Y NO PINTE LOS H1 LITERALMENTE-->
  </div>
</template>

<script>
export default {
  name: "CollaztComponent",
  methods: {
    conjeturaCollazt(){
      this.secuencia = [];
      let num = this.numero;
      console.log("hola", num)

      while (num != 1) {
        this.secuencia.push(num); //mientras que num sea distonto de 0, le guardo en el array
        if(num%2==0){
          num = num / 2
        } else {
          num = (num * 3) + 1
        }
      }
      console.log(this.secuencia);
      this.secuencia.push(num);//me aseguro de guardar el ultimo numero
    }
  },
  data(){
    return {
      numero: 0,
      secuencia: []
    }
  }
}
</script>

<style>
  
</style>