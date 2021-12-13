<template>
  <div class="about">
    <div class="Graph">
      <Visualizer :title="sortingMethod" xKey="name" yKey="amount" :data="barChartData"/>
    </div>
  </div>
</template>

<!--script>
/*TODO:
1. Make chart smaller
2. Convert arrays to a format that can be read by d3
3. Test/implement  reactive visualization (view sorting in real time)
4. connect buttons and slider to js
5. Implement on all algorithms
6. Add algorithm descriptions to each page*/
//import Visualizer from '../components/Visualizer.vue';
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
</style !-->