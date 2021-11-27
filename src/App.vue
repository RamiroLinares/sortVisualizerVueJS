<template>
  <div id="app">
    <Navigation/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/quicksort">Quicksort</router-link> |
      <router-link to="/bubblesort">Bubblesort</router-link> |
      <router-link to="/insertionsort">Insertionsort</router-link> |
      <router-link to="/mergesort">Mergesort</router-link> |
      <router-link to="/pancakesort">Pancakesort</router-link> |
      <router-link to="/selectionsort">Selectionsort</router-link>
    </div>
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
  import Footer from './components/Footer'
  import Navigation from './components/Navigation'
  export default {
    name: "App",
    components:{
      Footer, Navigation
    }
  };
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500&display=swap");
*{
  padding: 0;
  margin: 0;
  box-sizing:border-box;
  font-family:"Raleway",sans-serif;
  font-weight:400;
}
#app {
  min-height:100vh;
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>
