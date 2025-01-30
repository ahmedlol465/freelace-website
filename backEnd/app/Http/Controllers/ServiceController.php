<?php

namespace App\Http\Controllers;

use App\Models\service;
use App\Http\Requests\StoreserviceRequest;
use App\Http\Requests\UpdateserviceRequest;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreserviceRequest $request)
    {

        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'section' => 'required|string|max:255',
            'subsection' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'thumbnail_photo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'main_photo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'required_skills' => 'nullable|string',
            'price' => 'required|numeric',
            'delivery_duration' => 'required|string|max:255',
            'from_date' => 'nullable|date',
            'to_date' => 'nullable|date',
            'link' => 'nullable|string|max:255',
            'user_id' => 'required|exists:users,id',
        ]);

        // Handle file uploads
        if ($request->hasFile('thumbnail_photo')) {
            $validatedData['thumbnail_photo'] = $request->file('thumbnail_photo')->store('services');
        }
        if ($request->hasFile('main_photo')) {
            $validatedData['main_photo'] = $request->file('main_photo')->store('services');
        }

        // Create the service
        $service = Service::create($validatedData);

        return response()->json(['message' => 'Service created successfully', 'service' => $service], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateserviceRequest $request, service $service)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(service $service)
    {
        //
    }
}
