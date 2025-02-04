<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::with('user')->latest()->paginate(10); // Eager load user, paginate for better performance
        return response()->json([
            'message' => 'Projects retrieved successfully.',
            'data' => $projects,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        $validated = $request->validated();

        // Handle image upload
        if ($request->hasFile('project_image')) {
            $imagePath = $this->uploadImage($request->file('project_image'));
            $validated['project_image'] = $imagePath; // Store the path in the database
        } else {
            return response()->json(['message' => 'Project image is required.'], 400); // Or handle default image logic
        }

        $project = Project::create($validated);

        return response()->json([
            'message' => 'Project created successfully.',
            'data' => $project,
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        $project->load('user'); // Eager load user for detailed view
        return response()->json([
            'message' => 'Project retrieved successfully.',
            'data' => $project,
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $validated = $request->validated();

        // Handle image upload if a new image is provided
        if ($request->hasFile('project_image')) {
            // Delete the old image if it exists (optional, depending on your needs)
            if ($project->project_image) {
                Storage::disk('public')->delete($project->project_image);
            }
            $imagePath = $this->uploadImage($request->file('project_image'));
            $validated['project_image'] = $imagePath;
        }

        $project->update($validated);

        return response()->json([
            'message' => 'Project updated successfully.',
            'data' => $project,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        // Delete the project image from storage if it exists
        if ($project->project_image) {
            Storage::disk('public')->delete($project->project_image);
        }

        $project->delete();

        return response()->json([
            'message' => 'Project deleted successfully.',
        ], 200);
    }

    /**
     * Get project status counts for the authenticated user.
     */
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

    /**
     * Helper function to upload image and return path.
     *
     * @param  \Illuminate\Http\UploadedFile  $image
     * @return string
     */
    private function uploadImage($image)
    {
        $imageName = Str::random(32) . '.' . $image->getClientOriginalExtension();
        return $image->storeAs('projects', $imageName, 'public'); // Store in 'projects' folder in public disk
    }
}
