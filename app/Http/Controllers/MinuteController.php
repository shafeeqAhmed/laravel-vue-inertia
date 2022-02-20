<?php

namespace App\Http\Controllers;

use App\Events\MeetingMinutesUpdated;
use App\Events\MinuteCreated;
use App\Models\Minute;
use Illuminate\Http\Request;

class MinuteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {

        $validated_data = $request->validate(
            [
                'meeting_id' => ['required','integer'],
                'content' => ['required','string'],
                'order' => ['nullable','integer'],
                'parent_id' => ['nullable','integer'],
            ]
        );

        $current_minutes_maximum_order = Minute::where('meeting_id', $validated_data['meeting_id'])->max('order');

//        $minute = Minute::create($validated_data);

        $minute = Minute::create(
            [
                'meeting_id' => $validated_data['meeting_id'],
                'content' => $validated_data['content'],
                'order' => $validated_data['order'] ?? $current_minutes_maximum_order + 1,
                'parent_id' => $validated_data['parent_id'] ?? null,
            ]
        );

        event(new MinuteCreated($minute));

        return response()->json([
            'id' => $minute->id,
            'content' => $minute->content,
            'order' => $minute->order ?? 9999999,
            'parent_id' => $minute->parent_id,
            'all_children' => $minute->allChildren
        ],
            201);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Minute  $minute
     * @return \Illuminate\Http\Response
     */
    public function show(Minute $minute)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Minute  $minute
     * @return \Illuminate\Http\Response
     */
    public function edit(Minute $minute)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Minute  $minute
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Minute $minute)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Minute  $minute
     * @return \Illuminate\Http\Response
     */
    public function destroy(Minute $minute)
    {

        $minute->delete();

        $meeting = $minute->meeting;
        $meeting->load('minutes','minutes.allChildren');
        $minutes = $meeting->minutes->whereNull('parent_id')->sortBy('order');

        event(new MeetingMinutesUpdated($minutes));

        return response(null, 204);

    }
}
