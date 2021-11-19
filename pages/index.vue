<template>
  <main>
    
    <LazyHydrate when-visible>
      <LayoutHeroCarousel
          data-visible="hero"
          :visible="visible.hero"
          v-observe-visibility="visibilityChanged"
      />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <LayoutAbout />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <LayoutFactDetails />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <LayoutBenefits />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <LayoutFactBenefits />
    </LazyHydrate>

    <LayoutPresentation />

    <LayoutProducts />

    <LayoutShopList />

    <LazyHydrate when-visible>
      <LayoutFindStore />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <LayoutContacts />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <LayoutFAQ />
    </LazyHydrate>
  </main>
</template>

<script>
import { ObserveVisibility } from 'vue-observe-visibility'
import LazyHydrate from 'vue-lazy-hydration';
import Benefits from "~/components/layout/Benefits";

export default {
  components: {
    Benefits,
    LazyHydrate,
    LayoutFindStore: () => import('../components/layout/FindStore.vue')
  },
  directives: {
    'observe-visibility': ObserveVisibility
  },
  data() {
    return {
      visibleStore: false,
      visible: {}
    }
  },
  mounted(){
    console.log(this);
    
  }, 
  methods: {
    visibilityChanged(isVisible, entry) {
      this.$set(this.visible, entry.target.dataset.visible, entry.isIntersecting)

      if(entry.target.dataset.visible === 'store') {
        this.visibleStore || (this.visibleStore = isVisible)
      }
    }
  },
}
</script>
