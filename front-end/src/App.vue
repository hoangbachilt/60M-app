<template>
  <div id="app">
    <router-view name="comp-header" />
    <dialog-find-love v-if="isDialog" />
    <router-view />
  </div>
</template>

<script>
import Dialog from './components/layout/Dialog'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['isDialog'])
  },
  components: {
    'dialog-find-love': Dialog
  },
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  #app {
    position: relative;
  }
</style>
