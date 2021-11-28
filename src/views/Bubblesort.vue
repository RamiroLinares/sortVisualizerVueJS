<template>
  <div class="bubblesort">
    <h1>bubblesort</h1>
    <p >bubbleSort</p>
    <b-button variant='primary' v-on:click="bubblesort()">bubblesort</b-button>
    <b-icon icon="bar-chart-fill" v-on:click="fillWithRandomNumbers()" font-scale="5" class="rounded-circle bg-success p-2" variant="light" aria-hidden="true"></b-icon>
    <b-icon icon="play-circle" v-on:click="bubblesort()" font-scale="5" class="rounded-circle bg-warning p-2" variant="light" aria-hidden="true" animation="fade"></b-icon>
    <input type="range" class="custom-range" id="slider1" v-on:change="changeSize()">
    <div class="Graph">
      <Visualizer :title="sortingMethod" :key="componentKey" xKey="pos" yKey="amount" :data="array"/>
    </div>
  </div>
  
</template>

<script>
import bubblesort from '@/algorithms/bubblesort.mjs'
import Visualizer from '../components/Visualizer.vue';
import Chart from '@/components/Chart.vue'
export default {
  name: 'bubblesort',
  components:{Visualizer},

  data() {
    return{
      sortingMethod:"Bubble Sort",
      array:[],
      size:10,
      componentKey: 0  
    }
  },
  methods: {
    bubblesort () {
      //this.array = [4000, 10, 24, 1, 25, 28, 40, 11, 10, 4]
      let array2=[];
      for (let i = 0; i < this.array.length; i++) {
        array2[i]=this.array[i].amount;
        
      }
      console.log(array2);
      //console.log(bubblesort(array2));
      array2=bubblesort(array2)
      for (let i = 0; i < array2.length; i++) {
        this.array[i].amount=array2[i]; 
      }
      this.componentKey += 1
    },
    fillWithRandomNumbers(){
      this.array=[];
      for (let i = 0; i < this.size; i++) {
        //this.array[i].pos=i;
        //this.array[i].amount=Math.floor(Math.random() * (1000 - 0)) + 0;
        let pos=i;
        let amount=Math.floor(Math.random() * (1000 - 1)) + 1;
        let objaux={pos: pos, amount: amount};
        this.array.push(objaux);
        }
        this.componentKey += 1
      console.log(this.array[0].amount)
    },
    changeSize(){
      this.size=document.getElementById("slider1").value;
    }
  },
  created(){
    this.fillWithRandomNumbers();
  }
}
</script>
<style lang="scss" scoped>
  .Graph{
    padding:122px 0 0 0;
  }
</style>