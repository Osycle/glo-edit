<template>
  <div :class="$style['slide']"
       @click="$router.push({
          name: `summer-leb___${$i18n.locale}`,
       })">
    <div :class="$style['bg']">
      <picture>
        <source media="(max-width: 420px)" :srcset="require(`../../assets/images/hero/promo/mobile-hero-bg-promo-${name}.png`)">
        <source media="(max-width: 992px)" :srcset="require(`../../assets/images/hero/promo/tablet-hero-bg-promo-${name}.png`)">
        <img data-not-lazy :src="require(`../../assets/images/hero/promo/hero-bg-promo-${name}.png`)" :alt="false">
      </picture>
    </div>
    <div :class="$style['grid']">
      <div :class="$style['text']">
        <div :class="$style['title']">glo hyper+</div>
        <div :class="$style['note']" v-html="$t('hero_carousel_title')"></div>
      </div>
      <div :class="$style['product']">
        <div :class="$style['product-image']">
          <img data-not-lazy :src="require(`../../assets/images/hero/promo/product-item-${name}.png`)" :alt="false">
        </div>
      </div>
      <div :class="$style['actions']" class="mt-4">
        <Button
          :class="$style['button']"
          @click="$router.push({
            name: `summer-leb___${$i18n.locale}`,
          })">{{ $t('hero_button_text') }}</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" module>
.slide {
  width: 100%;
  min-height: 910px;
  position: relative;
  background-color: $color-white;
  cursor: pointer;

  @media (max-width: $bp-xxxl - 0.02) {
    min-height: 850px;
  }

  @media (max-width: $bp-lg - 0.02) {
    min-height: 980px;
  }

  @media (max-width: $bp-md - 0.02) {
    min-height: 890px;
  }

  @media (max-width: $bp-sm - 0.02) and (min-width: $bp-xs) {
    min-height: 720px;
  }

  @media (max-width: $bp-xs - 0.02) and (min-width: $bp-xxs) {
    min-height: 780px;
  }

  @media (max-width: $bp-xxs) and (min-width: $bp-xxxs - 0.02) {
    min-height: 700px;
  }

  @media (max-width: $bp-xxxs - 0.02) {
    min-height: 680px;
  }
}

.bg {
  position: absolute;
  top: 0;
  width: 100%;

  img {
    width: 100%;
  }
}

.grid {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  position: absolute;
  bottom: 130px;
  padding: 0 0 0 64px;

  @media (max-width: $bp-md) {
    bottom: 80px;
    padding: 0 16px;
  }
}

.text {
  width: 60%;

  @media (max-width: $bp-md) {
    width: 50%;
  }
}

.title {
  font-size: 64px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 24px;
  word-wrap: break-word;

  @media (max-width: $bp-md) {
    font-size: 42px;
  }

  @media (max-width: $bp-xs - 0.02) {
    font-size: 28px;
  }

  @media (max-width: $bp-xxs - 0.02) {
    // font-size: 28px;
    width: 140px;
  }

  @media (max-width: $bp-xxxs) {
    width: 120px;
  }

}

.note {
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
  word-wrap: break-word;

  br {
    display: none;
  }

  @media (max-width: $bp-xl) {
    font-size: 36px;
  }

  @media (max-width: $bp-md) {
    font-size: 24px;
    br {
      display: block;
    }
  }

  @media (max-width: $bp-sm) {
    font-size: 18px;
  }

  @media (max-width: $bp-xxs) {
    font-size: 14px;
  }
}

.actions {
  width: 100%;
}

.button {
  white-space: pre-wrap !important;
  width: 430px;

  @media (max-width: $bp-md) {
    width: 60%;
  }

  @media (max-width: $bp-sm) {
    width: 100%;
  }
}

.product {
  display: flex;
  align-items: flex-end;
  width: 40%;
  margin-bottom: -200px;

  @media (max-width: $bp-lg) {
    flex-direction: column;
  }

  @media (max-width: $bp-md) {
    margin-bottom: -30px;
    width: 50%;
  }
}

.product-image {
  @media (max-width: $bp-md) {
    margin-bottom: -130px;
  }

  @media (max-width: $bp-sm) {
    margin-right: -20%;
    margin-bottom: 0;
  }

  img {
    max-width: 680px;

    @media (max-width: $bp-xxl) {
      max-width: 40vw;
    }

    @media (max-width: $bp-md) {
      max-width: 55vw;
    }

    @media (max-width: $bp-sm) {
      max-width: 250px;
    }

    @media (max-width: $bp-xxxs) {
      max-width: 200px;
    }
  }
}
</style>
