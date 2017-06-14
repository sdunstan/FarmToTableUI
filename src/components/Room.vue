<template>
  <div class="room">
    Get a room!!! {{room.name}}
  </div>
</template>

<script>
export default {
  name: 'room',
  data () {
    return {
      room: {name: 'room1'}
    }
  },
  created () {
    this.connetWM('http://localhost:8090/farm-to-table-websocket', this.onFailed, this.onConnected);
  },
  methods: {
    onConnected(frame) {
      console.log('Connected', frame);
      this.$stompClient.subscribe('/topic/greetings', function(data) { console.log('socket data', data) });
    },
    onFailed(frame) {
      console.log('Failed:', frame);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
