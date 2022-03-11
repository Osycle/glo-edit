<template>
  <div class="product">
    <div class="container">
      <div class="breadcrumb">
        <ul>
          <li><nuxt-link to="">Главная</nuxt-link></li>
          <li><nuxt-link to="">Название товара</nuxt-link></li>
        </ul>
      </div>
      <div class="prduct-content">
        <div class="col-md-6">
          <!-- Slider main container -->
          <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
              <!-- Slides -->
              <div class="swiper-slide">Slide 1</div>
              <div class="swiper-slide">Slide 2</div>
              <div class="swiper-slide">Slide 3</div>
              ...
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
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
      script: [
        {src: 'https://unpkg.com/swiper@8/swiper-bundle.min.js'},
      ],
      link: [
        {
          href: 'https://unpkg.com/swiper@8/swiper-bundle.min.css',
          rel: "stylesheet",
          type: "text/css",
        },
      ],
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
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  },
  data(){
    return {
      posts: null,


    }
  },
  async asyncData(context){
    try{
      //console.log(context);
       //var posts = await context.$axios.$post('https://api.nuxtjs.dev/posts')
       //var posts = await context.$axios.$get('http://localhost:8899/json/products.json', {data:2})
       var posts = await context.store.dispatch("app/fetchProducts");
       //console.log(context);
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
