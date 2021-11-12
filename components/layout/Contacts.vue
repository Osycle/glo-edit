<template>
  <div :class="$style['contacts']" id="contacts">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-md-4" v-scroll-reveal>
          <div :class="$style['title']" data-title-line>{{ $t('contacts_in_contact') }}</div>
          <ContactLink type="phone" />
        </div>
        <div class="col-md-4" v-scroll-reveal="{ delay: 400 }">
          <div :class="$style['title']" data-title-line>{{ $t('contacts_bot') }}</div>
          <ContactLink type="bot" />
        </div>
        <div class="col-md-4" v-scroll-reveal="{ delay: 800 }">
          <div :class="$style['title']" data-title-line>{{ $t('contacts_instagram') }}</div>
          <ContactLink type="instagram" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    contacts() {
      return this.$store.state.app.contacts
    }
  }
}
</script>

<style lang="scss" module>
.contacts {
  background: url('~/assets/images/fact-details-bg.jpg') 0 0;
  background-size: cover;
  padding: 140px 0;
}

.title {
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 64px;
  max-width: 450px;

  @media (max-width: $bp-xxl) {
    font-size: 24px;
  }
}

.contact-link {
  font-size: 32px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  color: $color-secondary;
  margin-bottom: 40px;
  display: flex;
  align-items: center;

  @media (max-width: $bp-xxl) {
    font-size: 24px;
  }

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
