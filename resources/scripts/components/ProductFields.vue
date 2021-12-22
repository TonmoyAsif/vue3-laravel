<template>
    <div class="row">
        <div class="col-12 mb-2">
            <div class="form-group">
                <label>Title</label>
                <input
                    type="text"
                    class="form-control"
                    v-model="product.title"
                />
            </div>
        </div>
        <div class="col-12 mb-2">
            <div class="form-group">
                <label>Price</label>
                <input
                    type="text"
                    class="form-control"
                    v-model="product.price"
                />
            </div>
        </div>
        <div class="col-12 mb-2">
            <div class="form-group">
                <label>Description</label>
                <input
                    type="text"
                    class="form-control"
                    v-model="product.description"
                />
            </div>
        </div>
        <div class="col-12">
            <button
                v-if="type === 'save'"
                @click="onSaveClicked"
                class="btn btn-primary"
            >
                Save
            </button>
            <button v-else @click="onUpdateClicked" class="btn btn-primary">
                Update
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductFields",
    props: {
        type: {
            type: String,
            required: true,
        },
        product: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {};
    },
    methods: {
        onSaveClicked() {
            this.$emit("onSave", this.product);
        },
        onUpdateClicked() {
            this.$emit("onUpdate", this.product);
        },
    },
};
</script>
