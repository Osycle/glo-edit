<template>
  <div :class="$style['hero']">
    <div :class="$style['columns']">
      <div :class="$style['column']" data-image="human">
        <img v-lazy-load :class="$style['column-image']" src="~/assets/images/hero/hero-background-human.webp" alt="">

        <div>
          <div :class="$style['brand']">
            <div :class="$style['brand-title']">glo hyper+ </div>
            <div :class="$style['brand-note']">
              <span v-html="$t('hero_title')"></span>
              <!-- <HelpInfo :class="$style['brand-help']"
                :size="18"
                :options="{ content: $t('hero_note') }"
              /> -->
            </div>
          </div>
        </div>

        <div :class="$style['info']">
          <ContactLink type="phone" />
          <ContactLink type="bot" />
          <div class="limbo-text">
            <div v-if="$i18n.locale != 'uz'">*Данный продукт не является продуктом без риска и содержит никотин, который вызывает привыкание. Сравнение дыма в стандартной сигарете (примерно 9 мг смол) и пара от glo в среднем по 9 типам вредных веществ, употребление которых Всемирная организация здравоохранения рекомендует уменьшить в сигаретном дыме.</div>
            <div v-else>*Ushbu mahsulot xavfsiz mahsulot hisoblanmaydi va uning tarkibida qaramlikni keltirib chiqaradigan nikotin mavjud. Standart sigaretadagi tutun (taxminan 9 mg smola) va glo dan chiqayotgan bug' ichidagi, Jahon sog'liqni saqlash tashkiloti sigareta tutuni tarkibida kamaytirishni tavsiya qiladigan zaharli moddalarning o'rtacha 9 turi bo'yicha taqqoslanganda.</div>
          </div>
        </div>

      </div>
      <div :class="$style['column']" data-image="blue">
        <img :class="$style['column-image']" src="~/assets/images/hero/hero-background-blue.webp" alt="">
        <div>
          <div :class="$style['note']" v-html="$t('hero_desc')"></div>
        </div>
        <div :class="$style['products']">
          <!-- data-not-lazy -->
          <img v-lazy-load src="~/assets/images/hero/product-white.webp" data-product="white" alt="">
          <img v-lazy-load src="~/assets/images/hero/product-black.webp" data-product="black" alt="">
        </div>
      </div>
      <div :class="$style['column']" data-image="red">
        <img :class="$style['column-image']" src="~/assets/images/hero/hero-background-red.webp" alt="">
        <Logo :class="$style['product-logo']"/>
      </div>

    </div>
    <div class="limbo-text hidden-md hidden-lg">
      <div v-if="$i18n.locale != 'uz'">*Данный продукт не является продуктом без риска и содержит никотин, который вызывает привыкание. Сравнение дыма в стандартной сигарете (примерно 9 мг смол) и пара от glo в среднем по 9 типам вредных веществ, употребление которых Всемирная организация здравоохранения рекомендует уменьшить в сигаретном дыме.</div>
      <div v-else>*Ushbu mahsulot xavfsiz mahsulot hisoblanmaydi va uning tarkibida qaramlikni keltirib chiqaradigan nikotin mavjud. Standart sigaretadagi tutun (taxminan 9 mg smola) va glo dan chiqayotgan bug' ichidagi, Jahon sog'liqni saqlash tashkiloti sigareta tutuni tarkibida kamaytirishni tavsiya qiladigan zaharli moddalarning o'rtacha 9 turi bo'yicha taqqoslanganda.</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.limbo-text{
  max-width: 700px;
  margin: 30px 30px 30px 64px;
  position: absolute;
  bottom: 100px;
  left: 0;
  font-size: 11px;
  @media (max-width: 1900px) and (min-width: 1401px){
    bottom: calc(-10vw + 280px);
  }
  @media (max-width: 991px){
    margin: 15px 20px;
    margin-bottom: 80px;
    position: relative;
    //top: 100%;
    bottom: 0;
  }
}

</style>

<style lang="scss" module>

.hero {
  display: flex;
  flex-direction: column;
  height: 1020px;
  background-color: $color-light;
  position: relative;
  width: 100%;

  @media (max-width: $bp-xxl) {
    height: 900px;
  }

  @media (max-width: $bp-md) {
    height: calc(668px + 180px);
  }

  @media (max-width: $bp-sm) {
    height: calc(722px + 200px);
  }
}

.columns {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  overflow: hidden;

  @media (max-width: $bp-lg) {
    flex-wrap: wrap;
    position: relative;
  }
}

.column {
  position: relative;

  &[data-image="human"] {
    margin-right: -100px;
    z-index: 1;

    @media (max-width: $bp-lg) {
      margin-right: 0;

      > img {
        position: absolute;
        left: 100%;
        top: 30%;
        width: 100%;
        height: 300px;
        object-fit: cover;
      }
    }

    @media (max-width: $bp-md) {
      > img {
        height: 220px;
      }
    }

    @media (max-width: $bp-sm) {
      > img {
        width: 300px;
      }
    }
  }

  &[data-image="blue"] {
    @media (max-width: $bp-lg) {
      > img {
        position: absolute;
        left: -100%;
        top: 8%;
        width: 100%;
        height: 400px;
        object-fit: cover;
      }
    }

    @media (max-width: $bp-lg) {
      > img {
        height: 334px;
      }
    }
  }

  &[data-image="red"] {
    @media (max-width: $bp-lg) {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;

      > img {
        width: 50%;
        height: 318px;
        object-fit: cover;
      }
    }
    @media (max-width: $bp-md) {
      img {
        width: 30%;
        height: 220px;
      }
    }
    @media (max-width: $bp-sm) {
      img {
        width: 50%;
      }
    }
  }

  @media (max-width: $bp-lg) {
    width: 50%;
  }
}

.column-image {
  width: 100%;
}

.brand {
  max-width: 342px;
  margin-top: 30px;
  margin-left: 64px;

  @media (max-width: $bp-lg) {
    margin-left: 16px;
  }
}

.brand-title {
  font-size: 64px;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: $bp-xl) {
    font-size: 42px;
  }

  @media (max-width: $bp-lg) {
    font-size: 64px;
    white-space: nowrap;
    position: absolute;
    bottom: 260px;
  }

  @media (max-width: $bp-md) {
    font-size: 42px;
    white-space: normal;
    bottom: 220px;
  }
}
.brand-note {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.4;

  @media (max-width: $bp-xxl) {
    font-size: 24px;
  }

  @media (max-width: $bp-lg) {
    position: absolute;
    bottom: 100px;
  }

  @media (max-width: $bp-md) {
    font-size: 20px;
    bottom: 80px;
  }
}

.brand-help {
  transform: translateY(-8px);
}

.info {
  display: flex;
  margin-top: 40px;
  margin-left: 64px;
  color: $color-secondary;

  @media (max-width: $bp-lg) {
    display: none;
  }
}

.info-item {
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  color: $color-secondary;

  &:hover {
    color: $color-accent;
  }

  @media (max-width: $bp-xxl) {
    font-size: 18px;
  }

  &:not(:last-child) {
    margin-right: 65px;
  }

  img {
    margin-right: 16px;
  }
}

.note {
  margin-top: 30px;
  font-size: 36px;
  font-weight: 700;
  max-width: 284px;
  line-height: 1.2;
  text-transform: uppercase;
  color: $color-secondary;

  @media (max-width: $bp-xxl) {
    font-size: 24px;
  }

  @media (max-width: $bp-xl) {
    font-size: 20px;
  }

  @media (max-width: $bp-lg) {
    position: absolute;
    bottom: 20px;
    font-size: 18px;
    left: calc(-100% + 16px);

    > * {
      display: none;
    }
  }

  @media (max-width: $bp-md) {
    text-transform: none;
    font-weight: normal;
  }

  @media (max-width: $bp-sm) {
    font-size: 16px;
    > * {
      display: inline;
    }
  }
}

.content-note {
  position: absolute;
  bottom: 74px;
  left: 64px;
  width: 60vw;
  color: $color-secondary;
  font-size: 18px;
  line-height: 1.2;

  @media (max-width: $bp-xxl) {
    font-size: 14px;
  }

  @media (max-width: $bp-xl) {
    bottom: 24px;
  }
}

.products {
  position: absolute;
  width: 100%;
  bottom: 0;
  right: 0;
  z-index: 1;

  img {
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 100%;

    &[data-product="white"] {
      right: 30%;
      bottom: 130px;
    }

    &[data-product="black"] {
      right: 12%;
    }

    @media (max-width: $bp-xxl) {
      width: 180px;
    }

    @media (max-width: $bp-lg) {
      width: 120px;

      &[data-product="white"] {
        left: 5%;
        bottom: 80px;
      }

      &[data-product="black"] {
        left: 20%;
      }
    }

    @media (max-width: $bp-md) {
      width: 80px;
    }
  }

  @media (max-width: $bp-md) {
    bottom: 10%;
  }
}

.product-logo {
  position: absolute;
  bottom: 40px;
  right: 0;
  width: 280px;

  @media (max-width: $bp-xxl) {
    width: 120px;
    right: 20%;
  }

  @media (max-width: $bp-lg) {
    width: 120px;
    right: 10%;
  }

  @media (max-width: $bp-lg) {
    width: 90px;
  }
}
</style>
