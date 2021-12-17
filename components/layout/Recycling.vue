<template>
  <div class="swiper-inbody-wrapper">
    <div class="swiper-inbody bnr-winter">
      <picture class="picture-bg">
        <source v-if="$i18n.locale == 'uz'" media="(max-width: 992px)" srcset="~/assets/images/hero/recycling-1.png" />
        <source v-else media="(max-width: 992px)" srcset="~/assets/images/hero/recycling-1.png" />
        <img v-if="$i18n.locale == 'uz'"  src="~/assets/images/hero/recycling-1.png"/>
        <img v-else src="~/assets/images/hero/recycling-1.png"/>
      </picture>
      <div class="entry-content" v-if="$i18n.locale == 'ru'">
        <div>
          <span class="text-1 fw-8">Вы сдаёте,<br>мы перерабатываем</span>
        </div>
        <div class="mv-5 box-md-3 box-lg-2">
          <div class="text-3 lh-5 fw-6">Устаревшее или <br>неисправное устройство <br> можно сдать на переработк</div>
        </div>
        <div class="btn-content">
          <a href="#store" class="button">Пункты переработки</a>
        </div>
      </div>
      <div class="entry-content" v-if="$i18n.locale == 'uz'">
        <div>
          <span class="text-1 fw-8">Siz topshirasiz,<br>biz qayta ishlaymiz</span>
        </div>
        <div class="mv-5 box-md-3 box-lg-2">
          <div class="text-3 lh-5 fw-6">Eskirgan yoki nuqsonli moslamangizni qayta ishlanishiga topshir</div>
        </div>
        <div class="btn-content">
          <a href="#store" class="button">Qayta ishlash punktlari</a>
        </div>
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
    font-size: 5.29em;
    text-transform: uppercase;
    line-height: 100%;
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
      padding: 260px 60px;
      //padding: 220px 60px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      @media (max-width: 991px) {
        position: relative;
        height: 383px;
      }
    }

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
      background-color: black;
      //background-image: linear-gradient(to right, #8221df, #117f66);
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
        background-color: white;
        color: black;
      }
      @media (max-width: 991px) {
        width: 100%;
        font-size: 20px;
        text-transform: none;
      }
    }
    .picture-bg {
      &:before {
        content: "";
        background-color: #45d28e;
        padding-top: calc((1080 / 1920) * 100%);
        position: relative;
        display: block;
        width: 100%;
        height: 0;
        @media (min-width: 992px){
          //padding-top: calc(100vh - 120px);
          padding-top: 1080px;
        }
      }
      img{
        left: 555px;
        //z-index: 1;
        top: calc(50% - 60px);
        transform: translateY(-50%);
        //width: 100%;
        position: absolute;
        //object-fit: cover;
        object-position: right;
        height: auto;
        //height: 80%;
      }
      @media (max-width: 991px){
        display: block;
        position: relative;
        overflow: hidden;
        img{
          left: 50%;
          top: 50%;
          height: 110%;
          transform: translate(-50%, -50%);
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
    }
    @media (max-width: 600px) {
      font-size: 1.7vw;
      h1{
        font-size: 4.4em;
      }
    }
    @media (min-width: 992px) {
      font-size: 16px;
    }
  }
</style>
