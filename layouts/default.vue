<template>
  <div :class="$style['layout']">
    <AgeChecking />
    <LayoutHeader />
    <div :class="$style['inner']" class="main-page">
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
<style lang="scss">
  header, footer, .main-page{
    opacity: 0;
  }
</style>
<style lang="scss" src="../assets/styles/layout.scss" module></style>

