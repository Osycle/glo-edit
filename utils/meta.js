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
      link: [
        {
          rel: 'canonical',
          href: `https://glo.uz${this.$route.path}`,
          //href: `${process.env.HOST_NAME}${this.$route.path}`,
        },
      ],
    }
  },
}
