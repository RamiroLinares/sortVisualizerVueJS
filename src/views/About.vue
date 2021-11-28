<template>
  <div class="about">
    <h1>This is an about page, Testing visualiztion </h1>
    <Chart class="chart"></Chart>
  </div>
</template>

<script>
import Chart from '@/components/Chart.vue'

export default {
  name: "About",
  components:{Chart},
  data(){

  }
};
</script>
<style lang="scss" scoped>
  .chart{
    margin:120px auto;
    display: block;
  }
</style>