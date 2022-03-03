<template>
  <div class="swiper-inbody-wrapper">
    <div class="swiper-inbody bnr-winter">
      <picture class="picture-bg">
        <source v-lazy-load v-if="$i18n.locale == 'uz'" media="(max-width: 992px)" srcset="~/assets/images/hero/winter-uz-mobile.webp" />
        <source v-lazy-load v-else media="(max-width: 992px)" srcset="~/assets/images/hero/winter-mobile.webp" />
        <img v-lazy-load v-if="$i18n.locale == 'uz'"  src="~/assets/images/hero/winter-uz.webp"/>
        <img v-lazy-load v-else src="~/assets/images/hero/winter.webp"/>
      </picture>
      <div class="entry-content" v-if="$i18n.locale == 'ru'">
        <div class="desktop:mt-22">
          <span class="text-1 fw-8">glo HYPER+  <br> NEW YEAR EDITION</span>
        </div>
        <!-- <div class="mv-5">
          <div class="text-2 text-uppercase fw-8 color-3 lh-0">новогодний розыгрыш!</div>
          <div class="text-3 text-uppercase fw-7">участвуй и выигрывай крутые призы!</div>
        </div>
        <div class="btn-content">
          <nuxt-link to="/winter-lep/" class="button">Подробнее</nuxt-link>
        </div> -->
      </div>
      <div class="entry-content" v-if="$i18n.locale == 'uz'">
        <div class="desktop:mt-22">
          <span class="text-1 fw-8">glo HYPER+  <br> NEW YEAR EDITION</span>
        </div>
        <!-- <div class="mv-5">
          <div class="text-2 text-uppercase fw-8 color-3 lh-0">Yangi  yil  sovrinli  o'yin!</div>
          <div class="text-3 text-uppercase fw-7" style="font-size: 1.5em;">IshtiroK eting va ajoyib sovg'alarni yutib oling!</div>
        </div>
        <div class="btn-content">
          <nuxt-link to="/uz/winter-lep/" class="button">Batafsil ma'lumot</nuxt-link>
        </div> -->
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  @media (max-width: 991px){
    .hidden-xs{
      display: none;
    }
  }
  @media (min-width: 992px){
    .hidden-md{
      display: none;
    }
  }
  .text-1{
    font-size: 4em;
    line-height: 130%;
  }
  .text-2{
    font-size: 3em;
  }
  .text-3{
    font-size: 1.98em;
  }
  .swiper-inbody {
    position: relative;
    overflow: hidden;
    z-index: 1;
    color: white;
    .entry-content {
      padding: 10vh 60px;
      //padding: 220px 60px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      @media (max-width: 991px) {
        position: relative;
        //height: 383px;
      }
    }
    // &:before {
    //   content: "";
    //   padding-top: calc((1080 / 1920) * 100%);
    //   position: relative;
    //   display: block;
    //   width: 100%;
    //   height: 0;
    // }
    p {
      font-size: 14px;
      margin-bottom: 10px;
    }
    .btn-content{
      @media (min-width: 991px){
        margin-top: 80px;
      }
      margin-top: 15px;
      margin-bottom: 15px;
    }
    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      //background-color: #e35205;
      background-image: linear-gradient(to right, #8221df, #117f66);
      font-size: 30px;
      color: #ffffff;
      white-space: nowrap;
      padding: 10px 30px;
      min-height: 58px;
      border: none;
      text-decoration: none;
      font-weight: 700;
      span {
        line-height: 0;
      }
      &:hover{
        border-color: #fa6c21;
        background-color: #fa6c21;
      }
      @media (max-width: 991px) {
        width: 100%;
        font-size: 20px;
        text-transform: none;
      }
    }
    .picture-bg {
      img{
        left: 0;
        z-index: -1;
        top: 0;
        width: 100%;
        //position: absolute;
        object-fit: cover;
        object-position: right;
        height: calc(100vh - 70px);
        @media (min-width: 992px){
          min-height: 620px;
        }
      }
    }
    @media (max-width: 991px) {
      color: #2a2c2c;
      .entry-content {
        padding: 20px 20px;
        padding-bottom: 80px;
      }
      .btn-content{
        margin-top: 0;
        order: 3;
      }
      &:before {
        display: none;
      }
      .picture-bg {
        img{
          position: relative;
          height: auto;
        }
      }
    }
    @media (max-width: 600px) {
      font-size: 1.7vw;
      .text-2{
        font-size: 4.4em;
      }
    }
    @media (min-width: 992px) {
      font-size: 16px;
    }
  }
</style>
