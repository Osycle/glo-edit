<template>
  <div>
    <Presentation />
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

