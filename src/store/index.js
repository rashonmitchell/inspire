import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './authentication'
import app from './app'
import product from './product'

Vue.use(Vuex);

/* read about Vuex and refer it here  https://vuex.vuejs.org/ */

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        authentication,
        app,
        product
    }
});