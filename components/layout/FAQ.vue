<template>
  <div :class="$style['faq']">
    <div class="container">
      <h2
        :class="$style['title']"
        v-scroll-reveal
        data-title-line>
        {{ $t('faq_title') }}
      </h2>
      <div :class="$style['image']" v-lazy-load v-scroll-reveal="{ origin: 'right' }">
        <img data-src="~/assets/images/faq-image.png" alt="" data-aos="fade-left">
      </div>

      <div class="row" v-scroll-reveal>
        <div class="col-md-3">
          <div :class="$style['faq-title']">{{ $t('faq_what_is_glo') }}</div>
          <div :class="$style['faq-links']">
            <a
              href="/"
              :class="$style['faq-link']"
              v-for="link in links"
              :key="link.name"
            >{{ link.name }}</a>
          </div>
        </div>
        <div class="col-md-6">
          <div
            itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"
            :class="[$style['faq-item'], selected === index && $style['is-selected']]"
            v-for="(item, index) in list"
            :key="`faq-${index}`"
          >
            <div
              :class="$style['faq-headline']"
              @click="onClickItem(index)"
            >
              <div :class="$style['faq-caret']">
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.292893 0.304612C0.683418 -0.0859123 1.31658 -0.0859123 1.70711 0.304612L6 4.59751L10.2929 0.304612C10.6834 -0.0859118 11.3166 -0.0859118 11.7071 0.304612C12.0976 0.695137 12.0976 1.3283 11.7071 1.71883L6.70711 6.71883C6.51957 6.90636 6.26522 7.01172 6 7.01172C5.73478 7.01172 5.48043 6.90636 5.29289 6.71883L0.292893 1.71883C-0.0976311 1.3283 -0.0976311 0.695136 0.292893 0.304612Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h4 itemprop="name">{{ $t(`faq_item_question_${item}`) }}</h4>
            </div>
            <TransitionExpand>
              <div
                itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"
                :class="$style['faq-content']"
                v-if="selected === index"
              >
                <div 
                  itemprop="text"
                  :class="$style['faq-content-inner']" v-html="$t(`faq_item_answer_${item}`)">
                </div>
              </div>
            </TransitionExpand>
          </div>
          <Button
            :class="[$style['button'], $style['is-centered']]"
            @click="$router.push({
            name: `faq___${$i18n.locale}`,
          })">{{ $t('faq_more') }}</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: 0,
        links: [],
      }
    },
    computed: {
      list() {
        let count = 0
        Object.keys(this.$i18n.messages.ru).forEach(key => {
          if(key.startsWith('faq_item_question')) {
            count = count + 1
          }
        })

        return count
      }
    },
    methods: {
      onClickItem(index) {
        if(this.selected === index) {
          return this.selected = null
        }
        this.selected = index
      }
    }
  }
</script>

<style lang="scss" module>

  .button {
    &.is-centered {
      display: flex;
      margin: auto;
      margin-top: 20px;
    }
  }

  .faq {
    padding: 170px 0;
    position: relative;
    overflow: hidden;
  }

  .image {
    position: absolute;
    bottom: 0;
    width: 900px;
    left: calc(100% - 28vw);

    img {
      max-width: 100%;
    }

    @media (max-width: $bp-xxl) {
      width: 70vw;
      top: 25%;
    }

    @media (max-width: $bp-md) {
      display: none;
    }
  }

  .title {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 80px;

    @media (max-width: $bp-md) {
      font-size: 24px;
    }
  }

  .faq-title {
    font-size: 26px;
    font-weight: 700;
    color: $color-accent;
    margin-bottom: 32px;
  }

  .faq-links {
    display: flex;
    flex-direction: column;
    margin-bottom: 46px;
  }

  .faq-link {
    font-size: 24px;
    color: $color-default;

    @media (max-width: $bp-sm) {
      font-size: 18px;
    }

    &:not(:last-child) {
      margin-bottom: 24px;
    }

    &:hover {
      color: $color-accent;
    }
  }

  .faq-headline {
    display: flex;
    font-size: 24px;
    cursor: pointer;
    margin-bottom: 16px;

    &:hover {
      color: $color-accent;
    }
  }

  .faq-caret {
    margin-right: 12px;
  }

  .faq-content {
    color: $color-secondary;
    font-size: 18px;
    padding-left: 24px;
    // margin-bottom: 24px;
  }

  .faq-content-inner {
    margin-bottom: 24px;
  }

  .is-selected {
    .faq-headline {
      color: $color-accent;
    }
  }
</style>
