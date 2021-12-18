import axios from "axios";

export default {
    async getProducts() {
        return (await axios.get(`/api/product`)).data;
    },

    async getProductById(productId) {
        return (await axios.get(`/api/product/${productId}`)).data;
    },

    async addProduct(product){
        return await axios.post(`/api/product`, product)
    },

    async editProduct(productId, product) {
        return axios.put(`/api/product/${productId}`, product)
    },

    async deleteProduct(productId) {
        return axios.delete(`/api/product/${productId}`)
    }
}