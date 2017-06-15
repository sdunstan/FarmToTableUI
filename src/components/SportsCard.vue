<template>
  <div class="sports-card">
      <md-card-header>
        <div class="md-title">{{ this.getSport(sport.data) }}</div>
        <div class="md-subhead">{{ sport.data }}</div>
      </md-card-header>
      <md-card-content>
        <span class="md-subheading">Next Game: {{ this.getNextGame() }}</span>
      </md-card-content>

  </div>
</template>

<script>
export default {
  name: 'sportsCard',
  props: ['sport'],
  methods: {
    getSport(data) {
      let sportTeam = data.match(/suns|diamondbacks|coyotes|cardinals/g)[0]
      return sportTeam.charAt(0).toUpperCase() + sportTeam.slice(1)
    },
    getNextGame() {
      let nextGameArr = [1,2,3,4,5,6,7,8,9,10]
      let min = Math.ceil(0)
      let max = Math.floor(10)
      let arrPosition = Math.floor(Math.random() * (max - min)) + min
      return nextGameArr[arrPosition]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
