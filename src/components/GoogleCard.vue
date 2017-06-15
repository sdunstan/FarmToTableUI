<template>
  <div class="google-card">

      <md-card-header>
        <div class="md-title">{{phrase}}</div>
        <div class="md-subhead">Search</div>
      </md-card-header>


      <md-card-actions>
        <md-button :href="url" target="_blank">Google Search</md-button>
      </md-card-actions>

  </div>
</template>

<script>
export default {
  name: 'googleCard',
  props: ['phrase', 'url']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.google-card {
  background-image: url("../assets/google_logo-f2t.png");
}
</style>
