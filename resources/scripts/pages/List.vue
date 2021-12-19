<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to='{name:"productAdd"}' class="btn btn-primary">
                Create
            </router-link>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Product</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody v-if="products.length > 0">
                                <tr v-for="(product,key) in products" :key="key">
                                    <td>{{ product.id }}</td>
                                    <td>{{ product.title }}</td>
                                    <td>{{ product.price }}</td>
                                    <td>{{ product.description }}</td>
                                    <td>
                                        <button
                                            type="button" class="btn btn-success"
                                            @click="editProduct(product.id)"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button" class="btn btn-danger"
                                            @click="deleteProduct(product.id)"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">No Product Found</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductService from "@scripts/services/ProductService";

export default {
    name: "products",
    data(){
        return {
            products:[]
        }
    },
    mounted(){
        this.getProducts()
    },
    methods:{
        async getProducts(){
            await ProductService.getProducts().then( response => {
                this.products = response
            }).catch( error => {
                console.log(error)
            })
        },
        editProduct(productId) {
            this.$router.push({ name: 'productEdit', params: { productId: productId } })
        },
        async  deleteProduct(productId){
            if(confirm("Are you sure to delete this product ?")){
                await ProductService.deleteProduct(productId).then( response => {
                    this.getProducts()
                }).catch( error => {
                    console.log(error)
                })
            }
        }
    }
}
</script>