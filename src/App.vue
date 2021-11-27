<template>
  <div id="app">
    <Navigation/>
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
  //text-align: center;
  color: #2c3e50;
}

</style>
