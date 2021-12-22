<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Add Product</h4>
                </div>
                <div class="card-body">
                    <product-fields
                        type="save"
                        :product="product"
                        @onSave="onCreate"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductService from "@scripts/services/ProductService";
import Product from "@scripts/models/Product";
import ProductFields from "@scripts/components/ProductFields";

export default {
    name: "Add",
    components: {
        ProductFields,
    },
    data() {
        return {
            product: new Product(),
        };
    },
    methods: {
        async onCreate() {
            await ProductService.addProduct(this.product)
                .then((response) => {
                    this.$router.push({ name: "productList" });
                })
                .catch((error) => {
                    console.log("error", error);
                });
        },
    },
};
</script>
