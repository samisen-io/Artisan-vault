import crafts from './data/crafts.json'
import digitals from './data/digital.json'
import drawings from './data/drawing.json'
import photographys from './data/photography.json'
import sculptures from './data/sculpture.json'
import highestPaids from './data/highestpaid.json'
import featureds from './data/featured.json'
import topArtists from './data/topartist.json'
import highlightedCards from './data/highlightedCards.json'
import relatedArtwork from './data/RelatedArtwork.json'
import example from './data/example.json'
const fetch = (mockData, time = 0) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData)
        }, time)
    })
}

export default {
    fetchexample() {
        return fetch(example, 100)
    },

    fetchhighlightedCards() {
        return fetch(highlightedCards, 100)
    },

    fetchrelatedArtwork() {
        return fetch(relatedArtwork, 1000)
    },
    fetchCrafts() {
        return fetch(crafts, 1000) // wait 1s before returning crafts
    },
    fetchDigitals() {
        return fetch(digitals, 1000) // wait 1s before returning digital
    },
    fetchDrawings() {
        return fetch(drawings, 1000) // wait 1s before returning drawings
    },
    fetchPhotographys() {
        return fetch(photographys, 100)
    },
    fetchSculptures() {
        return fetch(sculptures, 1000)
    },
    fetchFeatureds() {
        return fetch(featureds, 0)
    },
    fetchhighestPaids() {
        return fetch(highestPaids, 1000)
    },
    fetchtopArtists() {
        return fetch(topArtists, 1000)
    }
}