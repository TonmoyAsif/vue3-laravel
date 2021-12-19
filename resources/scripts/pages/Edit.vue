<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Update Product</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="update">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Title</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="product.title"
                                    >
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Price</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="product.price"
                                    >
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Description</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="product.description"
                                    >
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">
                                    Update
                                </button>
                            </div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductService from "../services/ProductService";

export default {
    name: "update-product",
    props: ["productId"],
    data(){
        return {
            product:{
                title:"",
                price: '',
                description:""
            }
        }
    },
    mounted(){
        if(this.productId){
            this.getProductDetails(this.productId)
        }
    },
    methods:{
        async getProductDetails(productId){
            await ProductService.getProductById(productId)
            .then( response => {
                const { title, price, description } = response
                this.product.title = title
                this.product.price = price
                this.product.description = description
            }).catch( error => {
                console.log(error)
            })
        },
        async update(){
            await ProductService.editProduct(this.productId, this.product)
            .then( response => {
                this.$router.push({ name:"productList" })
            }).catch( error => {
                console.log(error)
            })
        }
    }
}
</script>