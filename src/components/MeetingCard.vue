<template>
  <div class="meeting-card">

      <md-card-header>
        <div class="md-title">Schedule a Meeting</div>
        <div class="md-subhead">When: {{date | moment}}</div>
        <div class="md-subhead">Where: MH-2-10015</div>
      </md-card-header>
      <md-card-actions>
        <md-button>Schedule</md-button>
      </md-card-actions>

  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'meetingCard',
  props: ['date'],
  filters: {
  moment: function (date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
