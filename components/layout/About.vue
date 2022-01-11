<template>
  <div :class="$style['about']" id="about">
    <div class="container-fluid">
      <div class="row align-items-center text-center">
        <h1>Система нагревания табака glo hyper+</h1>
      </div>
      <div class="row align-items-center">
        <div class="col-sm" v-scroll-reveal="{ origin: 'left' }">
          <img height="915" width="849" data-src="~/assets/images/product-globe.png" :class="$style['image']" alt="" v-lazy-load>
        </div>
        <div class="col-sm">
          <div :class="$style['content']">
            <h2 :class="$style['title']" data-title-line v-scroll-reveal>{{ $t('about_title') }}</h2>
            <div :class="$style['note']" v-html="$t('about_content_1')" v-scroll-reveal></div>
            <div :class="$style['note']" v-html="$t('about_content_2')" v-scroll-reveal></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.about {
  padding: 100px 0;

  @media (max-width: $bp-sm) {
    padding: 64px 0;
  }
}

.image {
  max-width: 100%;
  height: 100%;
}

.title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 60px;

  @media (max-width: $bp-lg) {
    font-size: 24px;
  }
}

.note {
  font-size: 24px;
  color: $color-secondary;
  max-width: 460px;

  @media (max-width: $bp-xl) {
    font-size: 18px;
  }

  &:last-child {
    margin-top: 32px;
  }
}
</style>
