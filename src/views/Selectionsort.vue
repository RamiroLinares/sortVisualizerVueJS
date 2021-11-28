<template>
  <div class="selectionsort">
    <h1>selectionsort</h1>
    <p >selectionSort</p>
    <b-button variant='primary' v-on:click="selectionsort()">selectionsort</b-button>
  </div>
</template>

<script>
import selectionsort from '@/algorithms/selectionsort.mjs'

export default {
  name: 'selectionsort',
  methods: {
    selectionsort () {
      const array = [4000, 10, 24, 1, 25, 28, 40, 11, 10, 4]
      console.log(selectionsort(array))
    }
  }
}
</script>
