<template>
  <div :class="$style['products']" id="catalog">
    <div class="container">
      <h2 :class="$style['title']" data-title-line>{{ $t('products_title') }}</h2>
      <div :class="$style['list']">
        <div class="row">
          <div class="col-md-6 col-lg-4 product-item" v-for="(item, index) in products[$i18n.locale]" :key="index">
            <div :class="$style['item']" v-scroll-reveal="{ delay: index % 3 * 100 }">
              <nuxt-link :to="'/products/'+item.id+'/'">
                <div :class="$style['item-image']" v-lazy-load>
                  <img width="248" height="673" :data-src="item.image" :alt="item.name">
                </div>
              </nuxt-link>
              <h5 :class="$style['item-title']">
                <div :class="$style['item-limit']" v-if="item.limit">{{ $t('products_limit') }}</div>
                {{ item.name }}
              </h5>
              <div class="pr-5 desc-content" v-if="$i18n.locale != 'uz'">
                <span class="fw-6 text-x5">Формат Деми</span>
                <div class="text-x3"><nuxt-link to="/warranty/">Узнайте больше</nuxt-link> о гарантии</div>
                <div>{{item.price_manager | spaceBetweenNum}} сум при покупке у <nuxt-link to="/testdrive/">персонального менеджера </nuxt-link>*</div>
                <div>{{item.price | spaceBetweenNum}} сум цена в розницу *</div>
              </div>
              <div class="pr-5 desc-content" v-else>
                <span class="fw-6 text-x5">Demi formati</span>
                <div class="text-x3">Kafolat haqida <nuxt-link to="/warranty/">ko‘proq bilib oling</nuxt-link></div>
                <div><nuxt-link to="/testdrive/">Shaxsiy menejerdan</nuxt-link>xarid qilish narxi {{item.price_manager | spaceBetweenNum}} so‘m *</div>
                <div>Chakana narxi {{item.price | spaceBetweenNum}} so‘m *</div>
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
      products: 
      {
        "uz": [
          {
            "id": 1,
            "images": [
              "/img/product/carousel/Polar-SNS-1.webp",
              "/img/product/carousel/Polar-SNS-2.webp",
              "/img/product/carousel/Polar-SNS-3.webp",
              "/img/product/carousel/Polar-SNS-4.webp"
            ],
            "name": "glo HYPER+ Yangi Yil taklifi",
            "image": "/img/products/product-polar.webp",
            "limit": true,
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 2,
            "images": [
              "/img/product/carousel/Summer-Buzova-1.webp",
              "/img/product/carousel/Summer-Buzova-2.webp",
              "/img/product/carousel/Summer-Buzova-3.webp",
              "/img/product/carousel/Summer-Buzova-4.webp"
            ],
            "name": "glo HYPER+ Bliss",
            "image": "/img/products/product-buzova.webp",
            "limit": true,
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 3,
            "images": [
              "/img/product/carousel/Summer-Timati-1.webp",
              "/img/product/carousel/Summer-Timati-2.webp",
              "/img/product/carousel/Summer-Timati-3.webp",
              "/img/product/carousel/Summer-Timati-4.webp"
            ],
            "name": "glo HYPER+ Topaz",
            "image": "/img/products/product-timati.webp",
            "limit": true,
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 4,
            "images": [
              "/img/product/carousel/frosty_gold-1.webp",
              "/img/product/carousel/frosty_gold-2.webp",
              "/img/product/carousel/frosty_gold-3.webp",
              "/img/product/carousel/frosty_gold-4.webp",
              "/img/product/carousel/frosty_gold-5.webp"
            ],
            "name": "glo HYPER+ Oltin",
            "image": "/img/products/product-gold.webp",
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 5,
            "images": [
              "/img/product/carousel/Mahogany-Red-1.webp",
              "/img/product/carousel/Mahogany-Red-2.webp",
              "/img/product/carousel/Mahogany-Red-3.webp",
              "/img/product/carousel/Mahogany-Red-4.webp",
              "/img/product/carousel/Mahogany-Red-5.webp"
            ],
            "name": "glo HYPER+ Qora-qizil",
            "image": "/img/products/product-red-wood.webp",
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 6,
            "images": [
              "/img/product/carousel/energetic_blue-1.webp",
              "/img/product/carousel/energetic_blue-2.webp",
              "/img/product/carousel/energetic_blue-3.webp",
              "/img/product/carousel/energetic_blue-4.webp",
              "/img/product/carousel/energetic_blue-5.webp"
            ],
            "name": "glo HYPER+ Moviy",
            "image": "/img/products/product-blue.webp",
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 7,
            "images": [
              "/img/product/carousel/pearl_white-1.webp",
              "/img/product/carousel/pearl_white-2.webp",
              "/img/product/carousel/pearl_white-3.webp",
              "/img/product/carousel/pearl_white-4.webp",
              "/img/product/carousel/pearl_white-5.webp"
            ],
            "name": "glo HYPER+ Oq",
            "image": "/img/products/product-white.webp",
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 8,
            "images": [
              "/img/product/carousel/ebony_black-1.webp",
              "/img/product/carousel/ebony_black-2.webp",
              "/img/product/carousel/ebony_black-3.webp",
              "/img/product/carousel/ebony_black-4.webp",
              "/img/product/carousel/ebony_black-5.webp"
            ],
            "name": "glo HYPER+ Qora",
            "image": "/img/products/product-black.webp",
            "price_manager": 150000,
            "price": 200000
          }
        ],
        "ru": [
          {
            "id": 1,
            "images": [
              "/img/product/carousel/Polar-SNS-1.webp",
              "/img/product/carousel/Polar-SNS-2.webp",
              "/img/product/carousel/Polar-SNS-3.webp",
              "/img/product/carousel/Polar-SNS-4.webp"
            ],
            "name": "glo HYPER+ Новогоднее предложение",
            "image": "/img/products/product-polar.webp",
            "limit": true,
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 2,
            "images": [
              "/img/product/carousel/Summer-Buzova-1.webp",
              "/img/product/carousel/Summer-Buzova-2.webp",
              "/img/product/carousel/Summer-Buzova-3.webp",
              "/img/product/carousel/Summer-Buzova-4.webp"
            ],
            "name": "glo HYPER+ Блисс",
            "image": "/img/products/product-buzova.webp",
            "limit": true,
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 3,
            "images": [
              "/img/product/carousel/Summer-Timati-1.webp",
              "/img/product/carousel/Summer-Timati-2.webp",
              "/img/product/carousel/Summer-Timati-3.webp",
              "/img/product/carousel/Summer-Timati-4.webp"
            ],
            "name": "glo HYPER+ Топаз",
            "image": "/img/products/product-timati.webp",
            "limit": true,
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 4,
            "images": [
              "/img/product/carousel/frosty_gold-1.webp",
              "/img/product/carousel/frosty_gold-2.webp",
              "/img/product/carousel/frosty_gold-3.webp",
              "/img/product/carousel/frosty_gold-4.webp",
              "/img/product/carousel/frosty_gold-5.webp"
            ],
            "name": "glo HYPER+ Золотой",
            "image": "/img/products/product-gold.webp",
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 5,
            "images": [
              "/img/product/carousel/Mahogany-Red-1.webp",
              "/img/product/carousel/Mahogany-Red-2.webp",
              "/img/product/carousel/Mahogany-Red-3.webp",
              "/img/product/carousel/Mahogany-Red-4.webp",
              "/img/product/carousel/Mahogany-Red-5.webp"
            ],
            "name": "glo HYPER+ Чёрно-красный",
            "image": "/img/products/product-red-wood.webp",
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 6,
            "images": [
              "/img/product/carousel/energetic_blue-1.webp",
              "/img/product/carousel/energetic_blue-2.webp",
              "/img/product/carousel/energetic_blue-3.webp",
              "/img/product/carousel/energetic_blue-4.webp",
              "/img/product/carousel/energetic_blue-5.webp"
            ],
            "name": "glo HYPER+ Синий",
            "image": "/img/products/product-blue.webp",
            "price": 200000
          },
          {
            "id": 7,
            "images": [
              "/img/product/carousel/pearl_white-1.webp",
              "/img/product/carousel/pearl_white-2.webp",
              "/img/product/carousel/pearl_white-3.webp",
              "/img/product/carousel/pearl_white-4.webp",
              "/img/product/carousel/pearl_white-5.webp"
            ],
            "name": "glo HYPER+ Белый",
            "image": "/img/products/product-white.webp",
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 8,
            "images": [
              "/img/product/carousel/ebony_black-1.webp",
              "/img/product/carousel/ebony_black-2.webp",
              "/img/product/carousel/ebony_black-3.webp",
              "/img/product/carousel/ebony_black-4.webp",
              "/img/product/carousel/ebony_black-5.webp"
            ],
            "name": "glo HYPER+ Чёрный",
            "image": "/img/products/product-black.webp",
            "price_manager": 150000,
            "price": 200000
          }
        ]
      },
    }
  },
  created(){

  },
  methods: {
    formatPrice(number) {
      return Intl.NumberFormat('ru-RU').format(number)
    }
  },
  // async asyncData(context){
  //   try{
  //      var posts = await this.$axios.$get('http://localhost:8899/json/products.json')
  //      const page_data = await context.store.dispatch("app/fetchProducts");
  //      console.log("asyncData");
  //     return {
  //       posts
  //     }
  //   }catch(e){
  //     console.log(e);
  //     context.error(e);
  //   }
  //},
}
</script>

<style lang="scss" scoped>
.product-item{
  a{
    color: inherit;
  }
}
</style>

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
