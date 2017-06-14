<template>
  <div class="sports-card">
    <md-card>
      <md-card-header>
        <div class="md-title">Sports</div>
        <div class="md-subhead">Sports</div>
      </md-card-header>
      <md-card-content>
        <span class="md-title">Sport: {{sport}}</span>
      </md-card-content>

    </md-card>
  </div>
</template>

<script>
export default {
  name: 'sportsCard',
  props: ['sport']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
