<template>
  <div :class="[$style['filed'], classNames]">
    <VSelect
      @option:selecting="$emit('input', $event)"
      :options="options"
      :value="defaultValue"
      v-bind="selectOptions"
      :class="$style['select']" />
  </div>
</template>


<script>
import VSelect from 'vue-select'
export default {
  props: {
    defaultValue: {
      type: [Object, String],
      default: null
    },
    options: {
      type: [Object, Array],
      default: []
    },
    size: {
      type: String,
      default: ''
    },
    outline: {
      type: Boolean,
      default: false
    },
  },
  components: {
    VSelect
  },
  data() {
    return {
      selectOptions: {
        clearable: false,
        searchable: false
      }
    }
  },
  computed: {
    classNames() {
      return [
        this.outline && this.$style['is-outline'],
        this.size && this.$style[`is-size-${this.size}`],
      ]
    },
  },
  mounted() {
    this.$emit('input', this.defaultValue)
  }
}
</script>

<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";

.vs__dropdown-toggle {
  height: 100%;
  border: none;
}

.vs__dropdown-menu {
  border-radius: 0px;
}

.vs__actions {
  padding: 4px 16px 0 3px;
}

.vs__search {
  padding-left: 30px;

  &:focus {
    padding-left: 30px;
  }
}

.vs__selected-options {
  align-items: center;
}

.vs__selected {
  margin-left: 24px;
}
</style>

<style lang="scss" module>
.filed {
  position: relative;
  display: flex;
  width: 100%;

  &.is-size-large {
    .select {
      min-height: 70px;
    }
  }

  &.is-size-small {
    .select {
      min-height: 46px;
      padding: 4px 24px;
      font-size: 16px;
    }
  }

  &.is-outline {
    .select {
      border: 1px solid $color-lighten;
      background-color: $color-white;

      &:focus {
        border: 1px solid $color-accent;
      }
    }
  }
}

.select {
  min-height: 58px;
  font-size: 24px;
  outline: none;
  border: 1px solid transparent;
  background-color: $color-light;
  width: 100%;
}
</style>
