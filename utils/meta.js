export default {
  head() {
    return {
      //title: this.$t('meta_title'),
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
       meta: [
        // {
        //   hid: 'description',
        //   name: 'description',
        //   content: this.$t('meta_description'),
        // },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.$t('meta_keywords'),
        },
      ],
      script: [
        {src: '/js/plugins/swiper.js'},
        {src: '/js/plugins/jquery.min.js'},
        {src: '/js/plugins/jquery.fancybox.js'},
        {src: '/js/plugins/jquery.responsiveTabs.js'},
        {src: '/js/plugins/jquery.elevateZoom.min.js'},
        // {
        //   src: "/js/metrix.js",
        //   async: true,
        //   crossorigin: "anonymous",
        //   body: false,
        // },
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://glo.uz${this.$route.path}`,
          //href: `${process.env.HOST_NAME}${this.$route.path}`,
        },
        {
          href: '/css/plugins/swiper.css',
          rel: "stylesheet",
          type: "text/css",
        },
      ],
    }
  },
}
