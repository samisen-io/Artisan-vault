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
        highestPaids: [],
        topArtists: [],
        relatedArtwork: [],
        highlightedCards: [],
        example: []
    },
    mutations: {
        setexample(state, example) {
            state.example = example;
        },
        sethighlightedCards(state, highlightedCards) {
            state.highlightedCards = highlightedCards;
        },

        setrelatedArtwork(state, relatedArtwork) {
            state.relatedArtwork = relatedArtwork;
        },

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
        sethighestPaids(state, highestPaids) {
            state.highestPaids = highestPaids;
        },
        settopArtists(state, topArtists) {
            state.topArtists = topArtists;
        },

    },

    actions: {
        fetchexample({ commit }) {
            return client.fetchexample().then(example => commit('setexample', example))
        },
        fetchhighlightedCards({ commit }) {
            return client.fetchhighlightedCards().then(highlightedCards => commit('sethighlightedCards', highlightedCards))
        },

        fetchrelatedArtwork({ commit }) {
            return client.fetchrelatedArtwork().then(relatedArtwork => commit('setrelatedArtwork', relatedArtwork))
        },

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
        fetchhighestPaids({ commit }) {
            return client.fetchhighestPaids().then(highestPaids => commit('sethighestPaids', highestPaids))
        },
        fetchtopArtists({ commit }) {
            return client.fetchtopArtists().then(topArtists => commit('settopArtists', topArtists))
        },
    }
})