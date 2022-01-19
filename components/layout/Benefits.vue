<template>
  <div :class="$style['benefits']">
    <div class="container">
      <div v-if="false" class="row align-items-center justify-content-between">
        <div class="col-md-6 col-xxl-5">
          <div :class="$style['compare']">
            <div :class="$style['compare-item']">
              <div :class="$style['compare-image']">
                <img src="~/assets/images/benefits/benefits-compare-item-1.png" alt="">
              </div>
              <div :class="$style['compare-text']">
                {{ $t('benefits_sigarete') }}
              </div>
            </div>
            <div :class="$style['compare-vs']">VS</div>
            <div :class="$style['compare-item']">
              <div :class="$style['compare-image']">
                <img src="~/assets/images/benefits/benefits-compare-item-2.png" alt="">
              </div>
              <Logo :class="$style['compare-logo']" />
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xxl-5">
          <div :class="$style['note']">
            {{ $t('benefits_note') }}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h2 :class="$style['title']" data-title-line>
            {{ $t('benefits_title') }}
          </h2>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-3">
          <div :class="$style['item']" v-scroll-reveal>
            <div :class="$style['item-icon']">
              <img src="~/assets/images/benefits/without-dirty.svg" alt="">
            </div>
            <div :class="$style['item-text']">
              {{ $t('benefits_item_1') }}
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-3">
          <div :class="$style['item']" v-scroll-reveal="{ delay: 400 }">
            <div :class="$style['item-icon']">
              <img src="~/assets/images/benefits/long-perfomance.svg" alt="">
            </div>
            <div :class="$style['item-text']">
              {{ $t('benefits_item_2') }}
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-3">
          <div :class="$style['item']" v-scroll-reveal="{ delay: 800 }">
            <div :class="$style['item-icon']">
              <img src="~/assets/images/benefits/everywhere-used.svg" alt="">
            </div>
            <div :class="$style['item-text']">
              {{ $t('benefits_item_3') }}
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-3">
          <div :class="$style['item']" v-scroll-reveal="{ delay: 1200 }">
            <div :class="$style['item-icon']">
              <img src="~/assets/images/benefits/boost.svg" alt="">
            </div>
            <div :class="$style['item-text']">
              {{ $t('benefits_item_4') }}
            </div>
          </div>
        </div>
        <div class="col-md-6 col-md-offset-6">
          <div class="text-x2 desktop:mt-5 mobile:mv-2">
            <span v-if="$i18n.locale != 'uz'">*Табак нагревается, а не горит. По сравнению с сигаретой при курении. Данный продукт не является продуктом без риска и содержит никотин, который вызывает привыкание.</span>
            <span v-else>*Tamaki qizdiriladi, yonmaydi. Chekiladigan sigareta bilan taqqoslaganda. Ushbu mahsulot xavfsiz mahsulot hisoblanmaydi va uning tarkibida o'rganib qolish mumkin bo'lgan qaramlikni keltirib chiqaradigan nikotin mavjud.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.benefits {
  padding: 160px 0;

  @media (max-width: $bp-lg) {
    padding: 96px 0;
  }

  @media (max-width: $bp-md) {
    padding: 64px 0;
  }
}

.compare {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 350px;
  margin-bottom: 80px;

  @media (max-width: $bp-md) {
    width: 100%;
  }
}

.compare-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.compare-image {
  img {
    max-width: 100%;
  }
}

.compare-text {
  position: absolute;
  font-size: 24px;
  font-weight: 700;
  color: $color-secondary;
  bottom: 0;
}

.compare-logo {
  position: absolute;
  bottom: 0;
}

.compare-vs {
  font-weight: 700;
  color: $color-secondary;
  letter-spacing: 2px;

  @media (max-width: $bp-sm) {
    margin-top: 316px;
    font-weight: normal;
  }
}

.note {
  font-size: 24px;
  color: $color-secondary;
  font-weight: 600;

  @media (max-width: $bp-lg) {
    font-size: 20px;
  }
}

.title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 82px;
  margin-top: 60px;

  @media (max-width: $bp-md) {
    font-size: 24px;
  }
}

.item {
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: $bp-lg) {
    margin-bottom: 85px;
  }

  @media (max-width: $bp-sm) {
    flex-direction: row;
  }
}

.item-icon {
  @media (max-width: $bp-sm) {
    margin-right: 32px;
  }
}

.item-text {
  margin-top: 64px;
  font-weight: 700;
  color: $color-secondary;
  text-align: center;
  font-size: 24px;

  @media (max-width: $bp-sm) {
    font-size: 18px;
    font-weight: normal;
    margin-top: 0;
    text-align: left;
  }
}
</style>
