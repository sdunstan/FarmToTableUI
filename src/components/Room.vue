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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
