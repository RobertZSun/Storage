<template>
  <div id="app">
    <my-add></my-add>
    <div>hello</div>
    <my-sub></my-sub>
  </div>
</template>

<script>
import Add from './components/Add'
import Sub from './components/Sub'

export default {
  data () {
    return {

    }
  },
  components: {
    'my-add': Add,
    'my-sub': Sub
  }
}
</script>

<style>
</style>
