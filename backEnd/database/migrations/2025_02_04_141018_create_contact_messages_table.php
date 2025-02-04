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
        Schema::create('contact_messages', function (Blueprint $table) {
            $table->id();
            $table->string('freelancer_id');
            $table->string('client_id');

            $table->string('client_name');
            $table->string('client_email');
            
            $table->string('freelancer_name'); // Or freelancer_id as foreign key if you have user relationships
            $table->text('private_message');
            $table->string('project_title');
            $table->text('description');
            $table->json('photo_paths')->nullable(); // Store photo paths as JSON array
            $table->string('required_skills')->nullable();
            $table->string('section')->nullable();
            $table->string('subsection')->nullable();
            $table->string('expected_budget')->nullable();
            $table->string('expected_duration')->nullable();
            $table->timestamps();

            $table->foreign('freelancer_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('client_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contact_messages');
    }
};
