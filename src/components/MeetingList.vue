<template>
  <div class="meeting-list">
    <md-layout md-row>
      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon> <span>Inbox</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon> <span>Sent Mail Longer</span>
        </md-list-item>
      </md-list>
      <router-view></router-view>
    </md-layout>
  </div>
</template>

<script>
export default {
  name: 'meetingList',
  data () {
    return {
      meetings: [{name: 'Rob\'s Meeting'}]
    }
  }
}
</script>

<style scoped>
</style>
