<template>
  <div :class="$style['promo']">
    <div :class="$style['products']">
      <div :class="$style['headline']">
        <div class="container container-middle">
          <div class="row">
            <div class="col col-md-10 col-lg-7 offset-md-1 offset-lg-3">
              <div :class="$style['title']">{{ $t('promo_title') }}</div>
              <div :class="$style['note']" v-html="$t('promo_note')"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="container container-middle">
        <div class="row g-0 justify-content-center">
          <div class="col-sm-5 mb-md-0 mb-5">
            <div :class="$style['product']">
              <img :class="$style['product-image']" src="~@/components/promo/assets/product-timati.png" alt="">
            </div>
          </div>
          <div class="col-sm-5">
            <div :class="$style['product']">
              <img :class="$style['product-image']" src="~@/components/promo/assets/product-buzova.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style['presents']">
      <div class="container container-middle">
        <div class="row">
          <div class="col-lg-5">
            <div :class="$style['info']">
              <div :class="$style['info-text']" v-html="$t('promo_info')"></div>
              <div :class="$style['info-steps']">
                <div :class="$style['info-step']" data-count="1">
                  {{ $t('promo_step_1_text') }}
                </div>
                <div :class="$style['info-step']" data-count="2">
                  {{ $t('promo_step_2_text') }}
                </div>
                <div :class="$style['info-step']" data-count="3">
                  {{ $t('promo_step_3_text') }}
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 offset-lg-1">
            <div :class="$style['present-list']">
              <div :class="$style['present']" data-present="X440">
                <img :class="$style['present-image']" src="~@/components/promo/assets/jbl.png" alt="">
              </div>
              <div :class="$style['present']" data-present="X10">
                <img :class="$style['present-image']" src="~@/components/promo/assets/iphone-x10.png" alt="">
              </div>
              <div :class="$style['present']" data-present="X240">
                <img :class="$style['present-image']" src="~@/components/promo/assets/jbl-2.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style['controls']">
      <div class="container container-middle">
        <div class="row justify-content-center">
          <div class="col-12">
            <Button
              tag="a"
              rel="nofollow"
              :href="contacts.bot.path"
              target="_blank"
              block
            >{{ $t('promo_button_get') }}</Button>
          </div>
          <div class="col mt-5 text-center">
            <a href="https://telegra.ph/Usloviya-konkursa-Rozygrysh-ot-glo-cherez-aktivaciyu-garantii-08-02" :class="$style['link']" target="_blank" rel="nofollow">{{ $t('promo_button_about') }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'promo',
  computed: {
    contacts() {
      return this.$store.state.app.contacts
    },
  },
}
</script>

<style lang="scss" module>
.promo {
  min-height: 100vh;
  background-color: $color-default;
  color: $color-white;
  padding-top: 55px;
  overflow-x: hidden;
}

.headline {
  margin-bottom: 60px;
  position: relative;

  &::before,
  &::after {
    top: 0;
    content: '';
    position: absolute;
    width: 370px;
    height: 684px;

    @media (max-width: $bp-sm) {
      display: none;
    }
  }

  &::before {
    left: 0;
    background: url('~@/components/promo/assets/left-block.jpg') no-repeat 0 0;

    @media (max-width: $bp-xxxl) {
      left: -200px;
    }

    @media (max-width: $bp-xl) {
      left: -300px;
    }

    @media (max-width: $bp-md) {
      left: -220px;
      width: 240px;
      height: 544px;
    }
  }

  &::after {
    right: 0;
    background: url('~@/components/promo/assets/right-block.jpg') no-repeat 0 0;

    @media (max-width: $bp-xxxl) {
      right: -200px;
    }

    @media (max-width: $bp-xl) {
      right: -300px;
    }

    @media (max-width: $bp-md) {
      right: -220px;
      width: 240px;
      height: 544px;
    }
  }
}

.title {
  font-size: 42px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: $color-accent;
  margin-bottom: 24px;

  @media (max-width: $bp-md) {
    font-size: 36px;
  }
}

.note {
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;

  span {
    color: $color-accent;
  }

  @media (max-width: $bp-md) {
    font-size: 14px;
  }
}

.link {
  font-size: 20px;
  color: $color-accent;
}

.info-text {
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 600;

  span {
    color: $color-accent;
  }
}

.info-steps {
  margin-top: 78px;
}

.info-step {
  font-size: 24px;
  font-weight: 600;
  position: relative;
  padding-left: 70px;

  &:not(:last-child) {
    margin-bottom: 32px;
  }

  &::before {
    content: attr(data-count);
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $color-accent;
    line-height: 0.8;
    border-radius: 50%;
  }
}

.presents {
  margin-top: 174px;
  position: relative;
  z-index: 2;

  @media (max-width: $bp-md) {
    margin-bottom: 50px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    max-width: 680px;
    height: 530px;
    background-color: #6A6A6A;
    border-radius: 50%;
    filter: blur(200px);
    opacity: 0.3;
    z-index: 1;
    pointer-events: none;
  }
}

.present-list {
  display: flex;
  flex-wrap: wrap;

  @media (max-width: $bp-lg) {
    margin-top: 120px;
    align-items: center;
  }
}

.present {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 50%;

  @media (max-width: $bp-lg) and (min-width: $bp-sm) {
    width: 33.33%;
  }

  // &[data-present="X240"] {
  //   @media (min-width: $bp-lg) {
  //     margin-top: 80px;
  //   }

  //   .present-wrap {
  //     width: 16rem;
  //     height: 16rem;
  //   }
  // }

  // &[data-present="X440"] {
  //   .present-wrap {
  //     width: 13.3125rem;
  //     height: 17.25rem;
  //   }
  // }
}

.present-image {
  max-width: 100%;
  position: relative;


  [data-present="X10"] & {
    position: absolute;

    @media (max-width: $bp-lg) and (min-width: $bp-sm) {
      position: static;
    }

    @media (max-width: $bp-sm) {
      margin-top: -120px;
      max-width: 80%;
    }
  }
}

.products {
  position: relative;
  z-index: 0;

  @media (max-width: $bp-md) {
    margin-top: 80px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    max-width: 980px;
    height: 240px;
    background-color: #6A6A6A;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.3;
    z-index: -1;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: -200px;
    left: 0;
    width: 100%;
    height: 1102px;
    background: url('~@/components/promo/assets/waves.svg') no-repeat 60% 0%;
    z-index: -1;
    pointer-events: none;
  }
}

.product {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: $bp-sm) {
    padding: 0 20px;
  }
}

.product-image {
  max-width: 100%;
}

.controls {
  margin-top: 98px;
  margin-bottom: 120px;
}
</style>
