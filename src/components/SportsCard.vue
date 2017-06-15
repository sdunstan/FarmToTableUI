<template>
  <div class="sports-card">
      <md-card-header>
        <div class="md-title">{{ team }}</div>
      </md-card-header>
      <md-card-content>
        <span class="md-subheading">Next Game: </span>
      </md-card-content>

  </div>
</template>

<script>
export default {
  name: 'sportsCard',
  props: ['team']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
