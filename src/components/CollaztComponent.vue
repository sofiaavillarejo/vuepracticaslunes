<template>
  <div>
    <h1>Collazt Component</h1>
    <label>Introduce un numero: </label>
    <input type="number" v-model="numero"/>
    <button @click="conjeturaCollazt()">Calcular</button>
    <div v-if="secuencia.length > 0">
      <ul>
        <li v-for="num in secuencia" :key="num" v-html="$filters.evaluarNumero(num)"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollaztComponent",
  methods: {
    conjeturaCollazt(){
      let aux = [];
      let num = this.numero;
      console.log("hola", num)
      //REVISAR PARA QUE SAQUE LA SECUENCIA DEL 1
      aux.push(num); //para que entre en el 1 y lo imprima, que sino no entra
      while (num != 1) {
        if(num%2==0){
          num = num / 2
        } else {
          num = (num * 3) + 1
        }
        aux.push(num);
      }
      this.secuencia = aux;
    }
  },
  data(){
    return {
      numero: -1,
      secuencia: []
    }
  }
}
</script>

<style>
  
</style>