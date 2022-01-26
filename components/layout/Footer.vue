<template>
  <footer :class="$style['footer']">
    <div class="lim">
      <div class="container">
        <div class="lim-content">        
          <div class="icon-content">
            <span class="text-age">
              20+
            </span>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- <path d="M7.49403 13.9V15.052H10.464V26.5H11.76V13.9H7.49403ZM21.9899 19.894C23.2859 19.39 24.0059 18.436 24.0059 17.122C24.0059 15.07 22.2239 13.792 19.5599 13.792C16.8959 13.792 15.1499 15.07 15.1499 17.122C15.1499 18.436 15.8519 19.39 17.1299 19.894C15.5639 20.416 14.6999 21.478 14.6999 22.99C14.6999 25.222 16.5359 26.608 19.5599 26.608C22.5659 26.608 24.4559 25.222 24.4559 22.99C24.4559 21.496 23.5739 20.416 21.9899 19.894ZM16.4459 17.158C16.4459 15.754 17.6519 14.89 19.5599 14.89C21.4499 14.89 22.6919 15.754 22.6919 17.176C22.6919 18.544 21.5219 19.426 19.5599 19.426C17.5979 19.426 16.4459 18.544 16.4459 17.158ZM19.5599 25.51C17.3279 25.51 16.0139 24.538 16.0139 22.972C16.0139 21.424 17.3279 20.452 19.5599 20.452C21.7919 20.452 23.1239 21.424 23.1239 22.972C23.1239 24.538 21.7919 25.51 19.5599 25.51ZM34.4045 19.678H31.0565V16.384H29.9225V19.678H26.5745V20.74H29.9225V24.016H31.0565V20.74H34.4045V19.678Z" fill="black"></path> -->
            <circle cx="20" cy="20" r="19.5" stroke="#2A2C2C"></circle>
            </svg>
          </div>
          <div class="text-content"  v-if="$i18n.locale == 'uz'">Ushbu innovatsion mahsulot sizning sog‘lingizga zarar yetkazishi va o‘ziga qaram qilishi mumkin. Faqatgina 20 yoshga yetgan shaxslarga mo‘ljallangan.</div>
          <div class="text-content" v-else>Этот инновационный продукт может вредить вашему здоровью и вызывает привыкание. Предназначен только для лиц достигших 20 лет.</div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div :class="$style['logo-container']">
            <Logo :class="$style['logo']" inverse />
          </div>
        </div>
      </div>
      <div class="row">
        <div :class="$style['contacts']">
          <div class="row justify-content-between">
            <div class="col-md-6 mb-5">
              <div :class="$style['title']" data-title-line>{{ $t('footer_helpfull_links') }}</div>
              <div class="row">
                <div class="col-md-6">
                  <div :class="$style['links']">
                    <NuxtLink
                      rel="nofollow"
                      :to="link.path"
                      v-for="link in links"
                      :key="link.name">{{ link.name }}
                    </NuxtLink>
                    <a rel=nofollow :href="$store.state.app.privacy.agreement[$i18n.locale].url" target="_blank">
                      {{ $t('footer_user_argreement') }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4" data-aos-delay="200">
              <div :class="$style['title']" data-title-line>{{ $t('footer_contacts') }}</div>
              <div :class="$style['contact-list']">
                <ContactLink type="phone" />
                <ContactLink type="bot" />
                <ContactLink type="instagram" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col mb-11">
          <div :class="$style['copy']">
            {{ $t('note_campare') }}
            <!-- <br>
            {{ $t('note_health') }} -->
            <br>
            {{ $t('note_stick') }}
            <br>
            {{ $t('note_battery') }}
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    links() {
      return [
        {
          name: this.$t('footer_user_cookies'),
          path: this.localePath('/cookie')
        }
      ]
    },
    contacts() {
      return this.$store.state.app.contacts
    }
  },
}
</script>

<style lang="scss" scoped>
.lim{
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9;
  background-color: #e9e9e9;
  width: 100%;
  .icon-content{
    position: relative;
    margin-right: 10px;
    .text-age{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .lim-content{
    padding-top: 5px;
    padding-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: 15px;
    line-height: 100%;
    @media (max-width: 991px){
      font-size: 10px;
    }
  }
}
[lang="uz"]{
  .lim-content{
    @media (max-width: 991px){
      font-size: 9px;
    }
  }
}
</style>
<style lang="scss" module>

.footer {
  flex-shrink: 0;
  background-color: $color-default;
  color: $color-secondary;
  padding: 50px 0;
}

.logo-container {
  margin-bottom: 135px;
}

.logo {
  width: 100px;
}

.title {
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 94px;
  color: $color-white;

  @media (max-width: $bp-md) {
    font-size: 24px;
  }

  &::before {
    background-color: $color-accent;
  }
}

.links {
  display: flex;
  flex-direction: column;

  a {
    color: $color-secondary;
    text-decoration: none;

    &:not(:last-child) {
      margin-bottom: 16px;
    }

    &:hover {
      color: $color-accent;
    }
  }
}

.copy {
  margin-top: 125px;

  @media (max-width: $bp-md) {
    margin-top: 80px;
  }
}


.contact-list {
  display: flex;
  flex-wrap: wrap;
}

.contact-link {
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  color: $color-secondary;
  margin-bottom: 40px;
  align-items: center;

  &:hover {
    color: $color-accent;
  }

  &:not(:last-child) {
    margin-right: 65px;
  }

  img {
    margin-right: 16px;
  }
}
</style>
