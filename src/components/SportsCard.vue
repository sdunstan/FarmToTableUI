<template>
  <div class="sports-card">
      <md-card-header>
        <div class="md-title">{{ team | capitalize }}</div>
      </md-card-header>
      <md-card-content>
        <span class="md-subheading">Next Game: </span>
      </md-card-content>

  </div>
</template>

<script>
export default {
  name: 'sportsCard',
  props: ['team'],
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
