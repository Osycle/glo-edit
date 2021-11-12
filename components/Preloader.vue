<template>
  <div :class="$style['preloader']"></div>
</template>

<style lang="scss" module>
.preloader {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  animation: preloader 1s linear infinite;
  border: 4px solid rgba($color-default, 10%);
  border-left: 4px solid $color-default;

  @keyframes preloader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
