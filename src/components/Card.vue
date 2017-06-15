<template>
  <div class="card">
    <md-card>
      <md-button class="md-icon-button" @click.native="closeCard()">
        <md-icon>close</md-icon>
      </md-button>
      <sports-card v-if="isSports" class="cards" sport="Soccer"></sports-card>
      <meeting-card v-if="isMeeting" class="cards" date="11-10-1988"></meeting-card>
    </md-card>
  </div>
</template>

<script>
import sportsCard from '@/components/SportsCard'
import meetingCard from '@/components/MeetingCard'

export default {
  name: 'card',
  props: ['data'],
  components: {sportsCard: sportsCard, meetingCard: meetingCard},
  methods: {
    closeCard: function() {
      this.$emit('closeCard')
    },
    greet: function (event) {
      console.log("hi")
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  },
  computed: {
    isSports: function() {
      return this.data.type === 'sports'
    },
    isMeeting: function() {
      return this.data.type === 'meeting'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
