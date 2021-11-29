<template>
  <div class="insertionsort">
    <h1>insertionsort</h1>
    <p>insertionsort</p>
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
      v-on:click="insertionsort()"
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
import insertionsort from "@/algorithms/insertionsort.mjs";
import Visualizer from "../components/Visualizer.vue";
export default {
  name: "insertionsort",
  components: { Visualizer },
  data() {
    return {
      sortingMethod: "Insertion Sort",
      array: [],
      size: 10,
      componentKey: 0,
      array2: [],
    };
  },
  methods: {
    async insertionsort() {
      for (let i = 0; i < this.array.length; i++) {
        this.array2[i] = this.array[i].amount;
      }
      console.log(this.array2);
      this.array2 = insertionsort(this.array2);
      console.log(this.array2);

      for (let j = 0; j < this.array2.length; j++) {
        for (let i = 0; i < this.array2[j].length; i++) {
          this.array[i].amount = this.array2[j][i];
        }
        await new Promise((resolve) => {
          setTimeout(resolve, 50);
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