<template>
  <div>
    <!-- <h3>current count : {{$store.state.count}}</h3> -->
    <h3>{{$store.getters.showNum}}</h3>
    <button @click="addOneTimeer">+1(in 1000s)</button>
    <button @click="addSixTimeer">+6(in 1000s)</button>
    <button @click="addOne">+1</button>
    <button @click="addFive">+5</button>
  </div>
</template>

<script type="text/javascript">
export default {
  data: function () {
    return {

    }
  },
  created: function () {

  },
  methods: {
    addOneTimeer: function () {
      this.$store.dispatch('addOneAsync')
    },
    addSixTimeer: function () {
      this.$store.dispatch('addSixLater', 6)
    },
    addOne: function () {
      this.$store.commit('add')
    },
    addFive: function () {
      this.$store.commit('addN', 5)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
