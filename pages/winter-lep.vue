<template>
  <div>
    <div class="winter-lep">
      <div class="container">
        <div class="winter-lep-wrapper row-4 flex mobile:fd-column-reverse desktop:jc-between" >
          <div class="col-lg-6 ph-4 mv-4">
            <h1>{{content[$i18n.locale].title}}</h1>
            <h3 class="color-2 text-uppercase">{{content[$i18n.locale].title_summary}}</h3>
            <div class="winter-lep-items">
              <figure>
                <picture>
                  <img src="~/assets/images/other/winter-items-1.png" alt="">
                </picture>
                <div class="cnt-content"><span>x5</span></div>
                <div class="desc-content color-2">IPHONE 13 PRO</div>
              </figure>
              <figure>
                <picture>
                  <img src="~/assets/images/other/winter-items-2.png" alt="">
                </picture>
                <div class="cnt-content"><span>x5</span></div>
                <div class="desc-content color-2">macbook pro</div>
              </figure>
              <figure>
                <picture>
                  <img src="~/assets/images/other/winter-items-3.png" alt="">
                </picture>
                <div class="cnt-content"><span>x200</span></div>
                <div class="desc-content color-2">яндекс станция <br>“АЛИСА”</div>
              </figure>
            </div>
            <div class="yetmore mobile:text-center mt-2 flex-adaptive">
              <picture>
                <img src="~/assets/images/other/winter-other-1.png" alt="">
              </picture>
              <div class="desc-content desktop:ml-4">
                <span class="h1">{{content[$i18n.locale].yetmore.title}}</span><br>
                <span class="h3 color-2 text-uppercase" v-html="content[$i18n.locale].yetmore.title_summary"></span>
              </div>
            </div>
            <div class="circs mv-4 mobile:mv-15">
              <div class="text-x8 color-1 text-uppercase">{{content[$i18n.locale].circs.title}}</div>
              <div class="text-x8">{{content[$i18n.locale].circs.description}}</div>
            </div>
            <div class="btn-content fw-6 mobile:ph-10">
              <div class="btn-def mv-4">
                <a href="https://t.me/glo_uz_bot" target="_blank">{{content[$i18n.locale].buttons.share}}</a>
              </div>
              <div class="btn-opacity mv-4">
                <a href="https://telegra.ph/USLOVIYA-ROZYGRYSHA-PRIZOV-PO-AKCII-ROZYGRYSH-PODARKOV-OT-glo-12-03" target="_blank">{{content[$i18n.locale].buttons.more}}</a>
              </div>
            </div>
          </div>
          <div class="ph-4 mv-4">
            <div class="winter-lep-image relative">
              <span class="winter-stick">
                <div class="text-1">NEW YEAR EDITION </div>
                <div class="text-2 text-uppercase">{{content[$i18n.locale].picture_summary}}</div>
              </span>
              <picture>
                <source srcset="~/assets/images/other/winter-1-mobile.jpg" media="(max-width: 991px)">
                <img src="~/assets/images/other/winter-1.jpg" >
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'winter',
  data(){
    return {
      content: {
        ru: {
          title: "НОВОГОДНИЙ РОЗЫГРЫШ!",
          title_summary: "УЧАВСТВУЙ И ВЫИГРЫВАЙ КРУТЫЕ ПРИЗЫ!",
          picture_summary: "новогоднее предложение",
          yetmore: {
            title: "ГЛАВНЫЙ ПРИЗ!",
            title_summary: "2 ДНЯ VIP-ОТДЫХА НА <br>ГОРНОМ КУРОРТЕ УЗБЕКИСТАНА!"
          },
          circs: {
            title: "Главное условия для участия:",
            description: "Для участия в розыгрыше необходимо зарегистрироваться в телеграм боте и активировать гарантию на glo hyper+ new year edition!"
          },
          buttons:{
            share: "Участвовать",
            more: "Подробнее"
          }
        },
        uz: {
          title: "YANGI YIL SOVRINLI O’YIN",
          title_summary: "Ishtirok eting va ajoyib sog’alarni yutib oling!",
          picture_summary: "Yangi Yil taklifi",
          yetmore: {
            title: "BOSH SOVRIN!",
            title_summary: "O’zbekistonning tog’li kurortida 2-kunlik VIP-dan olish!"
          },
          circs: {
            title: "Ishtirok etishning asosiy sharti:",
            description: "Sovrinli o'yinda ishtirok etish uchun telegram botda ro'yxatdan o'tish va yangi yil taklifi bo’lgan glo hyper+ ga  kafolatni faollashtirish kerak!"
          },
          buttons:{
            share: "Ishtiroq etish",
            more: "Batafsil ma’lumot"
          }
        }
      }
    }
  },
  head() {
    return {
      title: "На официальном сайте Glo-акции и подарки на Новый год",
      meta: [
        {
          name: "description",
          content: "Выйграте себе подарок на Новый год крутой гаджет или VIP путешествие"
        },
      ],
    }
  },
  computed: {
    contacts() {
      return this.$store.state.app.contacts
    },
  },
}
</script>

<style lang="scss">





  .circs{
    letter-spacing: 1.2px;
  }
  .winter-stick{
    background-color: #131313;
    text-transform: uppercase;
    padding: 10px 5px 10px 18px;
    color: white;
    position: absolute;
    right: 0;
    top: 0;
    font-weight: 700;
    span{
      line-height: 100%;
    }
    .text-1{
      font-size: 20px;
      letter-spacing: 2px;
      font-weight: 800;
    }
    .text-2{
      font-size: 10px;
      letter-spacing: 1px;
    }
    @media(max-width: 1280px){
      .text-1{
        font-size: 1.4vw;
      }
    }
    @media(max-width: 768px){
      .text-1{
        font-size: 3vw;
      }
      .text-2{
        font-size: 1.6vw;
      }
    }
  }
  .winter-lep-image{
    img{
      width: 100%;
    }
  }
  .winter-lep{
    color: white;
    background-color: #131313;
    overflow: hidden;
    h1, h2, h3, .h1, .h2, .h3{
      font-weight: 700;
      line-height: 100%;
    }
    h1, .h1{
      font-size: 42px;
      line-height: 100%;
    }
    h3, .h3{
      font-size: 26px;
    }
    img{
      max-width: 100%;
    }
    @media (max-width: 991px){
      h1, h2, h3, .h1, .h2, .h3{
        line-height: 130%;
      }
      h1{
        font-size: 36px;
      }
      h3{
        font-size: 20px;
      }
    }
  }
  .yetmore{
    img{
      @media (min-width: 992px){
        max-width: 148px;
      }
    }
  }
  .winter-lep-wrapper{
    padding: 60px 60px;
    display: flex;
    .btn-content{
      letter-spacing: 0.8px;
    }
    @media (max-width: 991px){
      padding: 15px 15px;
    }
  }
  .winter-lep-items{
    text-align: center;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px){
      flex-wrap: wrap;
      //flex-direction: column;
      justify-content: space-around;
      //align-items: center;
    }
    picture{
      img{
        height: 148px;
        object-fit: contain;
        max-width: 100%;
      }
    }
    .desc-content{
      text-transform: uppercase;
      font-size: 16px;
    }
    .cnt-content{
      display: flex;
      align-items: center;
      justify-content: center;
      display: flex;
      margin-top: -40px;
      margin-bottom: 15px;
      span{
        font-size: 18px;
        color: black;
        background-color: white;
        border-radius: 50%;
        border: 3px solid #FF1F0F;
        width: 43px;
        height: 43px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        font-weight: 700;
        line-height: 100%;
      }
    }
    figure{
      max-width: 200px;
      margin-top: 10px;
      margin-bottom: 10px;
      &:nth-child(3){
        .cnt-content{
          span{
            font-size: 13px;
          }
        }
      }
    }
  }
</style>
