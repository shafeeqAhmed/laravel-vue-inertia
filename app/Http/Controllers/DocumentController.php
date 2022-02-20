<?php

namespace App\Http\Controllers;

use App\Events\DocumentDetached;
use App\Models\Document;
use App\Models\Meeting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Exception\HttpException;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create(Meeting $meeting)
    {
        //

        return Inertia::render('Meetings/Documents/Create', [
            'meeting.id' => $meeting->id
        ]);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Meeting $meeting, Request $request)
    {

        $validated_data = $request->validate(
            [
                'document' => ['required','file'],
                'notes' => ['nullable','string'],
            ]
        );

        if($request->hasFile('document'))
        {
            $path = $request->file('document')->store('documents');
            $name = $request->file('document')->getClientOriginalName();
            $extension = $request->file('document')->extension();

             $document = Document::create(
                [
                    'name' => $name,
                    's3_file_id' => $path,
                    'document_type_id' => 1,
                    'notes' => $validated_data['notes']
                ]
            );

            $meeting->documents()->attach($document);

        }

        return redirect()->route('meeting.document.create',['meeting' => $meeting->id]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Document  $document
     * @return \Symfony\Component\HttpFoundation\StreamedResponse
     */
    public function show(Document $document)
    {

        if(Storage::disk('local')->exists($document->s3_file_id)) {
            return Storage::download($document->s3_file_id, $document->name);
        }
        else
        {
            throw new HttpException('404','This file does not exist');
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Document  $document
     * @return \Illuminate\Http\Response
     */
    public function edit(Document $document)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Document  $document
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Document $document)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Document  $document
     * @return \Illuminate\Http\Response
     */
    public function destroy(Meeting $meeting, Document $document)
    {

        $meeting->documents()->detach($document->id);

        event(new DocumentDetached($document, $meeting));

        return response(null, 204);
        //
    }
}
