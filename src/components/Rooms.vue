<template>
  <div class="rooms">
    <md-list>
      <md-list-item v-for="room in rooms">
          <router-link to="/rooms/room1">
            <md-icon>people</md-icon><span>{{room.name}}</span>
          </router-link>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  name: 'rooms',
  data () {
    return {
      rooms: [{name: 'room1'}, {name: 'room2'}]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
