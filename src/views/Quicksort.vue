<template>
  <div class="quicksort">
    <h1>Quicksort</h1>
    <b-button variant='primary' v-on:click="quicksort()">Quicksort</b-button>
  </div>
</template>

<script>
import quicksort from '@/algorithms/quicksort.js'

export default {
  name: 'Quicksort',
  methods: {
    quicksort () {
      const array = [4000, 10, 24, 1]
      console.log(quicksort(array))
    }
  }
}
</script>
