import axios from 'axios'

const apiUrl = axios.create({
    baseURL: 'http://localhost:3000/api'
})

export const getAllProducts = async() => {
    return await apiUrl.get('/products')
}

export const getSingleProduct = async(id) => {
    return await apiUrl.get(`/products/${id}`)
}