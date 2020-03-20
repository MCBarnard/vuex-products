import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    products: [
      {name: 'Banana Skin', price: 20},
      {name: 'Corona', price: 5},
      {name: 'Castle Lager', price: 35},
      {name: 'Corona Cure', price: 90},
      {name: 'Chappies', price: 6},
      {name: 'Toothpaste', price: 6},
      {name: 'Fries', price: 10},
      {name: 'Junk Food', price: 30},
      {name: 'Healthy Food', price: 40}
    ],
  },
  getters: {
    saleProducts: state => {
      var saleProducts = state.products.map(product => {
        return {
          name: '** ' + product.name + ' **',
          price: product.price / 2
        }
      });
      return saleProducts;
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
        state.products.forEach( product => {
          product.price -= payload;
        })
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function() {
        context.commit('reducePrice',payload);
      }, 2000);
    }
  }
});
