<template>
  <div :class="$style['winter']">
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque distinctio magni iusto aspernatur eaque repellat similique labore deleniti hic nobis dolorem ducimus aliquam ex tempore possimus quisquam ipsa, quis velit!</h1>
  </div>
</template>

<script>
export default {
  layout: 'winter',
  computed: {
    contacts() {
      return this.$store.state.app.contacts
    },
  },
}
</script>

<style lang="scss" module>
  .winter{
    padding: 2px;
  }
</style>
