<template>
  <header :class="[$style['header'], ifScroll && $style['active']]">
    <div class="container">
      <div class="row">
        <div class="col-4 col-md-2">
          <Logo inverse :class="[$style['logo'], ifScroll && $style['active']]" @click="toHome" />
        </div>
        <div class="col-8 col-md-10">
          <div :class="$style['menu']">
            <nav
              v-if="hiddenMenuWhenContestPage"
              :class="[$style['nav'], show && $style['is-show']]"
            >
              <a
                href="#"
                :class="$style['nav-item']"
                v-for="item in menu"
                :key="item.id"
                @click.prevent="changeRoute(item)"
              >
                {{ $t(`menu_${item.id}`) }}
              </a>
              <a
                :href="contacts.phone.path"
                :class="[$style['nav-item'], $style['is-phone']]"
              >
                <span>
                   {{ $t('menu_support') }}
                </span>
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.70102 11.044C5.4414 10.9969 4.70092 15.8491 3.86805 15.9904C3.03518 16.1317 -0.712967 14.7185 0.119955 11.1853C0.952876 7.65209 7.47748 1.71635 10.2538 0.303081C12.4749 -0.827538 14.4647 1.48081 14.9737 2.70565C14.985 3.28028 15.0268 3.71144 14.9737 4.68423C13.4929 5.10821 10.6702 4.68423 10.6702 4.68423C10.8091 3.41228 9.6985 3.41228 9.55968 3.55361C9.42086 3.69494 3.45164 9.77201 3.174 10.4787C2.95189 11.044 3.96065 11.0911 4.70102 11.044Z" fill="currentColor"/>
                </svg>

                {{ contacts.phone.name }}
              </a>
            </nav>

            <a href="/" :class="$style['lang']" @click.prevent="changeLocale">
              {{ currentLocale }}
            </a>

            <a :href="contacts.bot.path" target="_blank" rel="nofollow">
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.0103683 18.4516C-0.245015 8.84703 8.01056 -0.363009 19.1737 0.0110167C28.2022 0.314059 37.0068 7.55159 37 18.528C36.9945 28.7728 28.9506 37.0245 18.4772 36.9999C6.77871 36.9713 -0.309202 27.1961 0.0103683 18.4516ZM27.7311 12.2064C27.7721 11.0884 26.8857 10.4728 25.886 10.8496C19.6121 13.2138 13.3436 15.5918 7.07234 17.9629C6.608 18.139 6.2379 18.4011 6.25019 18.9416C6.26248 19.4835 6.64897 19.7224 7.11877 19.8808C8.20722 20.2466 9.3025 20.5961 10.3732 21.0097C11.2909 21.3646 12.0926 21.254 12.9161 20.723C15.4631 19.0781 18.0333 17.4701 20.5954 15.8484C20.9832 15.6027 21.367 15.3461 21.7699 15.1277C21.8791 15.069 22.0539 15.129 22.2001 15.1358C22.1796 15.2942 22.2069 15.4853 22.129 15.6054C22.0061 15.7938 21.8122 15.9344 21.6469 16.0941C19.6448 18.0229 17.6387 19.9477 15.642 21.8819C14.9701 22.5317 14.9892 23.0477 15.7294 23.5869C17.8462 25.1294 19.9658 26.6665 22.1058 28.1776C23.0495 28.8437 24.1093 28.4124 24.4125 27.2903C24.4548 27.1347 24.4876 26.9777 24.5217 26.8207C25.2633 23.4586 26.0076 20.0951 26.7464 16.7316C27.0851 15.1863 27.4183 13.6384 27.7311 12.2064Z"
                  fill="white"
                />
              </svg>
            </a>

            <button
              v-if="hiddenMenuWhenContestPage"
              :class="[$style['burger-button'], show && $style['is-active']]"
              @click="showMenu"
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      menu: [
        {
          id: 'about',
        },
        {
          id: 'catalog',
        },
        // {
        //   id: 'contest',
        //   path: '/summer-leb',
        // },
        {
          id: 'store',
        },
        {
          id: 'contacts',
        },
        {
        id: 'faq',
        path: '/faq',
        },
      ],
      ifScroll: false
    }
  },
  watch: {
    show(value) {
      // document.body.classList.toggle('is-overflow', value);
      document.querySelectorAll('.nav').classList.toggle('is-hidden', value);
      document.querySelectorAll('.burger-button').classList.toggle('is-hidden', value);
    },
  },
  mounted() {
    window.addEventListener('scroll', (event) => this.ifScroll = window.scrollY > 120);
  },
  computed: {
    currentLocale() {
      return this.$i18n.locales.filter((i) => i !== this.$i18n.locale)[0]
    },
    contacts() {
      return this.$store.state.app.contacts
    },
    hiddenMenuWhenContestPage() {
      return !this.$route.name.startsWith('summer-leb')
    },
  },
  methods: {
    changeLocale() {
      this.$i18n.setLocale(this.currentLocale)
    },
    showMenu() {
      this.show = !this.show
    },
    scrollTo(id) {
      if (process.client) {
        const element = document.querySelector(`#${id}`)

        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    },
    changeRoute(value) {
      if(value.path) {
        this.$router.push(this.localePath(value.path))
      } else {
        this.show = false
        this.scrollTo(value.id)
      }
    },
    toHome() {
      this.$router.push(this.localePath('/'))
    },
  },
}
</script>

<style lang="scss" module>
.header {
  position: fixed;
  min-height: 120px;
  background-color: $color-default;
  display: flex;
  align-items: center;
  z-index: 9;
  width: 100%;
  top: 0;
  transition: min-height .5s cubic-bezier(0.25, 0.74, 0.22, 1.1);

  @media (max-width: $bp-xxl) {
    min-height: 90px;
  }

  &.active {
    background-color: rgba($color-default, .85);
    min-height: 80px;
  }
}

.logo {
  width: 90px;
  cursor: pointer;
  transition: transform .5s cubic-bezier(0.25, 0.74, 0.22, 1.1);
  &.active {
    transform: scale(0.75);
  }
}

.menu {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
}

.nav {
  display: flex;
  align-items: center;

  &.is-hidden {
    display: none;
  }

  @media (max-width: $bp-lg) {
    position: absolute;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    left: 0;
    width: 100%;
    background-color: $color-default;
    top: 90px;
    z-index: 2;
    height: 0;
    overflow: hidden;
    transition: 0.2s;

    &.is-show {
      height: calc(100vh - 90px);
    }
  }
}

.nav-item {
  margin-right: 46px;
  text-decoration: none;
  color: $color-white;

  &:hover {
    color: $color-accent;
  }

  @media (max-width: $bp-md) {
    font-size: 24px;
    margin-right: 0;

    &:not(:last-child) {
      margin-bottom: 46px;
    }
  }
}

.is-phone {
  display: flex;
  align-items: center;

  span {
    font-size: 10px;
    max-width: 110px;
    padding-right: 10px;
    color: $color-secondary;
  }

  svg {
    margin-right: 8px;
    margin-top: -4px;
  }
}

.lang {
  margin-right: 40px;
  text-decoration: none;
  color: $color-accent;
  text-transform: uppercase;

  &:hover {
    color: lighten($color-accent, 20%);
  }
}

.burger-button {
  display: none;
  flex-direction: column;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-left: 32px;

  span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: $color-white;

    &:not(:last-child) {
      margin-bottom: 6px;
    }
  }

  @media (max-width: $bp-lg) {
    display: flex;
  }
}
</style>
