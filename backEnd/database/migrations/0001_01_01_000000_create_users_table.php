<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('firstName');
            $table->string('lastName');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('userName')->unique();
            $table->enum('role', ['user', 'admin'])->default('user');
            $table->string('accountType');
            $table->boolean('isEmailVerified')->default(false);
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->id();
            $table->string('email');
            $table->string('code');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('userData', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('userId');
            $table->foreign('userId')->references('id')->on('users')->onDelete('cascade');
            $table->string('specialist');
            $table->string('jobTitle');
            $table->text('description');
            $table->json('skillsOfWork');
            $table->timestamps();
        });

        Schema::create('userWork', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('userId');
            $table->foreign('userId')->references('id')->on('users')->onDelete('cascade');
            $table->string('workTitle');
            $table->text('workDescription');
            $table->string('thumbnail');
            $table->string('workPhoto');
            $table->string('completeDate');
            $table->string('workLink');
            $table->json('skillsOfWork');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('userWork');
        Schema::dropIfExists('userData');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('users');
    }
};
