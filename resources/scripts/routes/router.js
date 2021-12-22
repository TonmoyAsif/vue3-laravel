import Layout from "@scripts/layouts/App.vue";
import ProductList from "@scripts/pages/List.vue";
import ProductCreate from "@scripts/pages/Add.vue";
import ProductEdit from "@scripts/pages/Edit.vue";

export const routes = [
    {
        path: "/",
        component: Layout,
        children: [
            {
                path: "/",
                name: "productList",
                component: ProductList,
            },
            {
                path: "/product/:productId/edit",
                name: "productEdit",
                props: true,
                component: ProductEdit,
            },
            {
                path: "/product/add",
                name: "productAdd",
                component: ProductCreate,
            },
        ],
    },
];
