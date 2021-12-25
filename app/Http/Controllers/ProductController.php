<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection|JsonResponse
     */
    public function index(): AnonymousResourceCollection | JsonResponse
    {
        try {
            $products = Product::all();
            return response()->json($products);
        } catch ( \Exception $exception) {
            return $this->sendErrorResponse($exception);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return AnonymousResourceCollection|JsonResponse
     */
    public function store(Request $request): AnonymousResourceCollection | JsonResponse
    {
        try {
            $product = Product::create($request->post());
            return response()->json([
                'message'=>'Product Created Successfully!!',
                'product'=>$product
            ]);
        } catch ( \Exception $exception) {
            return $this->sendErrorResponse($exception);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Product $product
     * @return AnonymousResourceCollection|JsonResponse
     */
    public function show(Product $product): AnonymousResourceCollection | JsonResponse
    {
        try {
            return response()->json($product);
        } catch ( \Exception $exception) {
            return $this->sendErrorResponse($exception);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Product $product
     * @return AnonymousResourceCollection|JsonResponse
     */
    public function update(Request $request, Product $product): AnonymousResourceCollection | JsonResponse
    {
        try {
            $product->fill($request->post())->save();
            return response()->json([
                'message'=>'Product Updated Successfully!!',
                'product'=>$product
            ]);
        } catch ( \Exception $exception) {
            return $this->sendErrorResponse($exception);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Product $product
     * @return AnonymousResourceCollection|JsonResponse
     */
    public function destroy(Product $product): AnonymousResourceCollection | JsonResponse
    {
        try {
            $product->delete();
            return response()->json([
                'message'=>'Product Deleted Successfully!!'
            ]);
        } catch ( \Exception $exception) {
            return $this->sendErrorResponse($exception);
        }
    }
}
