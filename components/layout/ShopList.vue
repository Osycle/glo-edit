<template>
  <div id="shops">
    <div :class="$style['container']">
      <div class="container">
        <div class="row" >
          <div class="col-12">
            <h2 :class="$style['title']" data-title-line>
              {{ $t('find_store_title_1') }}
            </h2>
          </div>
        </div>
        <div class="row flex-row-reverse justify-content-between">
          <div class="col-md-4">
            <div :class="$style['note']" class="mb-4">
              {{ $t('find_store_offline_note') }}
              <p></p>
              <ul :class="$style['stores']">
                <li>
                  <a target="_blank" href="https://maps.google.com/?q=21 улица Узбекистон Овози, Ташкент 100001, Узбекистан">
                    <a target="_blank" href='https://maps.apple.com/maps?q=41.3120259,69.2914549'>
                      {{ $t('find_store_offline_adress_1') }}
                    </a>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://maps.google.com/?q=ТКАД, 17 Ташкент, 100158, Узбекистан">
                    <a target="_blank" href='https://maps.apple.com/maps?q=41.2389004,69.3266547'>
                      {{ $t('find_store_offline_adress_2') }}
                    </a>
                  </a>
                </li>
                <!-- <li>
                  <a target="_blank" href="https://maps.google.com/?q=17 улица Матбуотчилар, Ташкент, Узбекистан">
                    <a target="_blank" href='https://maps.apple.com/maps?q=41.312218,69.2712237'>
                      {{ $t('find_store_offline_adress_3') }}
                    </a>
                  </a>
                </li> -->
                <li>
                  <a target="_blank" href="https://maps.google.com/?q=5 Nurafshon ko'chasi, Тошкент 100000, Узбекистан">
                    <a href="https://maps.apple.com/maps?q=41.3392649,69.2523868">
                      {{ $t('find_store_offline_adress_4') }}
                    </a>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://maps.google.com/?q=87A Kichik Xalqa Yo'li, Тошкент, Узбекистан">
                    <a href="https://maps.apple.com/maps?q=41.2699245,69.2605698">
                      {{ $t('find_store_offline_adress_5') }}
                    </a>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-7" >
            <img :class="$style['image']" src="~/assets/images/shop-offline.jpg" alt="img">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopList"
}
</script>

<style lang="scss" module>
.container {
  padding: 160px 0 0 0;

  @media (max-width: $bp-md) {
    padding: 64px 0 0 0;
  }
}

.stores {
  list-style: none;
  li {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      display: block;
      height: 30px;
      width: 16px;
      left: -25px;
      top: 4px;
      background: url('~/assets/images/mapmarker.png') center no-repeat;
      background-size: contain;
    }
    a {
      color: $color-secondary;
      text-decoration:  none;
      cursor: default;
    }
  }
}

.title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 80px;

  @media (max-width: $bp-md) {
    font-size: 24px;
    margin-bottom: 40px;
  }
}

.image {
  width: 100%;
}

.headline {
  font-size: 36px;
  color: $color-secondary;
  margin-bottom: 24px;
  font-weight: 600;

  @media (max-width: $bp-lg) {
    font-size: 20px;
  }
}

.note {
  font-size: 24px;
  color: $color-secondary;

  @media (max-width: $bp-lg) {
    font-size: 18px;
  }
}
</style>
