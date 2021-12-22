import Product from "@scripts/models/Product";

// const mapProduct = (product) => new Product({ ...product });

const mapProduct = (product) =>
    new Product({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
    });

const mapProductList = (data) => {
    const products = data.map((product) => {
        return mapProduct(product);
    });
    return products;
};

const mapProductToServer = (data) => {
    let product = {
        title: data.title,
        price: data.price,
        description: data.description,
    };
    return product;
};

export default {
    mapProduct,
    mapProductList,
    mapProductToServer,
};
