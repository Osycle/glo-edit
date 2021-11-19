<template>
  <div :class="$style['wrapper']" v-if="!verify" id="verify-block">
    <div :class="$style['modal']">
      <Logo :class="[$style['logo']]"/>
      <template v-if="!blocked">
        <div :class="$style['note']" v-html="$t('age_checker_note')">
        </div>
        <div :class="$style['alert']">
          <div :class="$style['alert-badge']">
            20+
          </div>
          <div :class="$style['alert-desc']">{{ $t('age_checker_agree') }}
          </div>
        </div>
        <div :class="$style['change-locale']">
          <label>
            {{ $t('age_checker_choose_lang') }}
            <select @input="changeLocale" :value="locale">
              <option value="uz">O'zbek</option>
              <option value="ru">Русский</option>
            </select>
          </label>
        </div>
        <div :class="$style['note']">
          {{ $t('age_checker_please') }}
        </div>
        <div :class="$style['controls']">
          <Input
            :class="$style['control-input']"
            size="small"
            mask="DD/MM/YYYY"
            :maskOptions="maskOptions"
            v-model="input"
            :placeholder="$t('age_checker_placeholder')">
          </Input>
          <Button :class="$style['control-button']" size="small" @click="checkForm">{{ $t('age_checker_accept') }}</Button>
        </div>
        <div :class="$style['note']">
          {{ $t('footer_copy') }}
        </div>
      </template>

      <template v-else>
        <div :class="$style['icon']">
          <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M64 8C52.9243 8 42.0972 11.2843 32.8881 17.4377C23.6789 23.5911 16.5013 32.3371 12.2628 42.5697C8.02426 52.8024 6.91528 64.0621 9.07605 74.9251C11.2368 85.788 16.5703 95.7662 24.402 103.598C32.2338 111.43 42.212 116.763 53.075 118.924C63.9379 121.085 75.1976 119.976 85.4303 115.737C95.663 111.499 104.409 104.321 110.562 95.1119C116.716 85.9028 120 75.0758 120 64C120 49.1479 114.1 34.9041 103.598 24.402C93.096 13.9 78.8521 8 64 8ZM64 112C54.5065 112 45.2262 109.185 37.3327 103.911C29.4391 98.6362 23.2868 91.1397 19.6538 82.3688C16.0208 73.598 15.0702 63.9468 16.9223 54.6357C18.7744 45.3246 23.346 36.7718 30.0589 30.0589C36.7718 23.346 45.3246 18.7744 54.6357 16.9223C63.9468 15.0702 73.598 16.0208 82.3688 19.6538C91.1397 23.2868 98.6363 29.4391 103.911 37.3326C109.185 45.2262 112 54.5065 112 64C112 76.7304 106.943 88.9394 97.9411 97.9411C88.9394 106.943 76.7304 112 64 112Z" fill="#E35205"/>
            <path d="M60 32H68V76H60V32Z" fill="#E35205"/>
            <path d="M64 88C62.8133 88 61.6533 88.3519 60.6666 89.0112C59.6799 89.6705 58.9109 90.6075 58.4567 91.7039C58.0026 92.8003 57.8838 94.0067 58.1153 95.1705C58.3468 96.3344 58.9182 97.4035 59.7574 98.2426C60.5965 99.0818 61.6656 99.6532 62.8295 99.8847C63.9933 100.116 65.1997 99.9974 66.2961 99.5433C67.3925 99.0891 68.3295 98.3201 68.9888 97.3334C69.6481 96.3467 70 95.1867 70 94C70 92.4087 69.3679 90.8826 68.2426 89.7574C67.1174 88.6321 65.5913 88 64 88Z" fill="#E35205"/>
          </svg>
        </div>
        <div :class="$style['title']">
          {{ $t('age_checker_denied') }}
        </div>
        <div :class="$style['desc']">
          {{ $t('age_checker_order_by') }}
        </div>
        <div :class="$style['note']">
          {{ $t('footer_copy') }}
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Imask from 'imask'

export default {
  data() {
    return {
      input: '',
      verify: false,
      blocked: false,
      maskOptions: {
        blocks: {
          DD: {
            mask: Imask.MaskedRange,
            from: 0,
            to: 31
          },
          MM: {
            mask: Imask.MaskedRange,
            from: 1,
            to: 12
          },
          YYYY: {
            mask: Imask.MaskedRange,
            from: 1900,
            to: new Date().getFullYear()
          }
        }
      }
    }
  },
  watch: {
    verify(value) {
      if(value) {
        this.$cookies.set('verify', true, {
          maxAge: 60 * 30
        })

        document.body.style.overflow = ''
      }
    }
  },
  computed: {
    locale() {
      return this.$i18n.locale
    }
  },
  methods: {
    changeLocale(e) {
      this.$i18n.setLocale(e.target.value)
    },
    isDate20(day, month, year) {
      const birthDay = new Date(parseInt(year) +20, parseInt(month) -1, parseInt(day))
      return year && year.length === 4 && birthDay <= new Date()
    },
    checkForm() {
      const date = this.input.split('/')

      if(this.isDate20(date[0], date[1], date[2])) {
        this.$store.dispatch('app/setAgeGate', this.input).then(e => {
          this.verify = true
        })
      } else {
        this.blocked = true
      }
    },
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        console.log('complete');
        if(this.$router.currentRoute.hash == '#presentation') {
          document.getElementById('presentation').scrollIntoView();
        }
        else if(this.$router.currentRoute.hash == '#shops') {
          document.getElementById('shops').scrollIntoView();
        }
        console.log('scroll');
      }
    }

    if(process.env.NODE_ENV === 'development') {
      return this.verify = true
    }
    this.verify = Boolean(this.$cookies.get('verify'))

    if(!this.verify) {
      document.body.style.overflow = 'hidden'
    }
  },
}
</script>

<style lang="scss" module>
.wrapper {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  display: flex;
  padding: 32px;
  background-color: $color-light;
  overflow: auto;
  top: 0;
  @media (max-width: $bp-md) {
    padding: 5px;
  }
}

.modal {
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  background-color: $color-white;
  margin: auto;
  padding: 60px;
  text-align: center;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);

  @media (max-width: $bp-md) {
    padding: 25px 15px;
    margin: 0;
  }

  .logo {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    svg {
      @media (max-width: $bp-md) {
        width: 30px;
      }
    }
  }
}

.title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
  margin-top: 54px;
}

.desc {
  font-size: 24px;
  margin-bottom: 50px;
}

.note {
  font-size: 18px;
  color: $color-secondary;

  @media (max-width: $bp-md) {
    font-size: 10px;
    margin-top: 10px;
  }
}

.alert {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 32px;

  @media (max-width: $bp-md) {
    margin-bottom: 0;
  }

  @media (max-width: $bp-sm) {
    flex-wrap: wrap;
    justify-content: center;
  }
}

.alert-badge {
  min-width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  border: 2px solid $color-default;
  border-radius: 100%;
  margin-right: 32px;

  @media (max-width: $bp-md) {
    min-width: 40px;
    height: 40px;
    margin: auto;
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 700;
  }

  @media (max-width: $bp-sm) {

  }
}

.alert-desc {
  text-align: left;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;

  @media (max-width: $bp-md) {
    font-size: 10px;
    text-align: center;
  }
}

.change-locale {
  margin: 10px 0;

  select {
    border: none;
    color: $color-accent;
    outline: none;
    margin-left: 8px;
    background-color: transparent;
  }
}

.control-button {
  @media (max-width: $bp-sm) {
    width: 100%;
    margin-top: 10px;
  }
}

.control-input {
  margin-right: 20px;

  @media (max-width: $bp-sm) {
    margin-right: 0;
  }

  input {
    text-align: center;
  }
}

.controls {
  margin: 24px auto;
  display: flex;
  justify-content: center;
  width: 400px;

  @media (max-width: $bp-md) {
    margin: 10px auto;
  }

  @media (max-width: $bp-sm) {
    flex-wrap: wrap;
    width: 100%;
  }
}
</style>
