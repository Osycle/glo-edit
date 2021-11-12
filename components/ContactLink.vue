<template>
  <a :href="contact.path"
    rel=nofollow
    :class="$style['contact-link']"
    target="_blank"
    v-if="type">
    <img :src="require(`~/assets/images/icons/${contact.icon}`)" alt="">
    {{ contact.name }}
  </a>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    contact() {
      return this.$store.state.app.contacts[this.type]
    }
  },
}
</script>

<style lang="scss" module>
.contact-link {
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  color: $color-secondary;
  margin-bottom: 40px;
  align-items: center;

  &:hover {
    color: $color-accent;
  }

  &:not(:last-child) {
    margin-right: 65px;
  }

  img {
    margin-right: 16px;
  }
}
</style>
