<template>
  <footer :class="$style['footer']">
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
        <div class="col">
          <div :class="$style['copy']">
            {{ $t('note_campare') }}
            <br>
            {{ $t('note_health') }}
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
