<template>
  <div :class="$style['carousel']" data-test>
    <swiper ref="carousel" :options="options">
      <swiper-slide v-for="item in items" :key="item.name">
        <Component :is="item.component" :name="item.name" />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <div :class="$style['arrows']">
      <button :class="$style['arrow-button']" @click="changeSlide('prev')">
        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.88813 14.125L0.166875 7.40375L6.88813 0.694374L8.5625 2.36875L3.5275 7.40375L8.5625 12.4506L6.88813 14.125Z" fill="currentColor"/>
        </svg>
      </button>
      <button :class="$style['arrow-button']" @click="changeSlide('next')">
        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.11187 0.875L8.83313 7.59625L2.11187 14.3056L0.4375 12.6312L5.4725 7.59625L0.4375 2.54937L2.11187 0.875Z" fill="currentColor"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css'

export default {
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    visible(value) {
      value ? this.swiper.autoplay.stop() : this.swiper.autoplay.stop()
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      items: [
      {
        name: 'newbee',
        component: 'LayoutNewbeeTest',
      },
      {
        name: 'timati',
        component: 'LayoutHeroCarouselItem',
      }, {
        name: 'buzova',
        component: 'LayoutHeroCarouselItem'
      }, {
        name: 'default',
        component: 'LayoutHero'
      },
      //   {
      //   name: 'default',
      //   component: 'LayoutHeroBanner'
      // }
      ],
      options: {
        autoHeight: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: '.swiper-pagination'
        },
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.carousel.$swiper
    }
  },
  methods: {
    changeSlide(value) {
      if(value === 'next') {
        return this.swiper.slideNext()
      }
      this.swiper.slidePrev()
    }
  },
}
</script>

<style lang="scss">
.swiper-pagination {
  bottom: 30px !important;
  z-index: 2;
}
.swiper-pagination-bullet {
  margin: 0 24px !important;
  width: 12px;
  height: 12px;
  background-color: $color-secondary;
  opacity: 1;

  &.swiper-pagination-bullet-active {
    background-color: $color-accent;
  }
}
</style>

<style lang="scss" module>
.carousel {
  width: 100%;
  position: relative;
}

.arrows {
  display: flex;
  position: absolute;
  bottom: 64px;
  left: 64px;
  z-index: 2;

  @media (max-width: $bp-lg) {
    display: none;
  }
}

.arrow-button {
  border: 2px solid $color-secondary;
  width: 38px;
  height: 38px;
  background-color: transparent;
  color: $color-secondary;
  border-radius: 50%;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover {
    border: 2px solid $color-accent;
    color: $color-accent;
  }
}
</style>
