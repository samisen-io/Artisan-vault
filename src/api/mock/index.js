import crafts from './data/crafts.json'
import digitals from './data/digital.json'

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

export default {
  fetchCrafts () {
    return fetch(crafts, 1000) // wait 1s before returning crafts
  },
  fetchDigitals(){
      return fetch(digitals, 1000) // wait 1s before returning digital
  }
}