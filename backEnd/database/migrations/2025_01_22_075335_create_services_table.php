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
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('title');
            $table->string('section');
            $table->string('subsection');
            $table->text('description');
            $table->string('thumbnail_photo');
            $table->string('main_photo');
            $table->text('required_skills');
            $table->decimal('price', 10, 2);
            $table->string('delivery_duration');
            $table->date('from_date');
            $table->date('to_date');
            $table->string('link');
            $table->string('status');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
