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
        Schema::create('purchases', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('buyer_user_id'); // User who made the purchase (Client)
            $table->unsignedBigInteger('seller_user_id'); // User who is selling the service (Freelancer)
            $table->unsignedBigInteger('service_id');    // The service that was purchased
            $table->timestamp('purchase_date')->useCurrent(); // Date of purchase
            $table->string('status')->default('awaiting_seller_approval'); // Status of the purchase
            $table->decimal('purchase_price', 10, 2); // Price at the time of purchase (to handle price changes)

            $table->foreign('buyer_user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('seller_user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('service_id')->references('id')->on('services')->onDelete('cascade');

            // Indexes for better query performance (optional but recommended)
            $table->index('buyer_user_id');
            $table->index('seller_user_id');
            $table->index('service_id');
            $table->index('status');
            $table->index('purchase_date');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('purchases');
    }
};
