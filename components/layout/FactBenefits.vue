<template>
  <div :class="$style['fact']">
    <div :class="$style['fact-container']">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-5" v-scroll-reveal="{ origin: 'left', distance: '250px'}">
            <div :class="$style['title']">
              <span v-html="$t('hero_title')"></span>
              <HelpInfo :class="$style['title-help']"
                :size="18"
                :options="{ content: $t('hero_note') }"
              />
            </div>
          </div>
          <div class="col-md-7" v-scroll-reveal="{ delay: 400 }">
            <div :class="$style['products']">
<!--              <img src="~/assets/images/products.png" alt="">-->
              <div :class="$style['products__video']">
                <video controls autoplay loop muted
                       v-observe-visibility="visibilityChanged"
                       ref="video">
                  <source src="~/assets/video/glo_hyper+_video2.mp4" type="video/mp4">
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { ObserveVisibility } from 'vue-observe-visibility';
  Vue.directive('observe-visibility', ObserveVisibility);

  export default {
    methods: {
      visibilityChanged (isVisible, entry) {
        this.isVisible = isVisible
        // console.log(entry)
        if (isVisible) {
          this.$refs.video.play();
        }
        else {
          this.$refs.video.pause();
        }
      },
    },
  }
</script>

<style lang="scss" module>
.fact-container {
  min-height: 465px;
  background: url('~/assets/images/fact-benefits-bg.jpg') no-repeat;
  background-position: 100% 0;
  background-size: cover;
  display: flex;
  align-items: center;

  @media (max-width: $bp-lg) {
    padding: 64px 0;
    min-height: auto;
    background-position: 50% 0;
  }
}

.title {
  color: $color-white;
  font-weight: 700;
  font-size: 64px;
  line-height: 1.2;

  @media (max-width: $bp-md) {
    font-size: 42px;
  }

  @media (max-width: $bp-sm) {
    font-size: 32px;
  }
}

.title-help {
  position: relative;
  top: -10px;
}

.note {
  background-color: rgba(white, 40%);
  backdrop-filter: blur(10px);
  color: $color-white;
  padding: 64px 46px;
  min-height: 465px;

  @media (max-width: $bp-lg) {
    margin-top: 64px;
    min-height: auto;
  }

  @media (max-width: $bp-sm) {
    color: $color-secondary;
    margin-top: 32px;
    padding: 0;
  }
}

.products {
  position: relative;
  width: 100%;

  .products__video {
    position: absolute;
    bottom: calc(100% - 165px);
    width: 100%;
    padding-top: 56.25%;

    @media (max-width: $bp-lg) {
      position: relative;
      bottom: -20px;
    }

    video {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
    }
  }
}
</style>
