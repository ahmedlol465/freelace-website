<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateprojectRequest extends FormRequest
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
            'project_name' => 'sometimes|string|max:255',
            'project_description' => 'sometimes|string',
            // 'project_image' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Image validation - sometimes
            'required_skills' => 'sometimes|string',
            'section' => 'sometimes|string',
            'sub_section' => 'sometimes|string',
            'project_link' => 'nullable|url|max:255',
            'project_question' => 'nullable|string',
            'user_id' => 'sometimes|exists:users,id', // Consider if user_id should be updatable
            'status' => 'sometimes|in:under_review,draft,opened,in_progress,completed,closed,canceled,rejected', // Optional status update
        ];
    }
}
