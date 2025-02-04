<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreprojectRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'project_name' => 'required|string|max:255',
            'project_description' => 'required|string',
            // 'project_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Image validation
            'required_skills' => 'required|string',
            'section' => 'required|string',
            'sub_section' => 'required|string',
            'project_link' => 'nullable|url|max:255',
            'project_question' => 'nullable|string',
            'user_id' => 'required|exists:users,id',
            'status' => 'sometimes|in:under_review,draft,opened,in_progress,completed,closed,canceled,rejected', // Optional status update
        ];
    }
}
