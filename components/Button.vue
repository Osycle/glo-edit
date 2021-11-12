<template>
  <Component :is="tag" :class="[$style['button'], classNames]"
    @click="disabled || $emit('click')"
  >
    <span><slot /></span>
  </Component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal'
    },
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classNames() {
      return [
        this.size && this.$style[`is-size-${this.size}`],
        this.block && this.$style['is-block'],
        this.disabled && this.$style['is-disabled'],
      ]
    }
  }
}
</script>

<style lang="scss" module>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: $color-accent;
  font-size: 24px;
  color: $color-white;
  white-space: nowrap;
  padding: 10px 30px;
  min-height: 58px;
  border: none;
  text-decoration: none;

  @media (max-width: $bp-sm) {
    font-size: 20px;
    white-space: pre-wrap;
  }

  &:hover {
    background-color: lighten($color-accent, 10%);
    color: $color-white;
  }

  &.is-block {
    width: 100%;
  }

  &.is-size-large {
    min-height: 70px;
  }

  &.is-size-small {
    min-height: 46px;
    font-size: 16px;
  }

  &.is-disabled {
    background-color: $color-lighten;
    cursor: not-allowed;
  }
}
</style>
