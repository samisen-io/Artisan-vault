import axios from 'axios'
export default {
    fetchCrafts() {
        return axios
            .get('https://jsonplaceholder.typicode.com/crafts')
            .then(response => response.data)
    }
}