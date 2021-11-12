<template>
  <div :class="$style['container']">
    <div class="row mb-5">
      <div class="col-12">
        <div :class="$style['label']">{{ $t('find_store_adress') }}</div>
      </div>
      <div class="col-lg-5">
        <div :class="$style['search']">
          <input
            id="suggest"
            :class="$style['search-input']"
            type="text">
          <div :class="$style['search-icon']">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2778 0C15.954 0 20.5556 4.60152 20.5556 10.2778C20.5556 12.5743 19.8018 14.6959 18.5286 16.4071L22.3385 20.2171C22.9242 20.8029 22.9242 21.7527 22.3384 22.3385C21.7526 22.9242 20.8029 22.9242 20.2171 22.3384L16.4073 18.5285C14.696 19.8018 12.5743 20.5556 10.2778 20.5556C4.60152 20.5556 0 15.954 0 10.2778C0 4.60152 4.60152 0 10.2778 0ZM17.5556 10.2778C17.5556 6.25837 14.2972 3 10.2778 3C6.25837 3 3 6.25837 3 10.2778C3 14.2972 6.25837 17.5556 10.2778 17.5556C14.2972 17.5556 17.5556 14.2972 17.5556 10.2778Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="col-lg-auto order-4 order-lg-0">
        <button :class="$style['button']" class="mb-3" @click="getuserLocation">
          <span>{{ $t('find_store_geolocation') }}</span>
          <div :class="$style['button-icon']">
            <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 11C15 13.2091 13.2091 15 11 15C8.79086 15 7 13.2091 7 11C7 8.79086 8.79086 7 11 7C13.2091 7 15 8.79086 15 11Z" fill="currentColor"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9066 22.6662C17.6174 19.0929 20 14.799 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 12.5758 2.55248 14.4515 3.52302 16.4808C4.48224 18.4865 5.78119 20.5014 7.11281 22.3173C8.44013 24.1273 9.77202 25.7018 10.7738 26.825C10.8714 26.9344 10.9657 27.0394 11.0565 27.1398C11.1268 27.0672 11.1992 26.9921 11.2735 26.9144C12.2673 25.8755 13.5892 24.4028 14.9066 22.6662ZM11 30C11 30 22 20 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 19 11 30 11 30Z" fill="currentColor"/>
            </svg>
          </div>
        </button>
      </div>
      <div class="col-12">
        <div :class="$style['label']">{{ $t('find_store_category') }}</div>
      </div>
      <div class="col-lg-auto mb-3">
        <Checkbox value="devices" v-model="category" :label="$t('find_store_devices')" />
      </div>
      <!-- <div class="col-lg-auto mb-3">
        <Checkbox value="sticks" v-model="category" :label="$t('find_store_sticky')" />
      </div> -->
    </div>
    <div id="map" :class="$style['map']"></div>
  </div>
</template>

<script>

  export default {
    props: {
      locations: {
        type: Array,
        default: () => ([])
      }
    },
    data() {
      return {
        category: ['devices'],
        search: '',
      }
    },
    watch: {
      locations(value) {
        if (Object.keys(value).length > 0) {
          this.initMap()
        }
      },
      category(value) {
        this.$emit('changeCategody', value)
      }
    },
    methods: {
      getuserLocation() {
        this.$emit('location')
      },
      initMap() {
        const locale = this.$i18n.locale
        const init = (() => {
          const map = new ymaps.Map('map', {
            center: [41.270831, 69.264124],
            controls: [],
            zoom: 12,
          })

          const objectManager = new ymaps.ObjectManager({
            // clusterize: true,
          })

          const location = ymaps.geolocation.get()
          const newFeature = {
            type: 'FeatureCollection',
            features: []
          }

          const searchArray = []
          const searchControl = new ymaps.control.SearchControl({
            options: {
              provider: 'yandex#map',
              noPlacemark: true,
              noSelect: true,
              zoomMargin: 200,
              position: {
                left: -800
              }
            }
          });

          map.controls.add('zoomControl')
          map.controls.add(searchControl)
          map.behaviors.disable('scrollZoom')

          this.locations.forEach(point => {
            const obj = {
              type: 'Feature',
              id: point.id,
              geometry: {
                type: 'Point',
                coordinates: [point.lat, point.long]
              },
              properties: {
                balloonContent: `<strong>${point.name}</strong><br>${point[`adress_${locale}`]}<br>${point[`guide_${locale}`]}`,
                data: {
                  sticks: point.sticks,
                  devices: point.devices,
                }
              },
              options: {
                iconLayout: 'default#image',
                iconImageHref: require('~/assets/images/pin.png'),
                iconImageSize: [27, 36],
                iconImageOffset: [-27 / 2, -36],
              }
            }

            searchArray.push(point[`adress_${locale}`])
            newFeature.features.push(obj)
          })

          const findAdress = (arr, find) => {
            return arr.filter(function (value) {
              return (value + '').toLowerCase().indexOf(find.toLowerCase()) != -1;
            });
          }

          const searchProvider = {
            suggest: (request, options) => {
              const res = findAdress(searchArray, request),
                  arrayResult = [],
                  results = Math.min(options.results, res.length);
              for (var i = 0; i < results; i++) {
                  arrayResult.push({ displayName: res[i], value: res[i] })
              }
              return ymaps.vow.resolve(arrayResult);
            }
          }

          const suggestView = new ymaps.SuggestView('suggest', {
              provider: searchProvider,
              results: 6
            }
          )
          suggestView.events.add('select', e => {
            const { value } = e.originalEvent.item
            searchControl.search(value).then(res => {
              searchControl.showResult(0)
            })
          })

          objectManager.clusters.options.set({
            preset: 'islands#orangeClusterIcons',
            hintContentLayout: ymaps.templateLayoutFactory.createClass('Group objects')
          });
          objectManager.objects.options.set('preset', 'islands#orangeIcon');
          objectManager.add(newFeature)
          map.geoObjects.add(objectManager)

          this.$on('location', () => {
            location.then(
              (res) => {
                const { position } = res.geoObjects
                map.geoObjects.add(res.geoObjects)

                map.panTo(
                  position, {
                    flying: true
                  }
                )
              },
              (err) => {
                console.log(`Error: ${err}`)
              }
            )
          })

          this.$on('changeCategody', (value) => {
            const res = []
            value.forEach(key => {
              res.push(`properties.data.${key} === 'true'`)
            })

            if(res.length > 0) {
              objectManager.setFilter(res.join(' || '))
            } else {
              objectManager.setFilter('id < 0')
            }
          })

        })

        ymaps.ready(init)
      },
    },
    mounted() {
      if(Object.keys(this.locations).length > 0) {
        this.initMap()
      }
    }
  }
</script>

<style lang="scss" module>
  .map {
    width: 100%;
    height: 710px;
  }

  .label {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 16px;
  }

  .button {
    background-color: $color-accent;
    font-size: 24px;
    color: $color-white;
    white-space: nowrap;
    padding: 10px 30px;
    min-height: 58px;
    border: none;
    display: inline-flex;
    align-items: center;
    text-align: center;
    width: 100%;

    @media (max-width: $bp-sm) {
      font-size: 20px;
      white-space: pre-wrap;
    }

    span {
      width: 100%;
      margin-right: 20px;
    }

    &:hover {
      background-color: lighten($color-accent, 10%);
    }
  }

  .button-icon {
    margin-left: auto;
  }

  .search {
    position: relative;
    display: flex;
    width: 100%;
  }

  .search-input {
    min-height: 58px;
    padding: 10px 30px;
    font-size: 24px;
    outline: none;
    border: 1px solid transparent;
    background-color: $color-light;
    width: 100%;
    padding-right: 50px;

    @media (max-width: $bp-sm) {
      font-size: 20px;
    }

    &:focus {
      border: 1px solid $color-accent;
    }
  }

  .search-icon {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    color: $color-secondary;
    width: 58px;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
