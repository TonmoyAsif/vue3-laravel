import ProductApi from "@scripts/api/ProductApi";

export default {
    getProductList: () => ProductApi.getProductList(),
    getProductById: (productId) => ProductApi.getProductById(productId),
    addProduct: (product) => ProductApi.addProduct(product),
    editProduct: (productId, product) => ProductApi.editProduct(productId, product),
    deleteProduct: (productId) => ProductApi.deleteProduct(productId),
};
