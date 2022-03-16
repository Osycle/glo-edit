<template>
  <div class="product">
    <div class="container-x pv-10">
      <div class="breadcrumb">
        <ul v-if="$i18n.locale != 'uz'">
          <li><nuxt-link to="/">Главная</nuxt-link></li>
          <li><nuxt-link to="">{{current_product.name}}</nuxt-link></li>
        </ul>
        <ul v-else>
          <li><nuxt-link to="/">Bosh sahifa</nuxt-link></li>
          <li><nuxt-link to="">{{current_product.name}}</nuxt-link></li>
        </ul>
      </div>
      <div class="product-content">
        <div class="row">
          <div class="col-md-5 img-content">
            <div class="swiper mySwiper2">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(img, key) in current_product.images" :key="key">
                  <img :src="img"  zoom-i :data-zoom-image="img" />
                </div>
              </div>
            </div>
            <div thumbsSlider="" class="swiper mySwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(img, key) in current_product.images" :key="key">
                  <img :src="img" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-7 text-content" v-if="$i18n.locale != 'uz'">
            <div class="cap-content fw-8">
              <h1>{{current_product.name}}</h1>
            </div>
            <div class="desc-content mt-5">
                <div class="fw-6 text-x5 mb-1">Формат Деми</div>
                <div><nuxt-link to="/warranty/">Узнайте больше</nuxt-link> о гарантии</div>
                <div>{{current_product.price_manager | spaceBetweenNum}} сум при покупке у <nuxt-link to="/testdrive/">персонального менеджера </nuxt-link>*</div>
                <div>{{current_product.price | spaceBetweenNum}} сум цена в розницу *</div>
                <br>
                <div>* Рекомендованная цена</div>
            </div>
          </div>
          <div class="col-md-7 text-content" v-else>
            <div class="cap-content fw-8">
              <h1>{{current_product.name}}</h1>
            </div>
            <div class="desc-content mt-5">
                <div class="fw-6 text-x5 mb-1">Demi formati</div>
                <div class="text-x3">Kafolat haqida <nuxt-link to="/warranty/">ko‘proq bilib oling</nuxt-link></div>
                <div><nuxt-link to="/testdrive/">Shaxsiy menejerdan</nuxt-link>xarid qilish narxi {{current_product.price_manager | spaceBetweenNum}} so‘m *</div>
                <div>Chakana narxi {{current_product.price | spaceBetweenNum}} so‘m *</div>
                <br>
                <div>* Tavsiya etilayotgan chakana narxi</div>
            </div>
          </div>
        </div>
        <div v-if="$i18n.locale != 'uz'"> 
          <div class="nav-def mv-4 mv-5 responsive-tab">
            <ul class="list">
              <li><a href="#eqsys-1">Описание</a></li>
              <li><a href="#eqsys-2">Что внутри?</a></li>
              <li><a href="#eqsys-3">Как чистить?</a></li>
            </ul>
            <div class="pantab" id="eqsys-1">
              <div class="wrapper pv-5">
                <div>
                  <div>Устройство с технологией индукционного нагревания табака</div>
                  <br>
                  <div class="flex fw-wrap format-items row-3">
                    <div class="item flex ai-center mv-7 ph-3">
                      <div class="img-content">
                        <img src="/img/other/desc-icon-demi.svg" alt="">
                      </div>
                      <div class="desc-content ml-3">
                        <h4>Деми формат</h4>
                        <div>Увеличенный размер нагревательной камеры по сравнению с устройствами формата Нано.</div>
                      </div>
                    </div>
                    <div class="item flex ai-center mv-7 ph-3">
                      <div class="img-content">
                        <img src="/img/other/desc-icon-boost.svg" alt="">
                      </div>
                      <div class="desc-content ml-3">
                        <h4>Функция Boost</h4>
                        <div>Ускоренный нагрев устройства за 15 секунд.</div>
                      </div>
                    </div>
                    <div class="item flex ai-center mv-7 ph-3">
                      <div class="img-content">
                        <img src="/img/other/desc-icon-lightning.svg" alt="">
                      </div>
                      <div class="desc-content ml-3">
                        <h4>До 20 сессий на одном заряде</h4>
                        <div>Зарядка устройства занимает до 2 часов и обеспечивает до 20 сеансов использования.</div>
                      </div>
                    </div>
                    <div class="item flex ai-center mv-7 ph-3">
                      <div class="img-content">
                        <img src="/img/other/desc-icon-navigation.svg" alt="">
                      </div>
                      <div class="desc-content ml-3">
                        <h4>Можно использовать когда угодно</h4>
                        <!-- <div>Увеличенный размер нагревательной камеры по сравнению с устройствами формата Нано.</div> -->
                      </div>
                    </div>
                  </div>
                  <br>
                  <a href="https://telegra.ph/RUKOVODSTVO-POLZOVATELYA-01-18" nofollow target="_blank"><u><big>Руководство пользователя model G403</big></u></a>
                </div>
              </div>
            </div>
            <div class="pantab" id="eqsys-2">
              <div class="wrapper pv-5 box-lg-6">
                <div>
                  <div>Содержимое коробки:</div>
                  <br>
                  <div>1x устройство glo™</div>
                  <div>1x щеточка для чистки glo™</div>
                  <div>1x USB-С кабель для зарядки glo™</div>
                  <div>1x руководство пользователя glo™</div>
                </div>
              </div>
            </div>
            <div class="pantab" id="eqsys-3">
              <div class="wrapper pv-5 box-lg-7 desktop:pr-15">
                <div>
                  <div class="mb-2">
                    Для качественной работы устройства необходимо чистить его после каждых 20 сеансов использования, 
                    а при регулярном использовании функции Boost после каждых 10 сеансов. 
                    Используй щеточку, чтобы прочищать камеру нагревания. 
                    Также удаляй лишнюю влагу, чтобы устройство работало дольше.
                  </div>
                  <br>
                  <div class="cleaning-items flex text-center mobile:jc-center mobile:fw-wrap">
                    <div class="item mv-3">
                      <div class="item-wrapper desktop:pr-5 mobile:ph-3">
                        <div class="img-content">
                          <img src="/img/other/cleaning-1.webp" alt="">
                        </div>
                        <div class="desc-content mt-3">
                          Возьми палочку для чистки glo™ из упаковки
                        </div>
                      </div>
                    </div>
                    <div class="item mv-3">
                      <div class="item-wrapper desktop:pr-5 mobile:ph-3">
                        <div class="img-content">
                          <img src="/img/other/cleaning-2.webp" alt="">
                        </div>
                        <div class="desc-content mt-3">
                          Открой верхний затвор
                        </div>
                      </div>
                    </div>
                    <div class="item mv-3">
                      <div class="item-wrapper desktop:pr-5 mobile:ph-3">
                        <div class="img-content">
                          <img src="/img/other/cleaning-3.webp" alt="">
                        </div>
                        <div class="desc-content mt-3">
                          Открой нижнюю дверцу
                        </div>
                      </div>
                    </div>
                    <div class="item mv-3">
                      <div class="item-wrapper desktop:pr-5 mobile:ph-3">
                        <div class="img-content">
                          <img src="/img/other/cleaning-4.webp" alt="">
                        </div>
                        <div class="desc-content mt-3">
                          Тщательно прочисть внутреннюю камеру.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="nav-def mv-4 mv-5 responsive-tab">
            <ul class="list">
              <li><a href="#eqsys-1">Tavsif</a></li>
              <li><a href="#eqsys-2">To‘plamda nima bor?</a></li>
              <li><a href="#eqsys-3">Qanday tozalanadi?</a></li>
            </ul>
            <div class="pantab" id="eqsys-1">
              <div class="wrapper pv-5">
                <div>
                  <div>Tamakini induksion qizdirish texnologiyasiga ega moslama</div>
                  <br>
                  <div class="flex fw-wrap format-items row-3">
                    <div class="item flex ai-center mv-7 ph-3">
                      <div class="img-content">
                        <img src="/img/other/desc-icon-demi.svg" alt="">
                      </div>
                      <div class="desc-content ml-3">
                        <h4>Demi formati</h4>
                        <div>Nano formatli moslamalarga nisbatan kattaroq qizdirish kamerasi.</div>
                      </div>
                    </div>
                    <div class="item flex ai-center mv-7 ph-3">
                      <div class="img-content">
                        <img src="/img/other/desc-icon-boost.svg" alt="">
                      </div>
                      <div class="desc-content ml-3">
                        <h4>Boost funktsiyasi</h4>
                        <div>15 soniyada tezlashtirilgan qizdirish.</div>
                      </div>
                    </div>
                    <div class="item flex ai-center mv-7 ph-3">
                      <div class="img-content">
                        <img src="/img/other/desc-icon-lightning.svg" alt="">
                      </div>
                      <div class="desc-content ml-3">
                        <h4>Bir zaryadda 20 ta gacha sessiya</h4>
                        <div>Moslamani zaryadlash 2 soatgacha vaqt talab qiladi va 20 ta sessiyagacha foydalanishni ta’minlaydi.</div>
                      </div>
                    </div>
                    <div class="item flex ai-center mv-7 ph-3">
                      <div class="img-content">
                        <img src="/img/other/desc-icon-navigation.svg" alt="">
                      </div>
                      <div class="desc-content ml-3">
                        <h4>Istalgan vaqtda foydalanish mumkin</h4>
                        <!-- <div>Увеличенный размер нагревательной камеры по сравнению с устройствами формата Нано.</div> -->
                      </div>
                    </div>
                  </div>
                  <br>
                  <a href="https://telegra.ph/RUKOVODSTVO-POLZOVATELYA-01-18" nofollow target="_blank"><u><big>G403 modeli uchun Foydalanuvchi qo‘llanmasi</big></u></a>
                </div>
              </div>
            </div>
            <div class="pantab" id="eqsys-2">
              <div class="wrapper pv-5 box-lg-6">
                <div>
                  <div>Qutining tarkibi:</div>
                  <br>
                  <div>1x glo moslamasi</div>
                  <div>1x glo tozalash cho‘tkasi</div>
                  <div>1x USB-C glo zaryadlovchi kabeli</div>
                  <div>1x glo foydalanuvchi qo‘llanmasi </div>
                </div>
              </div>
            </div>
            <div class="pantab" id="eqsys-3">
              <div class="wrapper pv-5 box-lg-7 desktop:pr-15">
                <div>
                  <div class="mb-2">
                    Moslamaning sifatli ishlashini ta’minlash uchun uni har 20 seans foydalanishdan keyin, va agar BOOST funksiyasidan muntazam foydalanilsa har 10 seansdan keyin tozalash kerak. Qizdirish kamerasini tozalash uchun cho‘tkadan foydalaning. Shuningdek, moslama uzoqroq ishlashi uchun ortiqcha namlikni yo‘qoting.
                  </div>
                  <br>
                  <div class="cleaning-items flex text-center mobile:jc-center mobile:fw-wrap">
                    <div class="item mv-3">
                      <div class="item-wrapper desktop:pr-5 mobile:ph-3">
                        <div class="img-content">
                          <img src="/img/other/cleaning-1.webp" alt="">
                        </div>
                        <div class="desc-content mt-3">
                          Qadoqdan glo tozalash tayoqchasini oling
                        </div>
                      </div>
                    </div>
                    <div class="item mv-3">
                      <div class="item-wrapper desktop:pr-5 mobile:ph-3">
                        <div class="img-content">
                          <img src="/img/other/cleaning-2.webp" alt="">
                        </div>
                        <div class="desc-content mt-3">
                          Yuqori qopqoqni oching
                        </div>
                      </div>
                    </div>
                    <div class="item mv-3">
                      <div class="item-wrapper desktop:pr-5 mobile:ph-3">
                        <div class="img-content">
                          <img src="/img/other/cleaning-3.webp" alt="">
                        </div>
                        <div class="desc-content mt-3">
                          Pastki eshikchani oching
                        </div>
                      </div>
                    </div>
                    <div class="item mv-3">
                      <div class="item-wrapper desktop:pr-5 mobile:ph-3">
                        <div class="img-content">
                          <img src="/img/other/cleaning-4.webp" alt="">
                        </div>
                        <div class="desc-content mt-3">
                          Ichki kamerani yaxshilab tozalang
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>





export default {
  head() {
    return {
      title: "Электронные сигареты Glo Hyper в Узбекистане купить систему нагревания табака Glo (Гло) в Ташкенте",

      meta: [
        {
          hid: 'description',
          name: "description",
          content: "Официальный сайт продажи систем для нагрева табака Glo в Ташкенте и Узбекистане &#11088; от Бритиш Американ Тобакко. Устройств нагревания табака и стики для Гло (Glo) можно купить в Ташкенте. &#10133; Бесплатный тест драйв"
        },
        // {
        //   name: "keywords",
        //   content: this.page_data.seo.keywords
        // }
      ],
    }
  },
  //layout: 'page',
  components:{
    //Products
  },
  mounted(){
    window.olo = this;
      
      window.swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
      });
      window.swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });
      $(swiper2.$el).find(".swiper-slide-active [zoom-i]").elevateZoom()
      swiper2.on('slideChange', function (p) {
        $(".zoomContainer").remove();
        $(p.$el).find(".swiper-slide").eq(p.activeIndex).find("[zoom-i]").elevateZoom();
        console.log($(p.$el));
      });
      
        
        //responsiveTabs
      $('.responsive-tab').responsiveTabs({
        startCollapsed: 'accordion'
      });
        

  },
  data(){
    return {
      current_product: null,
      products: 
      {
        "uz": [
          {
            "id": 1,
            "images": [
              "/img/product/polar-carousel-img-1.webp",
              "/img/product/polar-carousel-img-2.webp",
              "/img/product/polar-carousel-img-3.webp",
              "/img/product/polar-carousel-img-4.webp",
              "/img/product/polar-carousel-img-5.webp"
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
              "/img/product/polar-carousel-img-1.webp",
              "/img/product/polar-carousel-img-2.webp",
              "/img/product/polar-carousel-img-3.webp",
              "/img/product/polar-carousel-img-4.webp",
              "/img/product/polar-carousel-img-5.webp"
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
              "/img/product/polar-carousel-img-1.webp",
              "/img/product/polar-carousel-img-2.webp",
              "/img/product/polar-carousel-img-3.webp",
              "/img/product/polar-carousel-img-4.webp",
              "/img/product/polar-carousel-img-5.webp"
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
              "/img/product/polar-carousel-img-1.webp",
              "/img/product/polar-carousel-img-2.webp",
              "/img/product/polar-carousel-img-3.webp",
              "/img/product/polar-carousel-img-4.webp",
              "/img/product/polar-carousel-img-5.webp"
            ],
            "name": "glo HYPER+ Oltin",
            "image": "/img/products/product-gold.webp",
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 5,
            "images": [
              "/img/product/polar-carousel-img-1.webp",
              "/img/product/polar-carousel-img-2.webp",
              "/img/product/polar-carousel-img-3.webp",
              "/img/product/polar-carousel-img-4.webp",
              "/img/product/polar-carousel-img-5.webp"
            ],
            "name": "glo HYPER+ Qora-qizil",
            "image": "/img/products/product-red-wood.webp",
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 6,
            "images": [
              "/img/product/polar-carousel-img-1.webp",
              "/img/product/polar-carousel-img-2.webp",
              "/img/product/polar-carousel-img-3.webp",
              "/img/product/polar-carousel-img-4.webp",
              "/img/product/polar-carousel-img-5.webp"
            ],
            "name": "glo HYPER+ Moviy",
            "image": "/img/products/product-blue.webp",
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 7,
            "images": [
              "/img/product/polar-carousel-img-1.webp",
              "/img/product/polar-carousel-img-2.webp",
              "/img/product/polar-carousel-img-3.webp",
              "/img/product/polar-carousel-img-4.webp",
              "/img/product/polar-carousel-img-5.webp"
            ],
            "name": "glo HYPER+ Oq",
            "image": "/img/products/product-white.webp",
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 8,
            "images": [
              "/img/product/polar-carousel-img-1.webp",
              "/img/product/polar-carousel-img-2.webp",
              "/img/product/polar-carousel-img-3.webp",
              "/img/product/polar-carousel-img-4.webp",
              "/img/product/polar-carousel-img-5.webp"
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
              "/img/product/polar-carousel-img-1.webp",
              "/img/product/polar-carousel-img-2.webp",
              "/img/product/polar-carousel-img-3.webp",
              "/img/product/polar-carousel-img-4.webp",
              "/img/product/polar-carousel-img-5.webp"
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
              "/img/product/polar-carousel-img-1.webp",
              "/img/product/polar-carousel-img-2.webp",
              "/img/product/polar-carousel-img-3.webp",
              "/img/product/polar-carousel-img-4.webp",
              "/img/product/polar-carousel-img-5.webp"
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
              "/img/product/polar-carousel-img-1.webp",
              "/img/product/polar-carousel-img-2.webp",
              "/img/product/polar-carousel-img-3.webp",
              "/img/product/polar-carousel-img-4.webp",
              "/img/product/polar-carousel-img-5.webp"
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
              "/img/product/polar-carousel-img-1.webp",
              "/img/product/polar-carousel-img-2.webp",
              "/img/product/polar-carousel-img-3.webp",
              "/img/product/polar-carousel-img-4.webp",
              "/img/product/polar-carousel-img-5.webp"
            ],
            "name": "glo HYPER+ Золотой",
            "image": "/img/products/product-gold.webp",
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 5,
            "images": [
              "/img/product/polar-carousel-img-1.webp",
              "/img/product/polar-carousel-img-2.webp",
              "/img/product/polar-carousel-img-3.webp",
              "/img/product/polar-carousel-img-4.webp",
              "/img/product/polar-carousel-img-5.webp"
            ],
            "name": "glo HYPER+ Чёрно-красный",
            "image": "/img/products/product-red-wood.webp",
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 6,
            "images": [
              "/img/product/polar-carousel-img-1.webp",
              "/img/product/polar-carousel-img-2.webp",
              "/img/product/polar-carousel-img-3.webp",
              "/img/product/polar-carousel-img-4.webp",
              "/img/product/polar-carousel-img-5.webp"
            ],
            "name": "glo HYPER+ Синий",
            "image": "/img/products/product-blue.webp",
            "price": 200000
          },
          {
            "id": 7,
            "images": [
              "/img/product/polar-carousel-img-1.webp",
              "/img/product/polar-carousel-img-2.webp",
              "/img/product/polar-carousel-img-3.webp",
              "/img/product/polar-carousel-img-4.webp",
              "/img/product/polar-carousel-img-5.webp"
            ],
            "name": "glo HYPER+ Белый",
            "image": "/img/products/product-white.webp",
            "price_manager": 150000,
            "price": 200000
          },
          {
            "id": 8,
            "images": [
              "/img/product/polar-carousel-img-1.webp",
              "/img/product/polar-carousel-img-2.webp",
              "/img/product/polar-carousel-img-3.webp",
              "/img/product/polar-carousel-img-4.webp",
              "/img/product/polar-carousel-img-5.webp"
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
    var current_id = this.$route.params.product_id
    console.log(this.$i18n.locale)
    this.products[this.$i18n.locale].forEach(item => {
      if(item.id == current_id)
        this.current_product = item; 
    });
  },
  async asyncData(context){
    try{
      //console.log(context.route.params.product_id, this);

      
       //var posts = await context.$axios.$post('https://api.nuxtjs.dev/posts')
       //var posts = await context.$axios.$get('http://localhost:8899/json/products.json', {data:2})
       //var posts = await context.store.dispatch("app/fetchProducts");
       //console.log(context);
      return {
        
      }
    }catch(e){
      console.log(e);
      context.error(e);
    }
  },
 
}
</script>

<style lang="scss">
  .product-item{
    a{
      font-size: 16px;
    }
  }
  .product-content{
    overflow: hidden;
    position: relative;
    a{
      color: inherit;
    }
    .cap-content{
      h1{
        font-weight: 700;
        margin-bottom: 0;
        line-height: 100%;
      }
      .color-gray{
        font-size: 19px;
      }
    }
    .swiper {
      width: 100%;
      height: 100%;
      height: 300px;
      margin-left: auto;
      margin-right: auto;
    }
    .swiper-slide {
      background-size: cover;
      background-position: center;
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      img{

        pointer-events: none;
      }
      &.swiper-slide-active{
        img{

          pointer-events: auto;
        }
      }
    }
    .mySwiper2 {
      height: 80%;
      width: 100%;
    }
    .mySwiper {
      width: 80%; 
      height: 15%;
      box-sizing: border-box;
      padding: 10px 0;
    }
    .mySwiper .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.4;
    }
    .mySwiper .swiper-slide-thumb-active {
      opacity: 1;
    }

  }
  .cleaning-items{
    font-size: 12px;
    .item{
      //flex-shrink: 0;
      width: 240px;
    }
    .img-content{
      img{
        width: 72px;
      }
    }
  }
  .format-items{
    font-size: 14px;
    .item{
      @media (min-width: 992px){
        max-width: 50%;
      }
    }
    h4{
      font-weight: 600;
      font-size: 18px;
    }
  }
  .nav-def{
    ul{
      display: flex;
      border-bottom: 1px solid #f2f2f2;
      padding-left: 0;
    }
    li{
      font-size: 16px;
      list-style: none;
      position: relative;
      &:not(:nth-child(1)){
        margin-left: 40px;
      }
      &:before{
        opacity: 0;
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        background-color: black;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
    a{
      display: block;
      position: relative;
      padding: 18px 0;
      text-decoration: none;
      font-size: 14px;
      font-weight: 400;
      color: black;
      &:before{
        display: block;
        content: "";
        position: absolute;
        right: 30px;
        top: calc(50% - 4px);
        border-top: 1px solid currentColor;
        border-right: 1px solid currentColor;
        width: 8px;
        height: 8px;
        transform: rotate(45deg);
        @media (min-width: 992px){
          display: none;
        }
      }
    }
    .r-tabs-state-active{
      &:before{
        opacity: 1;
      }
      a{
        &:before{
          transform: rotate(135deg);
        }
      }
    }
    @media (max-width: 991px){
      .r-tabs-state-active{
        background-color: #f7f7f7;
      }
      .wrapper{
        padding-left: 20px;
        padding-right: 20px;
      }
      .r-tabs-accordion-title{
        a{
          //background-color: #f2f2f2;
          border-bottom: 1px solid #f2f2f2;
          padding-left: 20px;
          padding-right: 20px;
        }
      }
    }
  }

  /* responsiveTabs */
  .r-tabs .r-tabs-nav {
      margin: 0;
      padding: 0;
  }

  .r-tabs .r-tabs-tab {
      //display: inline-block;
      //margin: 0;
      //list-style: none;
  }

  .r-tabs .r-tabs-panel {
      padding: 15px 0;
      display: none;
  }

  .r-tabs .r-tabs-accordion-title {
      display: none;
  }

  .r-tabs .r-tabs-panel.r-tabs-state-active {
      display: block;
  }

  /* Accordion responsive breakpoint */
  @media only screen and (max-width: 768px) {
      .r-tabs .r-tabs-nav {
          display: none;
      }

      .r-tabs .r-tabs-accordion-title {
          display: block;
      }
  }

  // ---ELEVATEZOOM---
  /*
  .zoomWindowContainer{
    //width: 600px;
    left: -180%;
    top: -45%;
    position: relative;
  }
  */
  .zoomContainer{
   // z-index: 1;
   @media (max-width: 991px){
     display: none;
   }
  }
  .zoomWindowContainer{
    //width: 500px;
    // *{
    //   border: 5px solid rgba(black, 0.5) !important;
    //   border-radius: 3px;
    // }
    left: 15px;
    position: absolute;
  }


.breadcrumb{
	ul{
		display: flex;
    padding-left: 0;
		li{
      list-style: none;
      position: relative;
      margin-left: 40px;
      &:before{
        display: block;
        content: "";
        position: absolute;
        left: -25px;
        top: 8px;
        border-top: 1px solid currentColor;
        border-right: 1px solid currentColor;
        width: 8px;
        height: 8px;
        transform: rotate(45deg);
      }
      &:nth-child(1){
        margin-left: 0;
        &:before{
          display: none;
        }
      }
			a{
				color: inherit; 
        text-decoration: none;
			}
		}
	}
}

</style>