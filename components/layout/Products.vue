<template>
  <div :class="$style['products']" id="catalog">
    <div class="container">
      <h2 :class="$style['title']" data-title-line>{{ $t('products_title') }}</h2>
      <div :class="$style['list']">
        <div class="row">
          <div class="col-md-6 col-lg-4 product-item" v-for="(item, index) in $store.state.products[$i18n.locale]" :key="index">
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
