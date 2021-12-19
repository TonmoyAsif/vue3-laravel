import ProductApi from "@scripts/api/ProductApi";

export default {
    async getProducts() {
        return await ProductApi.getProducts();
    },

    async getProductById(productId) {
        return await ProductApi.getProductById(productId);
    },

    async addProduct(product) {
        return await ProductApi.addProduct(product);
    },

    async editProduct(productId, product) {
        return await ProductApi.editProduct(productId, product);
    },

    async deleteProduct(productId) {
        return await ProductApi.deleteProduct(productId);
    }
}
