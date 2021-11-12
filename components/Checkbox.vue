<template>
  <label :class="$style['checkbox']">
    <input
      type="checkbox"
      :checked="isChecked"
      :value="value"
      @change="updateInput"
      v-bind="$attrs"
    />
    <div :class="$style['checkmark']">
      <svg
        width="16"
        height="12"
        viewBox="0 0 16 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.6527 0.242408C16.0712 0.60289 16.1181 1.23431 15.7576 1.65273L7.14225 11.6527C6.78714 12.0649 6.16767 12.1176 5.74808 11.7712L0.363463 7.3268C-0.0624721 6.97523 -0.122761 6.34494 0.228805 5.91901C0.58037 5.49307 1.21066 5.43279 1.63659 5.78435L6.2661 9.60553L14.2424 0.347308C14.6029 -0.0711078 15.2343 -0.118073 15.6527 0.242408Z"
          fill="currentColor"
        />
      </svg>
    </div>
    <div :class="$style['text']" v-if="label" v-html="label"></div>
  </label>
</template>

<script>
export default {
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    value: { type: String },
    modelValue: { default: '' },
    label: { type: String, default: '' },
    trueValue: { default: true },
    falseValue: { default: false },
  },
  computed: {
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value)
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return this.modelValue === this.trueValue
    },
  },
  methods: {
    updateInput(event) {
      let isChecked = event.target.checked
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue]
        if (isChecked) {
          newValue.push(this.value)
        } else {
          newValue.splice(newValue.indexOf(this.value), 1)
        }
        this.$emit('change', newValue)
      } else {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue)
      }
    },
  },
}
</script>

<style lang="scss" module>
.checkbox {
  display: flex;
  position: relative;
  cursor: pointer;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  input:checked ~ .checkmark {
    color: $color-accent;

    svg {
      transform: scale(1);
    }
  }
}

.checkmark {
  width: 30px;
  height: 30px;
  min-width: 30px;
  border: 1px solid $color-lighten;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transform: scale(0);
    transition: 0.2s;
  }

  + .text {
    margin-left: 24px;
  }
}

.text {
  font-size: 24px;
  color: $color-secondary;

  @media (max-width: $bp-md) {
    font-size: 18px;
  }
}
</style>
