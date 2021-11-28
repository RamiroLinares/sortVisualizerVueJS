<template>
  <div class="about">
    <div class="Graph">
      <Visualizer :title="sortingMethod" xKey="name" yKey="amount" :data="barChartData"/>
    </div>
  </div>
</template>

<script>
import Chart from '@/components/Chart.vue'
import Visualizer from '../components/Visualizer.vue';
export default {
  name: "About",
  components:{Visualizer},
  data: () => ({
    sortingMethod:"Quick Sort",
    barChartData: [
      {
        name: "Roses",
        amount: 25
      },
      {
        name: "Tulips",
        amount: 40
      },
      {
        name: "Daisies",
        amount: 15
      },
      {
        name: "Narcissuses",
        amount: 14
      }
    ]
  }),
};
</script>
<style lang="scss" scoped>
  .Graph{
    padding:122px 0 0 0;
  }
</style>