<?php

namespace App\Services;

use App\Models\Product;
use Illuminate\Database\Eloquent\Collection;

class ProductService
{
    /**
     * @return Collection|array
     */
    public function getProducts(): Collection|array
    {
        return Product::all();
    }

    /**
     * @param int $productId
     * @return Product
     */
    public function getSingleProduct(int $productId): Product
    {
        return Product::findOrFail($productId);
    }

    /**
     * @param array $product
     * @return Product
     */
    public function createProduct(array $product): Product
    {
        return Product::create($product);
    }

    /**
     * @param array $updatedProduct
     * @param int $productId
     * @return Product
     */
    public function editProduct(array $updatedProduct , int $productId): Product
    {
        $product = Product::findOrFail($productId);
        $product->update($updatedProduct);
        return $product;
    }

    /**
     * @param int $productId
     * @return Product
     */
    public function deleteProduct(int $productId): Product
    {
        $product = Product::findOrFail($productId);
        $product->delete();
        return $product;
    }
}
