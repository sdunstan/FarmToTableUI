<template>
  <div class="sports-card">
      <md-card-header>
        <div class="md-title">{{ team | capitalize }}</div>
      </md-card-header>
      <md-card-content>
        <div class="md-subhead">Next Opponent: {{opponent}}</div>
        <div class="md-subhead">Next game {{nextGame}}</div>
      </md-card-content>

  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'sportsCard',
  props: ['team'],
  computed: {
    opponent: function() {
      if(this.team === 'cardinals') {
        return 'Dallas Cowboys'
      } else if(this.team === 'coyotes') {
        return 'L.A. Kings'
      } else if(this.team === 'suns') {
        return 'New York Knicks'
      } else if(this.team === 'diamondbacks') {
        return 'Chicago Cubs'
      }
    },
    nextGame: function() {
      let rand = Math.random() * (12 - 0 ) + 0
      return moment().add(rand, 'weeks').fromNow()
    }
  },
  filters: {
    capitalize: function (team) {
      return team.charAt(0).toUpperCase() + team.slice(1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
