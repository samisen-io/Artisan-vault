import crafts from './data/crafts.json'
import digitals from './data/digital.json'
import drawings from './data/drawing.json'
import photographys from './data/photography.json'
import sculptures from './data/sculpture.json'
import highestpaids from './data/highestpaid.json'
import featureds from './data/featured.json'
import topartists from './data/topartist.json'

const fetch = (mockData, time = 0) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData)
        }, time)
    })
}

export default {
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
    fetchHighestPaids() {
        return fetch(highestpaids, 1000)
    },
    fetchTopArtists() {
        return fetch(topartists, 1000)
    }
}