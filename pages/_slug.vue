<template>
  <div :class="$style['page']">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h1 :class="$style['title']" data-title-line>{{ title }}</h1>
          <nuxt-content :document="article" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  async asyncData({ $content, params, route, a }) {
    try {
      console.log($content, params, route.path);
      var uzL = "";
      if(route.path.match(/\w+/gim).length == 2)
        var uzL = route.path.match(/\w+/gim)[0]
      const article = await $content("/cookie/"+uzL, params.slug).fetch()
      const title = article.title;
      return { article, title }
    } catch(err) {
      error({
        statusCode: 404,
        message: 'Page could not be found'
      })
    }
  },
  // async asyncData({ $content, route, error, store }) {
  //   try {
  //     const page = await $content(route.path).fetch()
  //     const { title } = await $content(route.path).only(['title']).fetch()
  //     return { page, title }
  //   } catch(err) {
  //     error({
  //       statusCode: 404,
  //       message: 'Page could not be found'
  //     })
  //   }
  // },
}
</script>

<style lang="scss" module>
.page {
  padding: 80px 0;

  a {
    color: $color-accent;
  }
}

.title {
  font-weight: 700;
  font-size: 36px;
  text-transform: uppercase;
  margin-bottom: 80px;
}
</style>
