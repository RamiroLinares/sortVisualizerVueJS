<template>
  <div class="quicksort">
    <h1>quicksort</h1>
        <p >QuickSort is an in-place sorting algorithm</p>
     <p > It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, </p>
     <p > according to whether they are less than or greater than the pivot. For this reason, </p>
      <p >it is sometimes called partition-exchange sort. The sub-arrays are then sorted recursively. </p>
      <p >This can be done in-place, requiring small additional amounts of memory to perform the sorting.</p>
    <b-icon
      icon="bar-chart-fill"
      v-on:click="fillWithRandomNumbers()"
      font-scale="5"
      class="rounded-circle bg-success p-2"
      variant="light"
      aria-hidden="true"
    ></b-icon>
    <b-icon
      icon="play-circle"
      v-on:click="quicksort()"
      font-scale="5"
      class="rounded-circle bg-warning p-2"
      variant="light"
      aria-hidden="true"
      animation="fade"
    ></b-icon>
    <input
      type="range"
      class="custom-range"
      id="slider1"
      v-on:change="changeSize()"
    />
    <div class="Graph">
      <Visualizer
        :title="sortingMethod"
        :key="componentKey"
        xKey="pos"
        yKey="amount"
        :data="array"
      />
    </div>
  </div>
</template>

<script>
import quicksort from "@/algorithms/quicksort.mjs";
import Visualizer from "../components/Visualizer.vue";
import Chart from "@/components/Chart.vue";
export default {
  name: "quicksort",
  components: { Visualizer },
  data() {
    return {
      sortingMethod: "Quick Sort",
      array: [],
      size: 10,
      componentKey: 0,
      array2: [],
    };
  },
  methods: {
    async quicksort() {
      for (let i = 0; i < this.array.length; i++) {
        this.array2[i] = this.array[i].amount;
      }
      console.log(this.array2);
      this.array2 = quicksort(this.array2);
      console.log(this.array2);

      for (let j = 0; j < this.array2.length; j++) {
        for (let i = 0; i < this.array2[j].length; i++) {
          this.array[i].amount = this.array2[j][i];
        }
        await new Promise((resolve) => {
          setTimeout(resolve, 100);
          this.componentKey += 1;
        });
      }
    },
    fillWithRandomNumbers() {
      this.array = [];
      for (let i = 0; i < this.size; i++) {
        let pos = i;
        let amount = Math.floor(Math.random() * (1000 - 1)) + 1;
        let objaux = { pos: pos, amount: amount };
        this.array.push(objaux);
      }
      this.componentKey += 1;
    },
    changeSize() {
      this.size = document.getElementById("slider1").value;
    },
  },
  created() {
    this.fillWithRandomNumbers();
  },
};
</script>
<style lang="scss" scoped>
.Graph {
  padding: 122px 0 0 0;
}
</style>