import axios from "axios";
import ProductMapper from "@scripts/api/mappers/ProductMapper";

export default {
    getProductList: async () => {
        try {
            const data = await axios.get(`/api/product`);
            return ProductMapper.mapProductList(data.data);
        } catch (error) {
            console.log("error", error);
            return error.data;
        }
    },

    getProductById: async (productId) => {
        try {
            const data = await axios.get(`/api/product/${productId}`);
            return ProductMapper.mapProduct(data.data);
        } catch (error) {
            console.log("error", error);
            return error.data;
        }
    },

    addProduct: async (product) => {
        try {
            product = ProductMapper.mapProductToServer(product);
            const data = await axios.post(`/api/product`, { ...product });
            return ProductMapper.mapProduct(data.data.product);
        } catch (error) {
            console.log("error", error);
            return error.data;
        }
    },

    editProduct: async (productId, product) => {
        try {
            product = ProductMapper.mapProductToServer(product);
            const data = await axios.put(`/api/product/${productId}`, {
                ...product,
            });
            return ProductMapper.mapProduct(data.data.product);
        } catch (error) {
            console.log("error", error);
            return error.data;
        }
    },

    deleteProduct: async (productId) => {
        try {
            return axios.delete(`/api/product/${productId}`);
        } catch (error) {
            console.log("error", error);
            return error.data;
        }
    },
};
