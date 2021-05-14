import Vue from 'vue'
import Vuex from 'vuex'
import client from 'api-client'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        crafts: [],
        digitals: []
    },
    
    mutations: {
        setCrafts (state, crafts){
            state.crafts = crafts;
        },
        setDigitals (state, digitals){
            state.digitals = digitals;
        }
    },

    actions: {
        fetchCrafts({commit}){
            return client.fetchCrafts().then(crafts => commit('setCrafts', crafts))
        },
        fetchDigitals({commit}){
            return client.fetchDigitals().then(digitals => commit('setDigitals', digitals))
        }
    }
})