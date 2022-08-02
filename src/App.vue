<template>
  <main>
    <router-view v-slot="{ Component, route }" :key="$route.path">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<style lang="scss">
  @import './assets/styles/variables.scss';

</style>

<script>

  export default {
    data() {
      return {
        transition: 'slide-left'
      }
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    },
    beforeRouteUpdate (to, from, next) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      next()
    },
  }
</script>
