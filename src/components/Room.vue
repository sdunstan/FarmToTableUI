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
      room: {name: 'room1'},
      cards: [{type: 'meeting'}, {type: 'sports'}]
    }
  },
  created () {
    this.connetWM('http://localhost:8090/farm-to-table-websocket', this.onFailed, this.onConnected);
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
    processMeeting(data) {
      data.type = 'meeting'
      this.processData(data)
    },
    processSports(data) {
      data.type = 'sports'
      this.processData(data)
    },
    processData(data) {
      console.log(data)
      this.cards.push(data)
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
