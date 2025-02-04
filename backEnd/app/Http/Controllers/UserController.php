<?php

// namespace App\Http\Controllers;

// use Illuminate\Http\Request;

// class UserController extends Controller
// {
//     //
// }


namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\userData;
use App\Models\UserWork;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
// use App\Services\MailService;
use Illuminate\Support\Facades\Mail;
use App\Mail\EmailSerieceProvider;
use App\Models\password_reset;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use Illuminate\Support\Facades\DB;





class UserController extends Controller
{

    public function GetAllFreelancers(Request $request)
    {
        $freelancers = User::where('accountType', 'freelancer')->with('userData', 'UserWorks')->get();

        if ($freelancers->isEmpty()) {
            return response()->json(['message' => 'No freelancers found'], 404);
        }

        return response()->json(['freelancers' => $freelancers], 200);
    }

    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'password' => 'required',
            "userName" => "required|string|max:255|unique:users,userName",
        ]);


        // Check if the validation fails
        if ($validator->fails()) {
            return response()->json(['errors validation inputs' => $validator->errors()], 422);
        }

        $isUserExist = User::where('email', $request->email)->first();


        if (
            $isUserExist
            // || $isUserExist->isEmailVerified == true
            ) {
                return response()->json([
                    'message' => 'User already exists!',
                ], 409);
            }



        if(!$isUserExist){


            $user = User::create([
                'firstName' => $request->firstName,
                'lastName' => $request->lastName,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                "userName" => $request->userName,
                "accountType" => $request->accountType,
            ]);

            $token = JWTAuth::fromUser($user);




                    if(!$user) {
                        return response()->json([
                            'message' => 'User registration failed!',
                        ], 500);
                    }



                    $email = $request->input('email');
                    $code = strval(random_int(100000, 999999));  // Generate random code as string
                    $message = "Welcome to our platform!";
                    $subject = "Welcome to Our Service";

                    Mail::to($email)->send(new EmailSerieceProvider($message, $subject, $code));


                    $isCodeExist = password_reset::where('email', $email)->first();


                    if(!$isCodeExist) {
                        password_reset::create([
                            'email' => $email,
                            'code' => $code,
                        ]);
                    }else {

                        $isCodeExist->update([
                            'code' => $code,  // Set the new code value
                        ]);
                    }



                    return response()->json([
                        'message' => 'please verify your email',
                        // 'user' => $user,
                        'token' => $token
                    ], 201);
                }
    }



    public function verifyEmail(Request $request)
{
    // Validate the input
    $validator = Validator::make($request->all(), [
        'code' => 'required|string',
    ]);

    // Check if the validation fails
    if ($validator->fails()) {
        return response()->json(['errors validation inputs' => $validator->errors()], 422);
    }

    // Get the authenticated user using JWTAuth
    $user = JWTAuth::user();

    // If the user is not found, return an error
    if (!$user) {
        return response()->json([
            'message' => 'User not found!',
        ], 404);
    }

    // Check if the reset code is valid
    $isTokenExist = password_reset::where('code', $request->code)->first();

    if (!$isTokenExist) {
        return response()->json([
            'message' => 'Code not valid!',
        ], 404);
    }

    // Verify the email for the authenticated user
    $user->isEmailVerified = true;
    $user->save();

    return response()->json([
        'message' => 'Email verified successfully!',
        'user' => $user,
    ], 200);
}





    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required|string',
        ]);

        // Check if the validation fails
        if ($validator->fails()) {
            return response()->json(['errors validation inputs' => $validator->errors()], 422);
        }


            $user = User::where('email', $request->email)->first();



        if (!$user) {
            return response()->json([
                'message' => 'User not found!',
            ], 404);
        }

        if (!Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Wrong password!',
            ], 401);
        }

        if (!$user->isEmailVerified) {
            return response()->json([
                'message' => 'Email not verified!',
            ], 401);
        }

            $token = JWTAuth::fromUser($user);

        return response()->json([
            'message' => 'User logged in successfully!',
            'user' => [
            'id' => $user->id,
            'email' => $user->email,
            'name' => $user->name, // include only necessary fields
        ],
            'token' => $token,
        ], 200);
    }


    public function GetUserData(){
        $userData = User::with(['userWork', 'userData'])->get();
        return response()->json([
            'success' => true,
            'data' => $userData
        ]);    }



        public function UserData(Request $request)
    {
        // Validate input
        $validator = Validator::make($request->all(), [
            'userId' => 'required|exists:users,id',
            'specialist' => 'required|string|max:255',
            'jobTitle' => 'required|string|max:255',
            'description' => 'required|string',
            'skillsOfWork' => 'required',
        ]);

        // Return validation errors if any
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }



        // Create new user data record
        $userData = UserData::create([
            'userId' => $request->userId,
            'specialist' => $request->specialist,
            'jobTitle' => $request->jobTitle,
            'description' => $request->description,
            'skillsOfWork' => json_encode($request->skillsOfWork),
        ]);

        return response()->json(['message' => 'User data created successfully!', 'userData' => $userData], 201);
    }



    public function UserWork(Request $request)
    {
        // Validate input
        $validator = Validator::make($request->all(), [
            'userId' => 'required|exists:users,id',
            'workTitle' => 'required|string|max:255',
            'workDescription' => 'required|string',
            'thumbnail' => 'required|file|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'workPhoto' => 'required|file|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'completeDate' => 'required|string',
            'workLink' => 'required|url',
            'skillsOfWork' => 'required',
        ]);



        // Return validation errors if any
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $imageNameWork = Str::random(32) . '.' . $request->workPhoto->getClientOriginalExtension();
        Storage::disk('public')->put($imageNameWork, file_get_contents($request->workPhoto));

        $imageNameThumb = Str::random(32) . '.' . $request->workPhoto->getClientOriginalExtension();
        Storage::disk('public')->put($imageNameThumb, file_get_contents($request->workPhoto));


        // Create new user work record
        $userWork = UserWork::create([
            'userId' => $request->userId,
            'workTitle' => $request->workTitle,
            'workDescription' => $request->workDescription,
            'thumbnail' => $imageNameThumb,
            'workPhoto' => $imageNameWork,
            'completeDate' => $request->completeDate,
            'workLink' => $request->workLink,
            'skillsOfWork' => json_encode($request->skillsOfWork),
        ]);

        return response()->json(['message' => 'User work created successfully!', 'userWork' => $userWork], 201);
    }



    public function updateProfile(Request $request)
        {
            $user = auth()->user(); // Get the authenticated user

            // Validate request data - Define rules for all tables (all fields are now 'sometimes')
            $validator = Validator::make($request->all(), [
                'firstName' => 'sometimes|string|max:255',
                'lastName' => 'sometimes|string|max:255',
                'userName' => 'sometimes|string|max:255|unique:users,userName,' . $user->id, // Ignore current user
                'accountType' => 'sometimes|string|in:freelacer,projectOwner',
                "profilePhoto" => 'sometimes',
                "Gender" => 'sometimes|nullable|string',
                'Phone_number' => 'sometimes|nullable|string',
                'Region' => 'sometimes|nullable|string',
                // userData fields - all 'sometimes'
                'specialist' => 'sometimes|nullable|string|max:255',
                'jobTitle' => 'sometimes|nullable|string|max:255',
                'description' => 'sometimes|nullable|string',
                'skillsOfWork' => 'sometimes|nullable|array',
                'skillsOfWork.*' => 'nullable|string',
                // userWork fields - all 'sometimes'
                'workTitle' => 'sometimes|nullable|string|max:255',
                'workDescription' => 'sometimes|nullable|string',
                'thumbnail' => 'sometimes|nullable|string|max:255',
                'workPhoto' => 'sometimes|nullable|string|max:255',
                'completeDate' => 'sometimes|nullable|date',
                'workLink' => 'sometimes|nullable|url|max:255',
                'workSkillsOfWork' => 'sometimes|nullable|array',
                'workSkillsOfWork.*' => 'nullable|string',
            ]);

            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422); // Return validation errors
            }

            $imageName = null; // Initialize imageName outside the if block
            if ($request->hasFile('profilePhoto')) {
                // Handle file upload if the validation passes
                $imageName = Str::random(32) . '.' . $request->profilePhoto->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('', $request->profilePhoto, $imageName);

            }

            $validatedData = $validator->validated();

            DB::transaction(function () use ($user, $validatedData, $imageName) {
                // Update User table - only fill with provided data
                $user->fill($validatedData);

                // Update profilePhoto only if a new image was uploaded
                if ($imageName) {
                    $user->profilePhoto = $imageName;
                }

                $user->save();

                // Update UserData table (using relationship) - only fill with provided data
                if ($user->userData) {
                    $user->userData->fill(collect($validatedData)->only(['specialist', 'jobTitle', 'description', 'skillsOfWork'])->toArray());
                    $user->userData->save();
                } else {
                    // Create UserData only if relevant data is provided (e.g., specialist, jobTitle, etc.)
                    $userDataData = collect($validatedData)->only(['specialist', 'jobTitle', 'description', 'skillsOfWork'])->toArray();
                    if (!empty(array_filter($userDataData))) { // Check if userDataData has any non-null values
                        $user->userData()->create($userDataData);
                    }
                }

                // Update UserWork table (example - updating the first userWork entry) - only fill with provided data
                if ($user->userWorks->exists()) {
                    $firstWork = $user->userWorks->first();
                    $userWorkData = collect($validatedData)->only(['workTitle', 'workDescription', 'thumbnail', 'workPhoto', 'completeDate', 'workLink', 'workSkillsOfWork'])->toArray();
                    $firstWork->fill($userWorkData);
                    $firstWork->save();
                }
                // No 'else if' block for creation anymore - updates only existing UserWork
            });

            // Eager load relationships for response (optional, but good practice)
            $user->load(['userData', 'userWorks']);

            return response()->json([
                'message' => 'Profile updated successfully',
                'user' => $user, // Or use a Resource to format the response nicely
            ], 200);
        }



        public function GetUser(){
        $user = auth()->user();
        $user->load(['userData', 'userWorks', 'userServices', 'userProjects']);
        return response()->json([
            'message' => 'Profile updated successfully',
            'user' => $user, // Or use a Resource to format the response nicely
        ], 200);
    }



    public function ResetPassword(Request $request)
        {
            $user = auth()->user()->id;
            $validator = Validator::make($request->all(), [
                'oldPassword' => 'required|string',
                'newPassword' => 'required|string|min:6',
            ]);

            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }
            $user = User::where('id', $user)->first();
            if (!$user) {
                return response()->json(['message' => 'User not found'], 404);
            }

            if (!Hash::check($request->oldPassword, $user->password)) {
                return response()->json(['message' => 'Old password is incorrect'], 401);
            }
            $user->password = Hash::make($request->newPassword);
            $user->save();

            return response()->json(['message' => 'Password reset successfully'], 200);
        }









}
