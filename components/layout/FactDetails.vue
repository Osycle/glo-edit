<template>
  <div :class="$style['container']">
    <div class="container">
      <div class="row">
        <div class="col-lg-5" v-scroll-reveal>
          <h2 :class="$style['title']" data-title-line  v-html="$t('fact_details_title')"></h2>
          <div :class="$style['note']">{{ $t('fact_details_content') }}</div>
          <div class="text-x2 mv-3 mobile:mv-2">
            <span v-if="$i18n.locale != 'uz'">*Данный продукт не является продуктом без риска и содержит никотин, который вызывает привыкание. Сравнение дыма в стандартной сигарете (примерно 9 мг смол) и пара от glo в среднем по 9 типам вредных веществ, употребление которых Всемирная организация здравоохранения рекомендует уменьшить в сигаретном дыме.</span>
            <span v-else>*Ushbu mahsulot xavfsiz mahsulot hisoblanmaydi va uning tarkibida  qaramlikni keltirib chiqaradigan nikotin mavjud. Standart sigaretadagi tutun (taxminan 9 mg smola) va glo dan chiqayotgan bug' ichidagi, Jahon sog'liqni saqlash tashkiloti sigareta tutuni tarkibida kamaytirishni tavsiya qiladigan zaharli moddalarning o'rtacha 9 turi bo'yicha taqqoslanganda.</span>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="row">
            <div class="col-md-6" v-scroll-reveal="{ delay: 400 }">
              <div :class="$style['fact']" data-fact="normal">
                <div :class="$style['fact-image']">
                  <img data-src="~/assets/images/fact-details-good.svg" alt=""  v-lazy-load>
                </div>
                <div :class="$style['fact-text']" v-html="$t('fact_details_normal')"></div>
              </div>
            </div>
            <div class="col-md-6" v-scroll-reveal="{ delay: 800 }">
              <div :class="$style['fact']" data-fact="hot">
                <div :class="[$style['fact-image'], $style['is-secondary']]">
                  <img data-src="~/assets/images/fact-details-bad.jpg" alt="" v-lazy-load>
                </div>
                <div :class="$style['fact-text']" v-html="$t('fact_details_hot')"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.container {
  background: url('~/assets/images/fact-details-bg.jpg') 0 0;
  min-height: 924px;
  display: flex;
  align-items: center;
  padding: 80px 0;
}

.title {
  font-size: 36px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 70px;

  @media (max-width: $bp-md) {
    font-size: 24px;
  }

  &::before {
    background-color: $color-accent;
    bottom: -32px;
  }

  span {
    background: -webkit-linear-gradient(45deg, #FC9852, $color-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.note {
  color: $color-secondary;
  font-size: 24px;
  font-weight: 300;
  line-height: 1.6;

  @media (max-width: $bp-lg) {
    font-size: 18px;
    margin-bottom: 60px;
  }
}

.fact {
  text-align: center;

  &[data-fact="normal"] {
    color: $color-success;
    margin-bottom: 80px;
  }

  &[data-fact="hot"] {
    color: $color-accent;
  }
}

.fact-text {
  font-weight: 700;
  font-size: 18px;
  max-width: 340px;
  margin: auto;
}

.fact-image {
  img {
    max-width: 100%;

    @media (max-width: $bp-md) {
      max-width: 227px;
    }
  }

  &.is-secondary {
    transform: scale(0.6);
  }
}
</style>
