import axios from 'axios'

const favoritiesAPI = axios.create({ baseURL: 'http://localhost:8000/favorities/' })

async function getFavorities() {
    const response = await favoritiesAPI.get('/')

    return response.data
}

async function postFavorities(id) {
    await favoritiesAPI.post(`/${id}`)
}

async function deleteFavorities(id) {
    await favoritiesAPI.delete(`/${id}`)
}

export { getFavorities, postFavorities, deleteFavorities }
