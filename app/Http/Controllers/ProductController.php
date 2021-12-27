<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateProductRequest;
use App\Http\Requests\UpdateProductRequest;
use Illuminate\Http\JsonResponse;
use App\Http\Resources\ProductResource;
use App\Services\ProductService;
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
            $service = new ProductService();
            return ProductResource::collection($service->getProducts());
        } catch ( \Exception $exception) {
            return $this->sendErrorResponse($exception);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $productId
     * @return ProductResource|JsonResponse
     */
    public function show(int $productId): ProductResource | JsonResponse
    {
        try {
            $service = new ProductService();
            return ProductResource::make($service->getSingleProduct($productId));
        } catch ( \Exception $exception) {
            return $this->sendErrorResponse($exception);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CreateProductRequest $request
     * @return ProductResource|JsonResponse
     */
    public function store(CreateProductRequest $request): ProductResource | JsonResponse
    {
        try {
            $service = new ProductService();
            return ProductResource::make($service->createProduct($request->toArray()));
        } catch ( \Exception $exception) {
            return $this->sendErrorResponse($exception);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateProductRequest $request
     * @param int $productId
     * @return ProductResource|JsonResponse
     */
    public function update(UpdateProductRequest $request, int $productId): ProductResource | JsonResponse
    {
        try {
            $service = new ProductService();
            return ProductResource::make($service->editProduct($request->toArray(), $productId));
        } catch ( \Exception $exception) {
            return $this->sendErrorResponse($exception);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $productId
     * @return ProductResource|JsonResponse
     */
    public function destroy(int $productId): ProductResource | JsonResponse
    {
        try {
            $service = new ProductService();
            return ProductResource::make($service->deleteProduct($productId));
        } catch ( \Exception $exception) {
            return $this->sendErrorResponse($exception);
        }
    }
}
