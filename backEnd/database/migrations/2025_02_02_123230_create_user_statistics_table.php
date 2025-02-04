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
        Schema::create('user_statistics', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->unique()->constrained('users')->cascadeOnDelete();
            $table->decimal('ratings', 3, 2);
            $table->decimal('project_completion_rate', 5, 2);
            $table->decimal('reemployment_rate', 5, 2);
            $table->decimal('on_time_delivery_rate', 5, 2);
            $table->string('average_response_time');
            $table->date('registration_date');
            $table->timestamp('last_seen_at');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_statistics');
    }
};
