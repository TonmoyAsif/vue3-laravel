<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Update Product</h4>
                </div>
                <div class="card-body">
                    <product-fields
                        type="update"
                        :product="product"
                        @onUpdate="onUpdate"
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
    name: "update-product",
    props: ["productId"],
    components: {
        ProductFields,
    },
    data() {
        return {
            product: new Product({}),
        };
    },
    mounted() {
        if (this.productId) {
            this.getProductDetails(this.productId);
        }
    },
    methods: {
        async getProductDetails(productId) {
            await ProductService.getProductById(productId)
                .then((response) => {
                    this.product = response;
                })
                .catch((error) => {
                    console.log("error", error);
                });
        },
        async onUpdate() {
            await ProductService.editProduct(this.productId, this.product)
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
