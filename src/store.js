import Vue from 'vue'
import Vuex from 'vuex'
import client from 'api-client'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        crafts: [],
        digitals: [],
        drawings: [],
        photographys: [],
        sculptures: [],
        featureds: [],
        highestpaids: [],
        topartists: []
    },

    mutations: {
        setCrafts(state, crafts) {
            state.crafts = crafts;
        },
        setDigitals(state, digitals) {
            state.digitals = digitals;
        },
        setDrawings(state, drawings) {
            state.drawings = drawings;
        },
        setPhotographys(state, photographys) {
            state.photographys = photographys;
        },
        setSculptures(state, sculptures) {
            state.sculptures = sculptures;
        },
        setFeatureds(state, featureds) {
            state.featureds = featureds;
        },
        setHighestpaids(state, highestpaids) {
            state.highestpaids = highestpaids;
        },
        setTopartists(state, topartists) {
            state.topartists = topartists;
        },
    },

    actions: {
        fetchCrafts({ commit }) {
            return client.fetchCrafts().then(crafts => commit('setCrafts', crafts))
        },
        fetchDigitals({ commit }) {
            return client.fetchDigitals().then(digitals => commit('setDigitals', digitals))
        },
        fetchDrawings({ commit }) {
            return client.fetchDrawings().then(drawings => commit('setDrawings', drawings))
        },
        fetchPhotographys({ commit }) {
            return client.fetchPhotographys().then(photographys => commit('setPhotographys', photographys))
        },
        fetchSculptures({ commit }) {
            return client.fetchSculptures().then(sculptures => commit('setSculptures', sculptures))
        },
        fetchFeatureds({ commit }) {
            return client.fetchFeatureds().then(featureds => commit('setFeatureds', featureds))
        },
        fetchHighestpaids({ commit }) {
            return client.fetchHighestpaids().then(highestpaids => commit('setHighestpaids', highestpaids))
        },
        fetchTopartists({ commit }) {
            return client.fetchTopartists().then(topartists => commit('setTopartists', topartists))
        },
    }
})