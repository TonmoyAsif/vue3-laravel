import Product from "@scripts/models/Product";

function mapProduct(data) {
    // return new Product({...data});
    return new Product({
        id: data.id,
        title: data.title,
        price: data.price,
        description: data.description,
    });
}

export default {
    mapProduct(data) {
        return mapProduct(data);
    },

    mapProductList(data) {
        const products = data.map((product) => {
            return mapProduct(product);
        });
        return products;
    },

    mapProductToServer(data) {
        const product = {
            title: data.title,
            price: data.price,
            description: data.description,
        };
        return product;
    },
};
