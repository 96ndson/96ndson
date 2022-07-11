<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ValidationRegister extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'string|required',
            'email' => 'email|required',
            'password' => 'string|min:6'
        ];
    }
    public function messages(){
        return[
            'name.required' => __('validation.name'),
            'password.required' => __('validation.password'),
            'email.required' => __('validation.email')
        ];
    }
}

