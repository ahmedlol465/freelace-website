<?php

namespace App\Http\Controllers;

use App\Models\user_statistic;
use App\Http\Requests\Storeuser_statisticRequest;
use App\Http\Requests\Updateuser_statisticRequest;
use Illuminate\Http\Request;

class UserStatisticController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        $statistic = user_statistic::where('user_id', $user->id)->first();

        if (!$statistic) {
            return response()->json(['message' => 'User statistics not found'], 404);
        }

        return response()->json([
            'data' => $statistic,
            'meta' => ['api_version' => '1.0']
        ]);
    }

    /**
     * Store or update user statistics.
     */
    public function store(Request $request)
    {
        $userId = auth()->user()->id; // Get user ID from authenticated user

        if (user_statistic::where('user_id', $userId)->exists()) {
            return response()->json(['error' => 'You already have a balance record.'], 422);
        }

        $validated = $request->validate([
            'ratings' => 'required|numeric|between:0,5',
            'project_completion_rate' => 'required|numeric|between:0,100',
            'reemployment_rate' => 'required|numeric|between:0,100',
            'on_time_delivery_rate' => 'required|numeric|between:0,100',
            'average_response_time' => 'required|string|max:255',
            'registration_date' => 'required|date',
            'last_seen_at' => 'required|date',
        ]);

        $validated['user_id'] = $userId; // Automatically assign authenticated user ID


        $statistic = user_statistic::create($validated);


        return response()->json([
            'message' => 'User statistics created/updated successfully',
            'data' => $statistic,
            'meta' => ['api_version' => '1.0']
        ], 201);
    }

    /**
     * Display the specified user statistics.
     */
    public function show(UserStatistic $userStatistic)
    {
        $this->authorize('view', $userStatistic); // Implement policies if needed
        return response()->json([
            'data' => $this->formatStatisticResponse($userStatistic),
            'meta' => ['api_version' => '1.0']
        ]);
    }

    /**
     * Update the specified user statistics in storage.
     */
    public function update(Request $request, UserStatistic $userStatistic)
    {
        $this->authorize('update', $userStatistic);

        $request->validate([
            'ratings' => 'sometimes|nullable|numeric|between:0,5',
            'project_completion_rate' => 'sometimes|nullable|numeric|between:0,100',
            'reemployment_rate' => 'sometimes|nullable|numeric|between:0,100',
            'on_time_delivery_rate' => 'sometimes|nullable|numeric|between:0,100',
            'average_response_time' => 'sometimes|nullable|string|max:255',
            'registration_date' => 'sometimes|nullable|date',
            'last_seen_at' => 'sometimes|nullable|date',
        ]);

        $userStatistic->update($request->validated());

        return response()->json([
            'message' => 'User statistics updated successfully',
            'data' => $this->formatStatisticResponse($userStatistic),
            'meta' => ['api_version' => '1.0']
        ]);
    }

    /**
     * Remove the specified user statistics from storage.
     */
    public function destroy(UserStatistic $userStatistic)
    {
        $this->authorize('delete', $userStatistic); // Implement policies if needed
        $userStatistic->delete();
        return response()->json(['message' => 'User statistics deleted successfully', 'meta' => ['api_version' => '1.0']]);
    }


    /**
     * Formats the UserStatistic model for API response.
     *
     * @param  UserStatistic  $userStatistic
     * @return array
     */
    protected function formatStatisticResponse(UserStatistic $userStatistic): array
    {
        return [
            'user_statistic_id' => $userStatistic->user_statistic_id,
            'user_id' => $userStatistic->user_id,
            'ratings' => number_format($userStatistic->ratings, 2), // Format to 2 decimal places
            'project_completion_rate' => number_format($userStatistic->project_completion_rate, 2),
            'reemployment_rate' => number_format($userStatistic->reemployment_rate, 2),
            'on_time_delivery_rate' => number_format($userStatistic->on_time_delivery_rate, 2),
            'average_response_time' => $userStatistic->average_response_time,
            'registration_date' => optional($userStatistic->registration_date)->format('Y-m-d'), // Format date
            'last_seen_at' => optional($userStatistic->last_seen_at)->format('Y-m-d H:i:s'), // Format timestamp
            'created_at' => $userStatistic->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $userStatistic->updated_at->format('Y-m-d H:i:s'),
        ];
    }
}
