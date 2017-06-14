<template>
  <div class="rooms">
    <md-layout md-row>
      <md-layout md-flex="25">
        <md-list>
          <md-list-item v-for="room in rooms">
              <router-link :to="{name: 'Room', params: { roomName: room.name }}">
                <md-icon>people</md-icon><span>{{room.name}}</span>
              </router-link>
          </md-list-item>
        </md-list>
      </md-layout>
      <md-layout>
          <router-view></router-view>
      </md-layout>
    </md-layout>
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
