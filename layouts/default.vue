<template>
  <div :class="$style['layout']">
    <AgeChecking />
    <LayoutHeader />
    <div :class="$style['inner']">
      <Nuxt />
    </div>
    <LayoutFooter />
  </div>
</template>

<script>
import meta from '../utils/meta'

export default {
  ...meta,
}
</script>

<style lang="scss" src="../assets/styles/layout.scss" module></style>
