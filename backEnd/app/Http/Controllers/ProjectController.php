<?php

namespace App\Http\Controllers;

use App\Models\project;
use App\Http\Requests\StoreprojectRequest;
use App\Http\Requests\UpdateprojectRequest;

class ProjectController extends Controller
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
    public function store(StoreprojectRequest $request)
    {
        $validated = $request->validate([
            'project_name' => 'required|string|max:255',
            'project_description' => 'required|string',
            'project_image' => 'required',
            'required_skills' => 'required|string',
            'section' => 'required|string',
            'sub_section' => 'required|string',
            'project_link' => 'nullable|string',
            'project_question' => 'nullable|string',
            'user_id' => 'required|exists:users,id'
        ]);

        $project = Project::create($validated);

        return response()->json([
            'message' => 'Project created successfully.',
            'data' => $project,
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateprojectRequest $request, project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(project $project)
    {
        //
    }



    public function getStatusCounts()
    {
        $user = auth()->user();
        $projectCounts = Project::where('user_id', $user->id)
            ->select('status', \DB::raw('count(*) as count'))
            ->groupBy('status')
            ->get()
            ->keyBy('status'); // Key by status for easy access

        $totalProjects = Project::where('user_id', $user->id)->count();

        $statuses = [
            'under_review', 'draft', 'opened', 'in_progress', 'completed', 'closed', 'canceled', 'rejected' // Project statuses based on image order
        ];

        $statusData = [];
        foreach ($statuses as $status) {
            $count = $projectCounts->get($status)?->count ?? 0;
            $percentage = $totalProjects > 0 ? round(($count / $totalProjects) * 100) : 0;
            $statusData[$status] = [
                'count' => $count,
                'percentage' => $percentage,
            ];
        }

        return response()->json(['data' => $statusData]);
    }






}
