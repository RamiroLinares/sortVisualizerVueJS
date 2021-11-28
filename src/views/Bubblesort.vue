<template>
  <div class="bubblesort">
    <h1>bubblesort</h1>
    <p >bubbleSort</p>
    <b-button variant='primary' v-on:click="bubblesort()">bubblesort</b-button>
    <b-icon icon="bar-chart-fill" v-on:click="fillWithRandomNumbers()" font-scale="5" class="rounded-circle bg-success p-2" variant="light" aria-hidden="true"></b-icon>
    <b-icon icon="play-circle" v-on:click="bubblesort()" font-scale="5" class="rounded-circle bg-warning p-2" variant="light" aria-hidden="true" animation="fade"></b-icon>
    <input type="range" class="custom-range" id="slider1" v-on:change="changeSize()">
  </div>
</template>

<script>
import bubblesort from '@/algorithms/bubblesort.mjs'

export default {
  name: 'bubblesort',
  data() {
    return{
      array:[],
      size:10,  
    }
  },
  methods: {
    bubblesort () {
      //this.array = [4000, 10, 24, 1, 25, 28, 40, 11, 10, 4]
      console.log(bubblesort(this.array))
    },
    fillWithRandomNumbers(){
      for (let i = 0; i < this.size; i++) {
        this.array[i]=Math.floor(Math.random() * (1000 - 0)) + 0;
        }
      console.log(bubblesort(this.array))
    },
    changeSize(){
      this.size=document.getElementById("slider1").value;
    }
  }
}
</script>
