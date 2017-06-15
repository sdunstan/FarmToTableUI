<template>
  <div class="card">
    <sports-card v-if="isSports" class="cards" sport="Soccer"></sports-card>
    <meeting-card v-if="isMeeting" class="cards" date="11-10-1988"></meeting-card>
  </div>
</template>

<script>
import sportsCard from '@/components/SportsCard'
import meetingCard from '@/components/MeetingCard'

export default {
  name: 'card',
  props: ['data'],
  components: {sportsCard: sportsCard, meetingCard: meetingCard},
  computed: {
    isSports: function() {
      console.log("this is " + this.data)
      return this.data.type === 'sports'
    },
    isMeeting: function() {
      console.log("this is " + this.data)
      return this.data.type === 'meeting'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
