<template>

    <md-layout class="room">
      <md-layout>
        <card class="cards" v-for="(card, index) in cards" :data="card" v-on:closeCard="closeIt(index)"></card>
      </md-layout>
    </md-layout>

</template>

<script>
import card from '@/components/card'

export default {
  name: 'room',
  data () {
    return {
      cards: [{type: 'default'}]
    }
  },
  created () {
    this.connetWM('http://localhost:8090/farm-to-table-websocket', this.onFailed, this.onConnected);
  },
  methods: {
    onConnected(frame) {
      //console.log('Connected', frame);
      this.$stompClient.subscribe('/topic/meetings', this.processMeeting)
      this.$stompClient.subscribe('/topic/sports', this.processSports)
      this.$stompClient.subscribe('/topic/google', this.processGoogle)
    },
    onFailed(frame) {
      console.log('Failed:', frame);
    },
    processMeeting(data) {
      var jsonObj = JSON.parse(data.body)
      var response = {type: 'meeting', start: jsonObj.start, end: jsonObj.end}
      this.processData(response)
    },
    processSports(data) {
      var jsonObj = JSON.parse(data.body)
      let sportTeam = jsonObj.data.match(/suns|diamondbacks|coyotes|cardinals/g)[0]
      let response = {type: 'sports', team: sportTeam}
      this.processData(data)
    },
    processGoogle(data) {
      var jsonObj = JSON.parse(data.body)
      var response = {type: 'google', url: jsonObj.url, phrase: jsonObj.data}
      this.processData(response)
    },
    processData(data) {
      //console.log(data)
      this.cards.unshift(data)
    },
    closeIt(index) {
      this.cards.splice(index, 1)
    }
  },
  components: {card: card}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.room {
  padding-top: 15px;
}
.cards {
  margin: 10px;
}
</style>
