<template>
  <main>
    <div class="towrite" id="towrite">
      <div>
        <span onclick="towrite.style.display = 'none'" class="towrite-close hidden-md hidden-lg">
          <svg width="10" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path d="M19.8534546,19.1465454L12.7069092,12l7.1465454-7.1465454c0.1871948-0.1937256,0.1871948-0.5009155,0-0.6947021c-0.1918335-0.1986084-0.5083618-0.2041016-0.7069702-0.0122681l-7.1465454,7.1465454L4.8534546,4.1465454c-0.1937256-0.1871338-0.5009155-0.1871338-0.6947021,0C3.960144,4.3383789,3.9546509,4.6549072,4.1464844,4.8535156L11.2929688,12l-7.1464844,7.1464844c-0.09375,0.09375-0.1464233,0.2208862-0.1464233,0.3534546C4,19.776062,4.223877,19.999939,4.5,20c0.1326294,0.0001221,0.2598267-0.0526123,0.3534546-0.1465454l7.1464844-7.1464844l7.1465454,7.1465454C19.2401123,19.9474487,19.3673706,20.0001831,19.5,20c0.1325073-0.000061,0.2595825-0.0526733,0.3533325-0.1463623C20.048645,19.6583862,20.0487061,19.3417969,19.8534546,19.1465454z"/></svg>
        </span>
        <span onclick="towrite.style.display = 'block'" class="towrite-close hidden-xs hidden-sm">
          <svg width="10" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path d="M19.8534546,19.1465454L12.7069092,12l7.1465454-7.1465454c0.1871948-0.1937256,0.1871948-0.5009155,0-0.6947021c-0.1918335-0.1986084-0.5083618-0.2041016-0.7069702-0.0122681l-7.1465454,7.1465454L4.8534546,4.1465454c-0.1937256-0.1871338-0.5009155-0.1871338-0.6947021,0C3.960144,4.3383789,3.9546509,4.6549072,4.1464844,4.8535156L11.2929688,12l-7.1464844,7.1464844c-0.09375,0.09375-0.1464233,0.2208862-0.1464233,0.3534546C4,19.776062,4.223877,19.999939,4.5,20c0.1326294,0.0001221,0.2598267-0.0526123,0.3534546-0.1465454l7.1464844-7.1464844l7.1465454,7.1465454C19.2401123,19.9474487,19.3673706,20.0001831,19.5,20c0.1325073-0.000061,0.2595825-0.0526733,0.3533325-0.1463623C20.048645,19.6583862,20.0487061,19.3417969,19.8534546,19.1465454z"/></svg>
        </span>
      </div>
      <a href="#presentation" class="text-content">
        <span>Закажи презентацию</span>
        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M2.25 2.22242e-07C1.65326 2.22242e-07 1.08097 0.237053 0.65901 0.65901C0.237053 1.08097 0 1.65326 0 2.25V15.749C0 16.3457 0.237053 16.918 0.65901 17.34C1.08097 17.7619 1.65326 17.999 2.25 17.999H8.164L8.52 16.575L8.54 16.499H2.25C2.05109 16.499 1.86032 16.42 1.71967 16.2793C1.57902 16.1387 1.5 15.9479 1.5 15.749V2.249C1.5 2.05009 1.57902 1.85932 1.71967 1.71867C1.86032 1.57802 2.05109 1.499 2.25 1.499H15.749C15.9479 1.499 16.1387 1.57802 16.2793 1.71867C16.42 1.85932 16.499 2.05009 16.499 2.249V8.232C16.977 8.042 17.492 7.968 17.999 8.012V2.25C17.999 1.95444 17.9408 1.66178 17.8276 1.38873C17.7145 1.11568 17.5487 0.867601 17.3396 0.658656C17.1306 0.449711 16.8824 0.283999 16.6093 0.170984C16.3362 0.05797 16.0436 -0.000131137 15.748 2.22242e-07H2.248H2.25ZM12.354 11.999H8.249C8.05009 11.999 7.85932 12.078 7.71867 12.2187C7.57802 12.3593 7.499 12.5501 7.499 12.749C7.499 12.9479 7.57802 13.1387 7.71867 13.2793C7.85932 13.42 8.05009 13.499 8.249 13.499H10.854L12.354 11.999V11.999ZM5.749 5.249C5.749 5.51422 5.64364 5.76857 5.45611 5.95611C5.26857 6.14364 5.01422 6.249 4.749 6.249C4.48378 6.249 4.22943 6.14364 4.04189 5.95611C3.85436 5.76857 3.749 5.51422 3.749 5.249C3.749 4.98378 3.85436 4.72943 4.04189 4.54189C4.22943 4.35436 4.48378 4.249 4.749 4.249C5.01422 4.249 5.26857 4.35436 5.45611 4.54189C5.64364 4.72943 5.749 4.98378 5.749 5.249ZM8.249 4.499C8.05009 4.499 7.85932 4.57802 7.71867 4.71867C7.57802 4.85932 7.499 5.05009 7.499 5.249C7.499 5.44791 7.57802 5.63868 7.71867 5.77933C7.85932 5.91998 8.05009 5.999 8.249 5.999H13.749C13.9479 5.999 14.1387 5.91998 14.2793 5.77933C14.42 5.63868 14.499 5.44791 14.499 5.249C14.499 5.05009 14.42 4.85932 14.2793 4.71867C14.1387 4.57802 13.9479 4.499 13.749 4.499H8.249ZM8.249 8.249C8.15051 8.249 8.05298 8.2684 7.96199 8.30609C7.87099 8.34378 7.78831 8.39903 7.71867 8.46867C7.64903 8.53831 7.59378 8.62099 7.55609 8.71199C7.5184 8.80298 7.499 8.90051 7.499 8.999C7.499 9.09749 7.5184 9.19502 7.55609 9.28601C7.59378 9.37701 7.64903 9.45969 7.71867 9.52933C7.78831 9.59897 7.87099 9.65422 7.96199 9.69191C8.05298 9.7296 8.15051 9.749 8.249 9.749H13.749C13.8475 9.749 13.945 9.7296 14.036 9.69191C14.127 9.65422 14.2097 9.59897 14.2793 9.52933C14.349 9.45969 14.4042 9.37701 14.4419 9.28601C14.4796 9.19502 14.499 9.09749 14.499 8.999C14.499 8.90051 14.4796 8.80298 14.4419 8.71199C14.4042 8.62099 14.349 8.53831 14.2793 8.46867C14.2097 8.39903 14.127 8.34378 14.036 8.30609C13.945 8.2684 13.8475 8.249 13.749 8.249H8.249ZM4.75 10C5.01522 10 5.26957 9.89464 5.45711 9.70711C5.64464 9.51957 5.75 9.26522 5.75 9C5.75 8.73478 5.64464 8.48043 5.45711 8.29289C5.26957 8.10536 5.01522 8 4.75 8C4.48478 8 4.23043 8.10536 4.04289 8.29289C3.85536 8.48043 3.75 8.73478 3.75 9C3.75 9.26522 3.85536 9.51957 4.04289 9.70711C4.23043 9.89464 4.48478 10 4.75 10ZM5.75 12.75C5.75 13.0152 5.64464 13.2696 5.45711 13.4571C5.26957 13.6446 5.01522 13.75 4.75 13.75C4.48478 13.75 4.23043 13.6446 4.04289 13.4571C3.85536 13.2696 3.75 13.0152 3.75 12.75C3.75 12.4848 3.85536 12.2304 4.04289 12.0429C4.23043 11.8554 4.48478 11.75 4.75 11.75C5.01522 11.75 5.26957 11.8554 5.45711 12.0429C5.64464 12.2304 5.75 12.4848 5.75 12.75V12.75ZM16.1 9.67L10.198 15.571C9.85352 15.9152 9.60914 16.3466 9.491 16.819L9.034 18.649C8.834 19.446 9.556 20.167 10.352 19.968L12.182 19.51C12.6543 19.3921 13.0857 19.1481 13.43 18.804L19.33 12.9C19.7476 12.469 19.979 11.8911 19.9743 11.291C19.9695 10.6909 19.7289 10.1168 19.3045 9.69248C18.8801 9.2682 18.3059 9.02783 17.7058 9.02325C17.1057 9.01867 16.5278 9.25025 16.097 9.668L16.1 9.67Z"/></svg> -->
      </a>
    </div>
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
    LayoutFindStore: () => import('~/components/layout/FindStore.vue')
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
  head() {
    return {
      title: "Электронные сигареты Glo Hyper в Узбекистане купить систему нагревания табака Glo (Гло) в Ташкенте",
      meta: [
        {
          hid: 'description',
          name: "description",
          content: "Официальный сайт продажи систем для нагрева табака Glo в Ташкенте и Узбекистане &#11088; от Бритиш Американ Тобакко. Устройств нагревания табака и стики для Гло (Glo) можно купить в Ташкенте. &#10133; Бесплатный тест драйв"
        },
      ],
    }
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

<style lang="scss">
  @keyframes toblock{
    0%{
      opacity: 0;
      pointer-events: none;
    }
    92%{
      opacity: 0;
      pointer-events: none;
    }
    100%{
      opacity: 1;
      pointer-events: auto;
    }
  }
  @keyframes wayRight{
    0%{
      transform: translateY(0px);
      right: calc(50% - 150px);
    }
    25%{
      transform: translateY(100px);
      right: calc(50% - 150px);
    }
    75%{
      transform: translateY(100px);
      right: 20px;
    }
    100%{
      transform: translateY(0px);
      right: 20px;
    }
  }
  @keyframes radial-pulse{
    0% {
        box-shadow: 0 0 0 0 rgba(#E35205, 0.2);
    }
    100% {
        box-shadow: 0 0 0 20px transparent;
    }
  }
  .towrite-close{
    &:hover{
      cursor: pointer;
    }

    svg{
      width: 30px;
      fill: #ca4c09;
      right: calc(50%);
      position: absolute;
      top: 0;
      transform: translate(50%, -100%);
    }
  }
  .towrite{
    //display: none;
    position: fixed;
    z-index: 2;
    right: calc(50% - 103px);
    //transform: translateX(-50%);
    bottom: 60px;
    text-align: center;
    transition: all 0.3s ease;
    animation: toblock 8s linear 0s 1;
    &:hover{
      opacity: 1;
      .text-content{
        background-color: rgba(#E35205, 1);
      }
    }
    &[style*='display']{
      .towrite-close{
        display: none;
      }
      animation: wayRight 2s ease 0s 1;
      right: 20px;
    }
    a{
      text-decoration: none;
      color: white; 
      display: block;
    }
    @media (min-width: 992px){
      opacity: 0.5;
    }
    @media (max-width: 991px){
      //width: calc(100% - 40px);
    }
    .text-content{
      padding: 20px 25px;
      //background-color: #e35205;
      background-color: rgba(#E35205, 1);
      transition: 0.2s ease;
      font-size: 14px;
      line-height: 100%;
      //width: 100px;
      //height: 100px;
      border-radius: 0;
      display: inline-block;
      text-align: center;
      animation: radial-pulse 2s ease-in-out 0.5s infinite;
      @media (max-width: 991px){
        border-radius: 0;
        height: auto;
        padding: 15px 20px;
        font-size: 14px;
        margin: auto;
      }
    }
    .icon-content{
      background-color: #e35205;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: scale(1);
      
      transition: 0.2s ease;
      color: white;
      width: 50px;
      height: 50px;
      svg{
        fill: currentColor;
        width: 30px;
      }
      @media (any-hover) {
        &:hover{
          transform: scale(1.1);
        }
      }
    }

    @media (max-width: 991px){
      //right: 20px;
      bottom: 60px;
    }
    @media (min-width: 992px){
      right: calc(50% - 150px);
      .text-content{
        padding: 30px 55px;
        font-size: 17px;
      }
    }
  }
</style>
