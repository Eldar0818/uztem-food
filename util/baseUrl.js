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

export const createOrder = async(data) => {
    return await apiUrl.post('/orders', data)
}

export const getOneOrder = async(id) => {
    return await apiUrl.get(`/orders/${id}`)
}