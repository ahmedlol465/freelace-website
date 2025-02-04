<?php

namespace App\Http\Controllers;

use App\Models\contact_message;
use App\Http\Requests\Storecontact_messageRequest;
use App\Http\Requests\Updatecontact_messageRequest;

class ContactMessageController extends Controller
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
    public function store(Storecontact_messageRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(contact_message $contact_message)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Updatecontact_messageRequest $request, contact_message $contact_message)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(contact_message $contact_message)
    {
        //
    }
}
