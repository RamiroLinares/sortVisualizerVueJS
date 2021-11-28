<template>
  <div class="quicksort">
    <h1>Quicksort</h1>
    <p >QuickSort is an in-place sorting algorithm</p>
     <p > It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, </p>
     <p > according to whether they are less than or greater than the pivot. For this reason, </p>
      <p >it is sometimes called partition-exchange sort. The sub-arrays are then sorted recursively. </p>
      <p >This can be done in-place, requiring small additional amounts of memory to perform the sorting.</p>
    <b-button variant='primary' v-on:click="quicksort()">Quicksort</b-button>
  </div>
</template>

<script>
import quicksort from '@/algorithms/quicksort.mjs'

export default {
  name: 'Quicksort',
  methods: {
    quicksort () {
      const array = [4000, 10, 24, 1, 25, 28, 40, 11, 10, 4]
      console.log(quicksort(array))
    }
  }
}
</script>
