<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'title'=>'required|string',
            'price'=>'required|integer',
            'description'=>'required',
        ];
    }

    public function messages(): array
    {
        return [
            'title.required' => 'Product name is required!',
            'title.string' => 'Product name should only contain string!',
            'price.required' => 'Product price is required!',
            'price.integer' => 'Product price should only contain numaric value!',
            'description.required' => 'Product details is required!',
        ];
    }
}
