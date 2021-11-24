<template>
  <div class="bubblesort">
    <h1>bubblesort</h1>
    <p >bubbleSort</p>
    <b-button variant='primary' v-on:click="bubblesort()">bubblesort</b-button>
  </div>
</template>

<script>
import bubblesort from '@/algorithms/bubblesort.js'

export default {
  name: 'bubblesort',
  methods: {
    bubblesort () {
      const array = [4000, 10, 24, 1, 25, 28, 40, 11, 10, 4]
      console.log(bubblesort(array))
    }
  }
}
</script>
