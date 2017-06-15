<template>
  <div class="card">
    <md-card>
      <md-button class="md-icon-button" @click.native="closeCard()">
        <md-icon>close</md-icon>
      </md-button>
      <sports-card v-if="isSports" class="cards" :sport="data"></sports-card>
      <meeting-card v-if="isMeeting" class="cards" :date="data.start"></meeting-card>
      <google-card v-if="isGoogle" class="cards" :url="data.url" :phrase="data.phrase"></google-card>
    </md-card>
  </div>
</template>

<script>
import sportsCard from '@/components/SportsCard'
import meetingCard from '@/components/MeetingCard'
import googleCard from '@/components/GoogleCard'

export default {
  name: 'card',
  props: ['data'],
  components: {sportsCard: sportsCard, meetingCard: meetingCard, googleCard: googleCard},
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
    },
    isGoogle: function() {
      return this.data.type === 'google'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
