<template>
  <div :class="$style['products']" id="catalog">
    <div class="container">
      <div :class="$style['title']" data-title-line>{{ $t('products_title') }}</div>
      <div :class="$style['list']">
        <div class="row">
          <div class="col-md-6 col-lg-4" v-for="(item, index) in products" :key="index">
            <div :class="$style['item']" v-scroll-reveal="{ delay: index % 3 * 100 }">
              <div :class="$style['item-image']" v-lazy-load>
                <img width="248" height="673" :data-src="item.image" :alt="item.name">
              </div>
              <div :class="$style['item-title']">
                <div :class="$style['item-limit']" v-if="item.limit">{{ $t('products_limit') }}</div>
                {{ item.name }}
              </div>
              <div :class="$style['item-price']">
                {{ formatPrice(item.price) }} {{ $t('currency') }} *
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style['note']">
        {{ $t('products_note') }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [{
        name: this.$t('products_item_buzova'),
        image: require('assets/images/products/product-buzova.png'),
        limit: true,
        price: 200000
      }, {
        name: this.$t('products_item_timati'),
        image: require('assets/images/products/product-timati.png'),
        limit: true,
        price: 200000
      }, {
        name: this.$t('products_item_gold'),
        image: require('assets/images/products/product-gold.png'),
        price: 200000
      }, {
        name: this.$t('products_item_red-wood'),
        image: require('assets/images/products/product-red-wood.png'),
        price: 200000
      }, {
        name: this.$t('products_item_blue'),
        image: require('assets/images/products/product-blue.png'),
        price: 200000
      }, {
        name: this.$t('products_item_white'),
        image: require('assets/images/products/product-white.png'),
        price: 200000
      }, {
        name: this.$t('products_item_black'),
        image: require('assets/images/products/product-black.png'),
        price: 200000
      }]
    }
  },
  methods: {
    formatPrice(number) {
      return Intl.NumberFormat('ru-RU').format(number)
    }
  }
}
</script>

<style lang="scss" module>
.products {
  background: url('~/assets/images/products-bg.jpg') 0 0;
  background-size: cover;
  padding-top: 180px;
  padding-bottom: 82px;

  @media (max-width: $bp-md) {
    padding-top: 80px;
    padding-bottom: 40px;
  }
}

.title {
  font-size: 36px;
  font-weight: 700;

  @media (max-width: $bp-md) {
    font-size: 24px;
  }
}

.list {
  margin-top: 88px;
}

.item {
  display: flex;
  flex-direction: column;
  margin-bottom: 90px;
  position: relative;

  @media (max-width: $bp-md) {
    margin: 40px 0;
    text-align: center;
  }
}

.item-image {
  margin-left: 36px;

  img {
    max-width: 100%;
    height: 100%;

    @media (max-width: $bp-sm) {
      max-width: 50%;
    }
  }
}

.item-title {
  font-size: 24px;
  font-weight: 700;
  position: relative;
  display: flex;
  flex-direction: column;
}

.item-limit {
  display: inline-flex;
  font-size: 12px;
  font-weight: 700;
  color: $color-white;
  text-transform: uppercase;
  position: absolute;
  padding: 8px 16px;
  background-color: $color-default;
  left: 0;
  margin: auto;
  top: -40px;

  @media (max-width: $bp-md) {
    position: static;
    margin-bottom: 8px;
  }
}

.item-note {
  font-size: 18px;
  color: $color-secondary;
  margin-top: 10px;
}

.item-price {
  font-size: 24px;
  color: $color-accent;
  font-weight: 700;
  margin-top: 22px;
}

.note {
  margin-top: 10px;
  font-size: 24px;
  color: $color-secondary;

  @media (max-width: $bp-md) {
    font-size: 18px;
    margin-top: 0;
  }
}
</style>
