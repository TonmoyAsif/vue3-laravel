import Layout from "@scripts/layouts/App.vue";
import ProductListPage from "@scripts/pages/ListPage.vue";
import ProductAddPage from "@scripts/pages/AddPage.vue";
import ProductEditPage from "@scripts/pages/EditPage.vue";

export const routes = [
    {
        path: "/",
        component: Layout,
        children: [
            {
                path: "/",
                name: "productList",
                component: ProductListPage,
            },
            {
                path: "/product/:productId/edit",
                name: "productEdit",
                props: true,
                component: ProductEditPage,
            },
            {
                path: "/product/add",
                name: "productAdd",
                component: ProductAddPage,
            },
        ],
    },
];
