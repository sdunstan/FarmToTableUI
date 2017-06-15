<template>
  <div class="google-card">

      <md-card-header>
        <div class="md-title">Google It</div>
        <div class="md-subhead">{{ phrase }}</div>
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

</style>
