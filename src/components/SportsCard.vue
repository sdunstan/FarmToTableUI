<template>
  <div class="sports-card">
      <md-card-header>
        <div class="md-title">{{ team | capitalize }}</div>
      </md-card-header>
      <md-card-content>
        <span class="md-subheading">Next Opponent: {{opponent}}</span>
      </md-card-content>

  </div>
</template>

<script>
export default {
  name: 'sportsCard',
  props: ['team'],
  computed: {
    opponent: function() {
      if(this.team === 'cardinals') {
        return 'Dallas Cowboys'
      }
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
