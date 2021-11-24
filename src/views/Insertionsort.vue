<template>
  <div class="insertionsort">
    <h1>insertionsort</h1>
    <p >insertionSort</p>
    <b-button variant='primary' v-on:click="insertionsort()">insertionsort</b-button>
  </div>
</template>

<script>
import insertionsort from '@/algorithms/insertionsort.js'

export default {
  name: 'insertionsort',
  methods: {
    insertionsort () {
      const array = [4000, 10, 24, 1, 25, 28, 40, 11, 10, 4]
      console.log(insertionsort(array))
    }
  }
}
</script>
