import axios from "axios";
import ProductMapper from "@scripts/api/mappers/ProductMapper";

export default {
    getProductList: async () => {
        try {
            const data = await axios.get(`/api/products`);
            return ProductMapper.mapProductList(data.data.data);
        } catch (error) {
            console.log("error", error);
            return error.data;
        }
    },

    getProductById: async (productId) => {
        try {
            const data = await axios.get(`/api/products/${productId}`);
            return ProductMapper.mapProduct(data.data.data);
        } catch (error) {
            console.log("error", error);
            return error.data;
        }
    },

    addProduct: async (product) => {
        try {
            product = ProductMapper.mapProductToServer(product);
            const data = await axios.post(`/api/products`, { ...product });
            return ProductMapper.mapProduct(data.data.data);
        } catch (error) {
            console.log("error", error);
            return error.data;
        }
    },

    editProduct: async (productId, product) => {
        try {
            product = ProductMapper.mapProductToServer(product);
            const data = await axios.put(`/api/products/${productId}`, {
                ...product,
            });
            return ProductMapper.mapProduct(data.data.data);
        } catch (error) {
            console.log("error", error);
            return error.data;
        }
    },

    deleteProduct: async (productId) => {
        try {
            const data = await axios.delete(`/api/products/${productId}`);
            return ProductMapper.mapProduct(data.data.data);
        } catch (error) {
            console.log("error", error);
            return error.data;
        }
    },
};
