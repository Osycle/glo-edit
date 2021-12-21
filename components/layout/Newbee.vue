<template>
  <div class="swiper-inbody-wrapper">
    <div class="swiper-inbody">
      <picture class="picture-bg">
        <source media="(max-width: 992px)" srcset="~/assets/images/hero/newbee-mobil-new.jpg" />
        <img src="~/assets/images/hero/newbee-new.jpg"/>
      </picture>
      <div class="flex-wrapper" v-if="$i18n.locale == 'ru'">
        <div>
          <div class="text-content">
            <div class="h1">
              Получи <br class="hidden-xs"/>
              обратно
            </div>
            <div class="price-content">100 000 сум</div>
            <div class="h3">
              за регистрацию <br />
              в телеграм боте*
            </div>
            <div class="h4">Только для новых пользователей**</div>
          </div>
        </div>
        <div class="btn-content">
          <a href="https://t.me/glo_uz_bot" target="_blank" rel="nofollow" class="button">
            {{ $t("hero_button_text") }}
          </a>
        </div>
        <div class="f-content">
          <p>
            <b>* Важно:</b> один потребитель – одно устройство (в рамках акции можно получить вознаграждение только за одно устройство  glo hyper+, за исключением устройств из новогодней серии).
            <br />
            <b>Акция действует с 16 ноября по 31 декабря 2021 года.</b>
          </p>
          <p>** Пользователь впервые купил устройство для нагревания табака glo, ранее не регистрировал устройство в боте и не активировал гарантию.</p>
        </div>
      </div>
      <div class="flex-wrapper" v-if="$i18n.locale == 'uz'">
        <div>
          <div class="text-content">
            <div>
              Telegram botda* <br />
              ro’yxatdan o’ting va
            </div>
            <div class="price-content">100 000 so’m</div>
            <div class="h1">
              qaytarib <br class="hidden-xs"/>
              oling
            </div>
            <div class="h4">Faqat yangi foydalanuvchilar uchun**</div>
          </div>
        </div>
        <div class="btn-content">
          <a href="https://t.me/glo_uz_bot" target="_blank" rel="nofollow" class="button">
            {{ $t("hero_button_text") }}
          </a>
        </div>
        <div class="f-content">
          <p>
            <b>* Muhim:</b> bitta foydalanuvchi – bitta muqofot (bu shuni anglatadiki, ushbu aksiyada bitta glo hyper+ moslama uchun Muqofor olish mumkin, Yangi yil taklifi bo’lgan moslamalari bundan mustasno).
            <br />
            <b>Aksiya 2021 yil 16-noyabrdan 31-dekabrgacha amal qiladi.</b>
          </p>
          <p>** Foydalanuvchi glo tamaki isitish moslamani birinchi marta sotib olgan, avval moslamani botda ro’yxatdan o’tqazmagan va kafolatni faollashtirmagan.</p>
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
.swiper-inbody {
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: white;
  .flex-wrapper {
    padding: 100px 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 60px);
    @media (max-width: 991px) {
      position: relative;
    }
  }
  &:before {
    content: "";
    padding-top: calc((1080 / 1920) * 100%);
    position: relative;
    display: block;
    width: 100%;
    height: 0;
  }
  p {
    font-size: 14px;
    margin-bottom: 10px;
  }
  .f-content {
    margin-top: 20px;
    margin-bottom: 15px;
    @media (min-width: 992px){
      max-width: 50%;
    }
    @media (max-width: 991px){
      margin-top: 6px;
      margin-bottom: 6px;
      p{
        font-size: 9px;
        margin-bottom: 5px;
      }
      font-size: 9px;
      font-weight: 500;
      b{
        font-weight: 500;
      }
    }
  }
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #e35205;
    font-size: 20px;
    color: #ffffff;
    white-space: nowrap;
    padding: 10px 30px;
    min-height: 58px;
    border: none;
    text-decoration: none;
    span {
      line-height: 0;
    }
    &:hover{
      border-color: #fa6c21;
      background-color: #fa6c21;
    }
    @media (min-width: 992px) {

      border: 1px solid white;
      padding: 0.8em 4em;
      background-color: transparent;    
    }
    @media (max-width: 991px) {
      width: 100%;
      text-transform: none;
    }
  }
  .btn-content{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .picture-bg {
    img{
      left: 0;
      z-index: -1;
      top: 0;
      width: 100%;
      position: absolute;
      object-fit: cover;
    }
  }
  .h1 {
    font-size: 6.2em;
    font-weight: 700;
    line-height: 90%;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
  .price-content {
    font-size: 5.5em;
    font-weight: 700;
    line-height: 100%;
    color: #ffe400;
    margin-bottom: 5px;
  }
  .h3 {
    font-size: 2.5em;
    line-height: 110%;
    font-weight: 700;
    text-transform: uppercase;
  }
  .h4 {
    font-weight: 700;
    font-size: 1.2em;
    margin-top: 15px;
  }
  @media (max-width: 991px) {
    color: #2a2c2c;
    .h4{
      margin-top: 10px;
    }
    .flex-wrapper {
      padding: 20px 20px;
      padding-bottom: 80px;
    }
    .price-content{
      margin-top: 5px;
      margin-bottom: 5px;
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
      }
    }
  }
  @media (max-width: 600px) {
    font-size: 1.7vw;
    .h1{
      font-size: 4.4em;
    }
  }
  @media (min-width: 992px) {
    font-size: 11px;
  }
  @media (min-width: 1280px) {
    font-size: 12px;
  }
  @media (min-width: 1441px) {
    font-size: 23px;
  }
}
</style>
