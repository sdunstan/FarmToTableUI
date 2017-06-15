<template>
  <div class="meeting-card">
    <md-card>
      <md-card-header>
        <md-icon md-align="end">close</md-icon>
        <div class="md-title">Schedule a Meeting</div>
        <div class="md-subhead">Subheader</div>
      </md-card-header>
      <md-card-actions>
        <md-button>Schedule</md-button>
        <md-button>Edit</md-button>
      </md-card-actions>
      <md-card-content>
        <span class="md-title">Date: {{date}}</span>
      </md-card-content>

    </md-card>
  </div>
</template>

<script>
export default {
  name: 'meetingCard',
  props: ['date']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
