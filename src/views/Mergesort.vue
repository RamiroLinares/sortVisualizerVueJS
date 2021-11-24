<template>
  <div class="mergesort">
    <h1>mergesort</h1>
    <p >mergeSort</p>
    <b-button variant='primary' v-on:click="mergesort()">mergesort</b-button>
  </div>
</template>

<script>
import mergesort from '@/algorithms/mergesort.js'

export default {
  name: 'mergesort',
  methods: {
    mergesort () {
      const array = [4000, 10, 24, 1, 25, 28, 40, 11, 10, 4]
      console.log(mergesort(array))
    }
  }
}
</script>
