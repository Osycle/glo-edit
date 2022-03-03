<template>
  <div>
    <Presentation />
    <div class="link-tomain">
      <div class="container">
        <nuxt-link to="/"><u>Узнать больше о glo hyper+</u></nuxt-link>
      </div>
    </div>
    <style>
      body{
        height: auto !important;
        overflow: auto !important;
      }
      header nav,
      .footer-center, .footer-end{
        display: none !important;
      }
      
      #verify-block{
        pointer-events: none;
        opacity: 0;
      }
    </style>
  </div>
</template>

<style lang="scss">
  .link-tomain{
    text-align: center;
    margin-top: -70px;
    margin-bottom: 80px;
    z-index: 1;
    position: relative;
    a{
      color: black;
      font-size: 25px;
    }
    @media (max-width: 991px){
      margin-top: -20px;
    }
  }
</style>

<script>


import Presentation from "~/components/layout/Presentation";

export default {
  created(){

  },
  mounted(){

    
    function setCookie(name, value, options = {}) {

      options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options
      };

      if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
      }

      let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

      for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
          updatedCookie += "=" + optionValue;
        }
      }

      document.cookie = updatedCookie;
    }
    function getCookie(name) {
      let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    function deleteCookie(name) {
      setCookie(name, "", {
        'max-age': -1
      })
    }

    var vm = this;
    window.asd = vm;
  },
  components:{
    Presentation
  }
}
</script>

