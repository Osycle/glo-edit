<template>
  <div id="presentation">
    <div :class="$style['container']">
      <div class="container">
        <div :class="$style['title']">{{ $t('present_form_title') }}</div>

        <div :class="$style['popup']" v-if="isSended">
          <div :class="$style['popup-title']">{{ $t('present_popup_success_title') }}</div>
          <div :class="$style['popup-note']">{{ $t('present_popup_success_note') }}</div>
          <Button size="small" variant="secondary" @click="isSended = false">{{ $t('form_button_close') }}</Button>
        </div>

        <div :class="[$style['form'], isSended && $style['is-disable']]">
          <div class="row">
            <div class="col-md-6 mb-5">
              <div :class="$style['form-label']">{{ $t('form_label_fullname') }}</div>
              <Input
                      v-model="form.fullname"
                      :placeholder="$t('form_placeholder_fullname')"
                      name="fullname"
                      size="large"
                      outline
              />
            </div>
            <div class="col-md-6 mb-5">
              <div :class="$style['form-label']">{{ $t('form_label_phone') }} *</div>
              <Input
                      v-model="form.phone"
                      v-validate="'required|min:17'"
                      placeholder="+998(__)_______"
                      mask="+{998}(00)000-00-00"
                      name="phone"
                      size="large"
                      outline
              />
              <div
                      class="mt-2"
                      v-if="errors.items.length > 0"
                      :class="$style['error']">
              <span v-if="errors.items[0].rule === 'min'">
                {{ $t('form_error_min', { min: 15 }) }}
              </span>
                <span v-if="errors.items[0].rule === 'required'">
                {{ $t('form_error_required') }}
              </span>
              </div>
            </div>
            <!-- <div class="col-md-6 mb-5">
              <div :class="$style['form-label']">{{ $t('form_label_adress') }}</div>
              <Input
                      v-model="form.adress"
                      :placeholder="$t('form_placeholder_adress')"
                      name="adress"
                      size="large"
                      outline
              />
            </div> -->
            <div class="col-md-6 mb-5">
              <div :class="$style['form-label']">{{ $t('form_label_city') }} *</div>
              <Select
                      v-model="form.city"
                      :options="cities[$i18n.locale]"
                      :defaultValue="cities[$i18n.locale][0]"
                      name="city"
                      size="large"
                      outline
              />
            </div>
            <div class="col-12 mb-5">
              <Checkbox
                      :class="$style['checkbox']"
                      v-model='form.verify'
                      v-validate="'required'"
                      name="verify"
                      :label="$t('present_form_agreement', { agreement })"
              />
            </div>
            <div class="col-12">
              <Button
                      @click="sendForm"
                      size="large"
                      :disabled="!form.verify"
                      block>{{ $t('form_button_send') }}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSended: false,
      cities: {
        ru: ['Ташкент'],
        uz: ['Toshkent']
      },
      form: {
        fullname: '',
        phone: '',
        adress: '',
        city: '',
        verify: true
      }
    }
  },
  computed: {
    agreement() {
      return this.$store.state.app.privacy.agreement[this.$i18n.locale].url
    }
  },
  methods: {
    sendForm() {
      this.$validator.validate().then(valid => {
        if (valid) {
          this.$store.dispatch('app/setFormPresentation', this.form).then(res => {
            if(res.status === 'success') {
              this.$validator.reset()
              this.isSended = true
              Object.keys(this.form).forEach(key => {
                key !== 'city' && (this.form[key] = '')
              })
            }
          })
        }
      });
    }
  },
}
</script>

<style lang="scss" module>
.container {
  padding: 128px 0;
  position: relative;

  @media (max-width: $bp-md) {
    padding: 64px 0;
  }
}

.title {
  font-size: 36px;
  font-weight: 600;
  color: $color-secondary;
  margin-bottom: 48px;

  @media (max-width: $bp-md) {
    font-size: 24px;
  }
}

.form {
  position: relative;

  &.is-disable {
    pointer-events: none;
  }

  a {
    color: $color-accent;
  }
}

.error {
  color: coral;
}

.form-label {
  font-size: 24px;
  font-weight: 600;
  color: $color-secondary;
  margin-bottom: 12px;
}

.popup {
  position: absolute;
  max-width: 600px;
  width: 100%;
  height: 285px;
  background-color: $color-white;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 40px rgba($color-default, 20%);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  padding: 0 40px;
}

.popup-title {
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 8px;

  @media (max-width: $bp-md) {
    font-size: 18px;
  }
}

.popup-note {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: $bp-md) {
    font-size: 18px;
  }
}
</style>
