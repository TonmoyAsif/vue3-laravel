export default class Product {
    constructor({ id, title, price, description } = {}) {
        this.id = id || null;
        this.title = title || null;
        this.price = price || null;
        this.description = description || null;
    }
}
