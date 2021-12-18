import Layout from "../layouts/App.vue";
import ProductList from "../pages/List.vue";
import ProductCreate from "../pages/Add.vue";
import ProductEdit from "../pages/Edit.vue";

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