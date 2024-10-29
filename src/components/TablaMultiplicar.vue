<template>
  <div>
    <h1>Tabla de Multiplicar</h1>
    <label>Introduce un numero</label>
    <input type="number" v-model="numero"/>
    <button @click="multiplicar()">Calcular</button>
    <hr/>
    <!-- ! METODO -->
    <div style="display: flex; gap: 25%;">
      <div style="margin-left: 10%;" v-if="secuencia.length > 0">
        <h1>Método</h1>
        <table border="1">
          <thead>
              <tr>
                <th>Operación</th>
                <th>Resultado</th>
              </tr>
            </thead>
            <!-- todo: tambien puedo hacer aqui un for para recorrer el array y pintarlo -->
            <tbody v-html="html"></tbody>
        </table>
      </div>
      
      <!--! DIRECTIVAS -->
      <div>
      <h1>Directivas</h1>
        <table border="1">
          <thead>
            <tr>
              <th>Operación</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody v-for="i in index" :key="i">
            <tr>
              <td >{{ this.numero }} * {{ i}}</td>
              <td >{{ this.numero * i }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div>
      <h1>Filter</h1>
        <table border="1">
          <thead>
            <tr>
              <th>Operación</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 11" :key="i">
              <td>{{ $filters.getOperacion(numero, i - 1) }}</td>
              <td>{{ $filters.getMultiplicacion(numero, i -1) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "TablaMultiplicar",
  data() {
    return {
      numero: 0,
      html:  "",
      secuencia: [],
      index: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods: {
    multiplicar(){
      this.html = "";
      console.log(this.numero);
      let aux = []
      for (let i = 0; i <= 10; i++) {
        let multiplicacion = this.numero * i;
        aux.push(multiplicacion);
        this.html += `
              <tr>
                <td>${this.numero} * ${i}</td>
                <td>${multiplicacion}</td>
              </tr>
        `
      }
      this.secuencia= aux;
      console.log(this.secuencia);
    }
  }
}
</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
}

input[type="number"] {
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100px;
}

button {
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.tables-container {
  margin-top: 20px;
}

h2 {
  margin: 15px 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.multiplication-table th,
.multiplication-table td {
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
}

.multiplication-table th {
  background-color: #f2f2f2;
}

.multiplication-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.multiplication-table tr:hover {
  background-color: #f1f1f1;
}

</style>