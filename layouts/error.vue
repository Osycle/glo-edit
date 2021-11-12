<template>
  <div :class="$style['wrapper']">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-auto">
          <div :class="$style['inner']">
            <div :class="$style['headline']">404</div>
            <div :class="$style['title']">{{ $t('not_found_title') }}</div>
            <div :class="$style['note']">{{ $t('not_found_note') }}</div>
            <div :class="$style['action']">
              <Button @click="$router.push(localePath('/'))">{{ $t('not_found_on_home') }}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'basic'
}
</script>

<style lang="scss" module>
.wrapper {
  background: url('@/assets/images/single-bg.jpg') no-repeat 0 0;
  background-size: cover;
  padding: 120px 0;
}

.inner {
  text-align: center;
  max-width: 600px;
}

.headline {
  font-size: 20vw;
  font-weight: 700;
  color: $color-secondary;
}

.title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 38px;
  line-height: 1.2;

  @media (max-width: $bp-md) {
    font-size: 24px;
    margin-bottom: 24px;
  }
}

.note {
  font-size: 24px;

  @media (max-width: $bp-md) {
    font-size: 18px;
  }
}

.action {
  margin-top: 68px;

  @media (max-width: $bp-md) {
    font-size: 32px;
  }
}
</style>
