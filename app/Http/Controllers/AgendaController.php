<?php

namespace App\Http\Controllers;

use App\Events\AgendaCreated;
use App\Events\MeetingAgendasUpdated;
use App\Models\Agenda;
use Illuminate\Http\Request;

class AgendaController extends Controller
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


        $current_agendas_maximum_order = Agenda::where('meeting_id', $validated_data['meeting_id'])->max('order');

        $agenda = Agenda::create(
            [
                'meeting_id' => $validated_data['meeting_id'],
                'content' => $validated_data['content'],
                'order' => $validated_data['order'] ?? $current_agendas_maximum_order + 1,
                'parent_id' => $validated_data['parent_id'] ?? null,
            ]
        );

        event(new AgendaCreated($agenda));

        return response()->json([
            'id' => $agenda->id,
            'content' => $agenda->content,
            'order' => $agenda->order ?? 9999999,
            'parent_id' => $agenda->parent_id,
            'all_children' => $agenda->allChildren
        ],
            201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Agenda  $agenda
     * @return \Illuminate\Http\Response
     */
    public function show(Agenda $agenda)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Agenda  $agenda
     * @return \Illuminate\Http\Response
     */
    public function edit(Agenda $agenda)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Agenda  $agenda
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Agenda $agenda)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Agenda  $agenda
     * @return \Illuminate\Http\Response
     */
    public function destroy(Agenda $agenda)
    {
        $agenda->delete();

        $meeting = $agenda->meeting;
        $meeting->load('agendas','agendas.allChildren');
        $agendas = $meeting->agendas->whereNull('parent_id')->sortBy('order');

        event(new MeetingAgendasUpdated($agendas));

        return response(null, 204);
    }
}
