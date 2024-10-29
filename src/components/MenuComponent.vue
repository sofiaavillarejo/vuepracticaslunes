<template>
  <div>
    <ul id="menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/collazt">Conjetura de Collazt</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuComponent"
}
</script>

<style>
  ul {
    padding: 0px;
  }
  li {
    list-style: none;
  }
</style>