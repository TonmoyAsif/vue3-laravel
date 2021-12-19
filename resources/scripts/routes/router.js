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
                name: 'productList',
                path: '/',
                component: ProductList
            },
            {
                name: 'productEdit',
                path: '/product/:productId/edit',
                props: true,
                component: ProductEdit
            },
            {
                name: 'productAdd',
                path: '/product/add',
                component: ProductCreate
            }
        ]
    }
]