import axios from 'axios'

const apiUrl = axios.create({
    baseURL: "https://uztem.netlify.app/api"
})

const cloudinaryApi = "https://api.cloudinary.com/v1_1/dewybyk8a/image/upload"

export const getAllProducts = async() => {
    return await apiUrl.get('/products')
}

export const getSingleProduct = async(id) => {
    return await apiUrl.get(`/products/${id}`)
}

export const createProduct = async(data) => {
    return await apiUrl.post('/products', data)
}

export const deleteProduct = async(id) => {
    return await apiUrl.delete(`/products/${id}`)
}

export const createOrder = async(data) => {
    return await apiUrl.post('/orders', data)
}

export const getOneOrder = async(id) => {
    return await apiUrl.get(`/orders/${id}`)
}

export const getAllOrders = async() => {
    return await apiUrl.get('/orders')
}

export const updateStatus = async(id, info) => {
    return await apiUrl.put(`/orders/${id}`, info)
}

export const deleteOneOrder = async(id) => {
    return await apiUrl.delete(`/orders/${id}`)
}

export const adminLogin = async(info) => {
    return await apiUrl.post('/login', info)
}

export const cloudinaryUpload = async(data) => {
    return await axios.post(cloudinaryApi, data)
}

export const makeBooking = async(data) => {
    return await apiUrl.post('/bookings', data)
}

export const getAllBookings = async() => {
    return await apiUrl.get('/bookings')
}