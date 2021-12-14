<template>
  <div class="faq">
    <div class="container">
      <h1
              class="title"
              v-scroll-reveal
              data-title-line>
        {{ $t('faq_title') }}
      </h1>
      <div class="image" v-lazy-load v-scroll-reveal="{ origin: 'right' }">
        <img data-src="~/assets/images/faq-image.png" alt="" data-aos="fade-left">
      </div>

      <div class="row" v-scroll-reveal>

        <div class="faq-title">{{ $t('faq_what_is_glo') }}</div>

        <tabs :options="{ useUrlFragment: false }"
              class="faq-tabs">

          <tab :name="$t('faq_link_about')">
            <div
                class="faq-item" :class="selected === index && 'is-selected'"
                v-for="(item, index) in listAbout"
                :key="`faq-${index}`"
            >
              <div class="faq-headline"
                  @click="onClickItem(index)">
                <div class="faq-caret">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.304612C0.683418 -0.0859123 1.31658 -0.0859123 1.70711 0.304612L6 4.59751L10.2929 0.304612C10.6834 -0.0859118 11.3166 -0.0859118 11.7071 0.304612C12.0976 0.695137 12.0976 1.3283 11.7071 1.71883L6.70711 6.71883C6.51957 6.90636 6.26522 7.01172 6 7.01172C5.73478 7.01172 5.48043 6.90636 5.29289 6.71883L0.292893 1.71883C-0.0976311 1.3283 -0.0976311 0.695136 0.292893 0.304612Z" fill="currentColor"/>
                  </svg>
                </div>
                {{ $t(`faq_about_question_${item}`) }}
              </div>
              <TransitionExpand>
                <div class="faq-content"
                    v-if="selected === index">
                  <div class="faq-content-inner" v-html="$t(`faq_about_answer_${item}`)">
                  </div>
                </div>
              </TransitionExpand>
            </div>
          </tab>

          <tab :name="$t('faq_link_char')">
            <div class="faq-item" :class="selected === index && 'is-selected'"
                v-for="(item, index) in listChar"
                :key="`faq-${index}`">
              <div class="faq-headline"
                  @click="onClickItem(index)">
                <div class="faq-caret">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.304612C0.683418 -0.0859123 1.31658 -0.0859123 1.70711 0.304612L6 4.59751L10.2929 0.304612C10.6834 -0.0859118 11.3166 -0.0859118 11.7071 0.304612C12.0976 0.695137 12.0976 1.3283 11.7071 1.71883L6.70711 6.71883C6.51957 6.90636 6.26522 7.01172 6 7.01172C5.73478 7.01172 5.48043 6.90636 5.29289 6.71883L0.292893 1.71883C-0.0976311 1.3283 -0.0976311 0.695136 0.292893 0.304612Z" fill="currentColor"/>
                  </svg>
                </div>
                {{ $t(`faq_char_question_${item}`) }}
              </div>
              <TransitionExpand>
                <div class="faq-content"
                    v-if="selected === index">
                  <div class="faq-content-inner" v-html="$t(`faq_char_answer_${item}`)">
                  </div>
                </div>
              </TransitionExpand>
            </div>
          </tab>

          <tab :name="$t('faq_link_search')">
            <div class="faq-item" :class="selected === index && 'is-selected'"
                v-for="(item, index) in listSearch"
                :key="`faq-${index}`">
              <div class="faq-headline"
                  @click="onClickItem(index)">
                <div class="faq-caret">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.304612C0.683418 -0.0859123 1.31658 -0.0859123 1.70711 0.304612L6 4.59751L10.2929 0.304612C10.6834 -0.0859118 11.3166 -0.0859118 11.7071 0.304612C12.0976 0.695137 12.0976 1.3283 11.7071 1.71883L6.70711 6.71883C6.51957 6.90636 6.26522 7.01172 6 7.01172C5.73478 7.01172 5.48043 6.90636 5.29289 6.71883L0.292893 1.71883C-0.0976311 1.3283 -0.0976311 0.695136 0.292893 0.304612Z" fill="currentColor"/>
                  </svg>
                </div>
                {{ $t(`faq_search_question_${item}`) }}
              </div>
              <TransitionExpand>
                <div class="faq-content"
                    v-if="selected === index">
                  <div class="faq-content-inner" v-html="$t(`faq_search_answer_${item}`)">
                  </div>
                </div>
              </TransitionExpand>
            </div>
          </tab>

          <tab :name="$t('faq_link_garanty')">
            <div class="faq-item" :class="selected === index && 'is-selected'"
                v-for="(item, index) in listGaranty"
                :key="`faq-${index}`">
              <div class="faq-headline"
                  @click="onClickItem(index)">
                <div class="faq-caret">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.304612C0.683418 -0.0859123 1.31658 -0.0859123 1.70711 0.304612L6 4.59751L10.2929 0.304612C10.6834 -0.0859118 11.3166 -0.0859118 11.7071 0.304612C12.0976 0.695137 12.0976 1.3283 11.7071 1.71883L6.70711 6.71883C6.51957 6.90636 6.26522 7.01172 6 7.01172C5.73478 7.01172 5.48043 6.90636 5.29289 6.71883L0.292893 1.71883C-0.0976311 1.3283 -0.0976311 0.695136 0.292893 0.304612Z" fill="currentColor"/>
                  </svg>
                </div>
                {{ $t(`faq_garanty_question_${item}`) }}
              </div>
              <TransitionExpand>
                <div class="faq-content"
                    v-if="selected === index">
                  <div class="faq-content-inner" v-html="$t(`faq_garanty_answer_${item}`)">
                  </div>
                </div>
              </TransitionExpand>
            </div>
          </tab>

          <tab :name="$t('faq_link_care')">
            <div class="faq-item" :class="selected === index && 'is-selected'"
                v-for="(item, index) in listCare"
                :key="`faq-${index}`">
              <div class="faq-headline"
                  @click="onClickItem(index)">
                <div class="faq-caret">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.304612C0.683418 -0.0859123 1.31658 -0.0859123 1.70711 0.304612L6 4.59751L10.2929 0.304612C10.6834 -0.0859118 11.3166 -0.0859118 11.7071 0.304612C12.0976 0.695137 12.0976 1.3283 11.7071 1.71883L6.70711 6.71883C6.51957 6.90636 6.26522 7.01172 6 7.01172C5.73478 7.01172 5.48043 6.90636 5.29289 6.71883L0.292893 1.71883C-0.0976311 1.3283 -0.0976311 0.695136 0.292893 0.304612Z" fill="currentColor"/>
                  </svg>
                </div>
                {{ $t(`faq_care_question_${item}`) }}
              </div>
              <TransitionExpand>
                <div class="faq-content"
                    v-if="selected === index">
                  <div class="faq-content-inner" v-html="$t(`faq_care_answer_${item}`)">
                  </div>
                </div>
              </TransitionExpand>
            </div>
          </tab>

        </tabs>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Button from "../components/Button";
  import {Tabs, Tab} from 'vue-tabs-component';

  Vue.component('tabs', Tabs);
  Vue.component('tab', Tab);

  export default {
    components: {Button},
    layout: 'page',
    data() {
      return {
        selected: 0,
      }
    },
    head() {
      return {
        title: "Система нагревания табака Гло в  Узбекистане – вопросы и ответы о Glo Hyper Plus",
        meta: [
          {
            name: "description",
            content: "Glo – это инновационная технология нагревания табака, созданная в Великобритании. Основная особенность Glo Hyper является нагревание без его горения."
          },
        ],
      }
    },
    computed: {
      listAbout() {
        let count = 0
        Object.keys(this.$i18n.messages.ru).forEach(key => {
          if(key.startsWith('faq_about_question')) {
            count = count + 1
          }
        })

        return count
      },
      listSearch() {
        let count = 0
        Object.keys(this.$i18n.messages.ru).forEach(key => {
          if(key.startsWith('faq_search_question')) {
            count = count + 1
          }
        })

        return count
      },
      listChar() {
        let count = 0
        Object.keys(this.$i18n.messages.ru).forEach(key => {
          if(key.startsWith('faq_char_question')) {
            count = count + 1
          }
        })

        return count
      },
      listCare() {
        let count = 0
        Object.keys(this.$i18n.messages.ru).forEach(key => {
          if(key.startsWith('faq_care_question')) {
            count = count + 1
          }
        })

        return count
      },
      listGaranty() {
        let count = 0
        Object.keys(this.$i18n.messages.ru).forEach(key => {
          if(key.startsWith('faq_garanty_question')) {
            count = count + 1
          }
        })

        return count
      },
    },
    methods: {
      onClickItem(index) {
        if(this.selected === index) {
          return this.selected = null
        }
        this.selected = index
      }
    },
    mounted() {

    }
  }
</script>

<style lang="scss">
  .faq-tabs {
    display: flex;

    @media (max-width: $bp-lg) {
      flex-direction: column;
    }

    .tabs-component-tabs {
      max-width: 360px;
      width: 100%;
      list-style: none;
      padding: 0 15px;
    }

    .tabs-component-tab {
      font-size: 24px;
      color: $color-default;
      margin-bottom: 24px;

      @media (max-width: $bp-sm) {
        font-size: 18px;
      }

      @media (max-width: $bp-lg) {
        margin-bottom: 15px;
      }

      &:hover {
        color: $color-accent;
      }

      &.is-active {
        .tabs-component-tab-a {
          font-size: 26px;
          font-weight: 700;
          color: $color-accent;
        }
      }
    }

    .tabs-component-tab-a {
      color: $color-default;
      &:hover {
        color: $color-accent;
      }
    }

    .tabs-component-panels {
      max-width: 720px;
      width: 100%;
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
    display: none;
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

    @media (max-width: $bp-lg) {
      margin-bottom: 5px;
    }

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
    max-width: 720px;
    width: 100%;
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
