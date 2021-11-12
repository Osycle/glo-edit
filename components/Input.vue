<template>
  <div :class="[$style['field'], classNames]">
    <input
      v-if="!mask"
      ref="input"
      v-bind="$attrs"
      :class="$style['input']"
      type="text"
      @input="onInput"
      :value="value">

    <input
      v-else
      ref="input"
      v-bind="$attrs"
      :class="$style['input']"
      type="text"
      v-imask="masks"
      @accept="onAccept"
      :value="value">

    <div :class="$style['icon']" v-if="$attrs.type === 'search'">
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2778 0C15.954 0 20.5556 4.60152 20.5556 10.2778C20.5556 12.5743 19.8018 14.6959 18.5286 16.4071L22.3385 20.2171C22.9242 20.8029 22.9242 21.7527 22.3384 22.3385C21.7526 22.9242 20.8029 22.9242 20.2171 22.3384L16.4073 18.5285C14.696 19.8018 12.5743 20.5556 10.2778 20.5556C4.60152 20.5556 0 15.954 0 10.2778C0 4.60152 4.60152 0 10.2778 0ZM17.5556 10.2778C17.5556 6.25837 14.2972 3 10.2778 3C6.25837 3 3 6.25837 3 10.2778C3 14.2972 6.25837 17.5556 10.2778 17.5556C14.2972 17.5556 17.5556 14.2972 17.5556 10.2778Z" fill="currentColor"/>
      </svg>
    </div>
  </div>
</template>

<script>
import { IMaskDirective } from 'vue-imask';

export default {
  inheritAttrs: false,
  directives: {
    imask: IMaskDirective
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    outline: {
      type: Boolean,
      default: false
    },
    mask: {
      type: String,
      default: null
    },
    maskOptions: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
    },
    onAccept(e) {
      this.$emit('input', e.detail.value)
    },
  },
  computed: {
    classNames() {
      return [
        this.outline && this.$style['is-outline'],
        this.size && this.$style[`is-size-${this.size}`],
        this.$attrs.type && this.$style[`is-type-${this.$attrs.type}`]
      ]
    },
    masks() {
      if(this.mask) {
        return {
          mask: this.mask,
          ...this.maskOptions
        }
      }
    }
  },
}
</script>

<style lang="scss" module>
.field {
  position: relative;
  display: flex;
  width: 100%;

  &.is-size-large {
    .input {
      min-height: 70px;
    }
  }

  &.is-size-small {
    .input {
      min-height: 46px;
      padding: 4px 24px;
      font-size: 16px;
    }
  }

  &.is-outline {
    .input {
      border: 1px solid $color-lighten;
      background-color: $color-white;

      &:focus {
        border: 1px solid $color-accent;
      }
    }
  }
}

.input {
  min-height: 58px;
  padding: 10px 30px;
  font-size: 24px;
  outline: none;
  border: 1px solid transparent;
  background-color: $color-light;
  width: 100%;

  @media (max-width: $bp-sm) {
    font-size: 20px;
  }

  &:focus {
    border: 1px solid $color-accent;
  }
}

.icon {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  color: $color-secondary;
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
