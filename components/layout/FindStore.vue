<template>
  <div :class="$style['container']" ref="store">
    <div class="container">
      <div :class="$style['find']" id="store">
        <div class="row" v-scroll-reveal>
          <div class="col-12">
            <h2 :class="$style['title']" data-title-line>
              {{ $t('find_store_title_2') }}
            </h2>
          </div>
          <div class="col-md-6">
            <div :class="$style['note']">{{ $t('find_store_note') }}</div>
          </div>
        </div>

        <div v-if="!Boolean(locationObject)" :class="$style['map-empty']">
          <Preloader :class="$style['map-loader']" />
        </div>

        <Map
            v-scroll-reveal
            v-if="locationObject"
            :class="$style['map']"
            :locations="locationObject"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      locations: null,
    }
  },
  computed: {
    locationObject() {
      const result = []

      const keys = {
        '№': 'id',
        Широта: 'lat',
        Долгота: 'long',
        Название: 'name',
        'Есть девайсы': 'devices',
        'Есть стики': 'sticks',
        Активность: 'active',
        Регион: 'region',
        'Адрес рус': 'adress_ru',
        'Адрес узб': 'adress_uz',
        'Гарантийный центр': 'guarantee',
        'Код RCS': 'code_RCS',
        'Ориентир рус': 'guide_ru',
        'Ориентир узб': 'guide_uz',
      }

      if (this.locations) {
        this.locations.forEach((item) => {
          const values = {}
          Object.keys(item).forEach((key) => {
            values[keys[key]] = item[key]
          })

          result.push(values)
        })
      }

      return result
    },
  },
  methods: {
    addApiMaps() {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://api-maps.yandex.ru/2.1/?apikey=40e02c99-a2e0-4fe6-af2f-d7ef86481489&lang=ru_RU';

      document.head.appendChild(script);
    },
    parseSheet(sheetId, sheetName = null) {
      return this.$gsparser.parse(sheetId, sheetName)
    },
  },
  async mounted() {
    this.addApiMaps()
    const sheetId = '1G2ptp-6ieW89yRk-0zPXE6MmBXfLzTnv8SAiozXcyyA'
    const data = await this.parseSheet(sheetId)

    this.locations = data
  }
}
</script>

<style lang="scss" module>
.container {
  padding: 0 0 160px 0;

  @media (max-width: $bp-md) {
    padding: 0 0 64px 0;
  }
}

.title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 80px;

  @media (max-width: $bp-md) {
    font-size: 24px;
    margin-bottom: 40px;
  }
}

.image {
  width: 100%;
}

.headline {
  font-size: 36px;
  color: $color-secondary;
  margin-bottom: 24px;
  font-weight: 600;

  @media (max-width: $bp-lg) {
    font-size: 20px;
  }
}

.note {
  font-size: 24px;
  color: $color-secondary;

  @media (max-width: $bp-lg) {
    font-size: 18px;
  }
}

.find {
  margin-top: 160px;

  @media (max-width: $bp-md) {
    margin-top: 32px;
  }
}

.map {
  margin-top: 38px;
}

.map-empty {
  min-height: 710px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
