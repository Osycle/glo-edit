<template>
  <div :class="$style['products']" id="catalog">
    <div class="container">
      <h2 :class="$style['title']" data-title-line>{{ $t('products_title') }}</h2>
      <div :class="$style['list']">
        <div class="row">
          <div class="col-md-6 col-lg-4" v-for="(item, index) in products[$i18n.locale]" :key="index">
            <div :class="$style['item']" v-scroll-reveal="{ delay: index % 3 * 100 }">
              <div :class="$style['item-image']" v-lazy-load>
                <img width="248" height="673" :data-src="item.image" :alt="item.name">
              </div>
              <h5 :class="$style['item-title']">
                <div :class="$style['item-limit']" v-if="item.limit">{{ $t('products_limit') }}</div>
                {{ item.name }}
              </h5>
              <div class="pr-5">
                <span class="fw-6 text-x5">Формат Деми</span>
                <div class="text-x3"><nuxt-link to="/warranty">Узнай больше</nuxt-link> о гарантии</div>
                <div>150 000 сум при покупке у <nuxt-link to="/#presentation">персонального менеджера </nuxt-link>*</div>
                <div>200 000 сум цена в розницу *</div>
              </div>
              <!-- <div :class="$style['item-price']">
                {{ formatPrice(item.price) }} {{ $t('currency') }} *
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <span >
        <span v-for="(post, key) in posts" :key="key" >{{post.title}}</span>
      </span>
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
      posts: [],
      products: 
      {
        "uz": [
          {
            "name": "glo HYPER+ Yangi Yil taklifi",
            "image": "/_nuxt/assets/images/products/product-polar.webp",
            "limit": true,
            "price": 200000
          },
          {
            "name": "glo HYPER+ Bliss",
            "image": "/_nuxt/assets/images/products/product-buzova.webp",
            "limit": true,
            "price": 200000
          },
          {
            "name": "glo HYPER+ Topaz",
            "image": "/_nuxt/assets/images/products/product-timati.webp",
            "limit": true,
            "price": 200000
          },
          {
            "name": "glo HYPER+ Oltin",
            "image": "/_nuxt/assets/images/products/product-gold.webp",
            "price": 200000
          },
          {
            "name": "glo HYPER+ Qora-qizil",
            "image": "/_nuxt/assets/images/products/product-red-wood.webp",
            "price": 200000
          },
          {
            "name": "glo HYPER+ Moviy",
            "image": "/_nuxt/assets/images/products/product-blue.webp",
            "price": 200000
          },
          {
            "name": "glo HYPER+ Oq",
            "image": "/_nuxt/assets/images/products/product-white.webp",
            "price": 200000
          },
          {
            "name": "glo HYPER+ Qora",
            "image": "/_nuxt/assets/images/products/product-black.webp",
            "price": 200000
          }
        ],
        "ru": [
          {
            "name": "glo HYPER+ Новогоднее предложение",
            "image": "/_nuxt/assets/images/products/product-polar.webp",
            "limit": true,
            "buymanager_price": 150000,
            "price": 200000
          },
          {
            "name": "glo HYPER+ Блисс",
            "image": "/_nuxt/assets/images/products/product-buzova.webp",
            "limit": true,
            "buymanager_price": 150000,
            "price": 200000
          },
          {
            "name": "glo HYPER+ Топаз",
            "image": "/_nuxt/assets/images/products/product-timati.webp",
            "limit": true,
            "buymanager_price": 150000,
            "price": 200000
          },
          {
            "name": "glo HYPER+ Золотой",
            "image": "/_nuxt/assets/images/products/product-gold.webp",
            "buymanager_price": 150000,
            "price": 200000
          },
          {
            "name": "glo HYPER+ Чёрно-красный",
            "image": "/_nuxt/assets/images/products/product-red-wood.webp",
            "buymanager_price": 150000,
            "price": 200000
          },
          {
            "name": "glo HYPER+ Синий",
            "image": "/_nuxt/assets/images/products/product-blue.webp",
            "price": 200000
          },
          {
            "name": "glo HYPER+ Белый",
            "image": "/_nuxt/assets/images/products/product-white.webp",
            "buymanager_price": 150000,
            "price": 200000
          },
          {
            "name": "glo HYPER+ Чёрный",
            "image": "/_nuxt/assets/images/products/product-black.webp",
            "buymanager_price": 150000,
            "price": 200000
          }
        ]
      },

    }
  },
  async fetch() {
    //this.posts = await this.$axios.$get('https://api.nuxtjs.dev/posts')
    //console.log(this.posts);
  },
  created(){
    this.posts = this.$axios.$get('http://localhost:8899/json/products.json');
    console.log(this.posts);
  },
  fetchOnServer: true,
  methods: {
    formatPrice(number) {
      return Intl.NumberFormat('ru-RU').format(number)
    }
  },
  async asyncData(context){
    try{
       var posts = await this.$axios.$get('https://api.nuxtjs.dev/posts')
       //const page_data = await context.store.dispatch("app/fetchProducts");
       console.log(page_data);
      return {
        posts
      }
    }catch(e){
      console.log(e);
      context.error(e);
    }
  },
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
