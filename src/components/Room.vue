<template>

    <md-layout class="room">
      <md-layout>
        <meeting-card v-for="meeting in meetings" date="11-10-1988"></meeting-card>
        <sports-card  v-for="sport in sports" sport="Soccer"></sports-card>
      </md-layout>
    </md-layout>

</template>

<script>
import meetingCard from '@/components/MeetingCard'
import sportsCard from '@/components/SportsCard'

export default {
  name: 'room',
  data () {
    return {
      room: {name: 'room1'},
      meetings: [],
      sports: []
    }
  },
  created () {
    this.connetWM('http://192.168.1.102:8090/farm-to-table-websocket', this.onFailed, this.onConnected);
  },
  methods: {
    onConnected(frame) {
      console.log('Connected', frame);
      this.$stompClient.subscribe('/topic/meetings', this.processMeeting);
      this.$stompClient.subscribe('/topic/sports', this.processSports)
    },
    onFailed(frame) {
      console.log('Failed:', frame);
    },
    processMeeting(meetingData) {
      console.log(meetingData)
      this.meetings.push(meetingData)
    },
    processSports(sportsData) {
      console.log(sportsData)
      this.sports.push(sportsData)
    }
  },
  components: {meetingCard: meetingCard,sportsCard: sportsCard}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.room {
  padding-top: 15px;
}
</style>
