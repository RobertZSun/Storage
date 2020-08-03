<template>
  <div>
    <!-- <h3>current count : {{count}}</h3> -->
    <h3>{{showNum}}</h3>
    <button @click="minOne">-1</button>
    <button @click="minFive">-5</button>
    <button @click="minOneLater">-1 (in 1000s)</button>
    <button @click="minFiveLater">-5 (in 1000s)</button>
  </div>
</template>

<script type="text/javascript">
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data: function () {
    return {

    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  created: function () {

  },
  methods: {
    minOne: function () {
      this.$store.commit('min')
    },
    ...mapMutations(['minN']),
    minFive: function () {
      this.minN(5)
    },
    ...mapActions(['minusNLater', 'minusOneLater']),
    minOneLater: function () {
      this.minusOneLater()
    },
    minFiveLater: function () {
      this.minusNLater(5)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
