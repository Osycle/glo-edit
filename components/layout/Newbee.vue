<template>
  <div class="swiper-inbody-wrapper">
    <div class="swiper-inbody">
      <img class="img-bg" src="~/assets/images/hero/newbee.jpg" alt="">
      <div class="flex-wrapper">
        <div>
          <div class="text-content">
            <h1>
              Получи <br> обратно
            </h1>
            <div class="price-content">100 000 сум</div>
            <h3>за регистрацию <br> в телеграм боте*</h3>
            <h4 class="mt-4">Только для новых пользователей**</h4>
          </div>
          <Button class="button mt-4"
            @click="$router.push({
              name: `summer-leb___${$i18n.locale}`,
            })">{{ $t('hero_button_text') }}
          </Button>
        </div>
        <div class="f-content">
          <p>
            <b>* Важно:</b> один потребитель – одно вознаграждение (в рамках данной акции можно получить вознаграждение только за одно устройство glo hyper+). <br>
            <b>Акция действует с 16 ноября по 31 декабря 2021 года.</b>
          </p>
          <br>
          <p>** Пользователь впервые купил устройство для нагревания табака glo, ранее не регистрировал устройство в боте и не активировал гарантию.</p>
        </div>
      </div>

    </div>

  </div>
</template>
<style lang="scss">
  .swiper-inbody{
    position: relative;
    overflow: hidden;
    z-index: 1;
    color: white;
    .flex-wrapper{
      padding: 60px 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &:before{
      content: "";
      padding-top: calc((1080 / 1920) * 100%);
      position: relative;
      display: block;
      width: 100%;
      height: 0;
    }
    p{
      margin-bottom: 10px;
    }
    .f-content{
      margin-top: 10px;
      margin-bottom: 50px;
    }
    .button{
      border: 1px solid white;
      font-size: 1rem;
      text-transform: uppercase;
      background-color: transparent;
      padding-left: 60px;
      padding-right: 60px;
    }
    .img-bg{
      object-fit: cover;
      left: 0;
      z-index: -1;
      top: 0;
      width: 100%;
      position: absolute;
    }
    h1{
      font-size: 6rem;
      font-weight: 700;
      line-height: 90%;
      margin-bottom: 5px;
      text-transform: uppercase;
    }
    .price-content{
      font-size: 5rem;
      font-weight: 700;
      line-height: 90%;
      color: #ffe400;
      margin-bottom: 5px;
    }
    h3{
      font-size: 2.5rem;
      line-height: 110%;
      font-weight: 700;
      text-transform: uppercase;
    }
    h4{
      font-weight: 700;
      font-size: 1.2rem;
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
    height: 800px;
  }

  @media (max-width: $bp-md) {
    height: 668px;
  }

  @media (max-width: $bp-sm) {
    height: 722px;
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
