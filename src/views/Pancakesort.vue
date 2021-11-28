<template>
  <div class="pancakesort">
    <h1>pancakesort</h1>
    <p >pancakeSort</p>
    <b-button variant='primary' v-on:click="pancakesort()">pancakesort</b-button>
  </div>
</template>

<script>
import pancakesort from '@/algorithms/pancakesort.mjs'

export default {
  name: 'pancakesort',
  methods: {
    pancakesort () {
      const array = [4000, 10, 24, 1, 25, 28, 40, 11, 10, 4]
      console.log(pancakesort(array))
    }
  }
}
</script>
