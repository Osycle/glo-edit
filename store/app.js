export const state = () => ({
  user: null,
  contacts: {
    instagram: {
      icon: 'instagram.svg',
      name: 'glo.uzb',
      path: 'https://instagram.com/glo.uzb',
    },
    phone: {
      icon: 'phone.svg',
      name: '1252',
      path: 'tel:1252',
    },
    bot: {
      icon: 'telegram.svg',
      name: 'glo_uz_bot',
      path: 'https://t.me/glo_uz_bot',
    },
  },
  privacy: {
    agreement: {
      ru: {
        url: 'https://telegra.ph/SOGLASHENIE-O-SBORE-I-OBRABOTKE-PERSONALNYH-DANNYH-09-08',
      },
      uz: {
        url: 'https://telegra.ph/Shahsiy-malumotni-yigish-va-ishlash-haqidagi-kelishuv-06-14?_sm_nck=1',
      },
    },
  },
})

export const mutations = {}

export const actions = {
  async setAgeGate({ }, payload) {

    const result = await this.$axios.$get('https://icanhazip.com').then(async ip => {
      return await this.$axios.$post('/age', {
        age: payload,
        ip: ip.trim()
      }).then(user => {
        return {
          status: 'success',
          data: user
        }
      }).catch(e => {
        return {
          status: 'success',
          data: e
        }
      })
    })

    return result
  },
  async setFormPresentation({ }, payload) {
    const result = await this.$axios.$post('/presentation', payload)

    return result
  },
  async fetchProducts(context, params){
    try {
      console.log(this, context);
      const data =  this.$axios.$get("http://localhost:8899/json/products.json", {ssd:2}, {
        headers: {
          'content-type': 'text/json'
        }
      });
      //console.log("localcl", process.env)
      return data;
    } catch (e) {
      throw e;
    }
  }
}

export const getters = {}

import Vue from 'vue';

Vue.filter('spaceBetweenNum', (price)=>{ 
	price += "";
	var pattern = /(-?\d+)(\d{3})/;
	while (pattern.test(price))
		price = price.replace(pattern, "$1 $2");
	return price; 
})