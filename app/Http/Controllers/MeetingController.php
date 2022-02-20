<?php

namespace App\Http\Controllers;

use App\Events\MeetingListUpdate;
use App\Models\Agenda;
use App\Models\Meeting;
use App\Models\MeetingType;
use App\Models\MeetingWorker;
use App\Rules\MultipleDateTimeFormat;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MeetingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index(Request $request)
    {
         $title = 'All meetings';

        if($request->has('length'))
        {
            $page_length = $request->length;
        }
        else
        {
            $page_length = 10;
        }

        $meetings = Meeting::query()
            ->when($request->has('search'), function($query) use ($request) {
                $query
                    ->where('name', 'like', '%'.$request->search.'%')
                    ->orWhere('summary', 'like', '%'.$request->search.'%')
                    ->orwhereRelation('meetingType', 'name', 'like', '%'.$request->search.'%');
            })
            ->select('id', 'name', 'summary', 'purpose', 'start_time', 'end_time', 'venue', 'meeting_type_id')
            ->with('meetingType:id,name','attendees:forenames,surname')
            ->orderBy('start_time')
            ->paginate($page_length)
            ->withQueryString();

        return Inertia::render('Meetings/Index',
            [
                'title' => $title,
                'filters' => $request->only(['search','length']),
                'meetings' => $meetings
                    ->through(fn($meeting) => [
                        'id' => $meeting->id,
                        'name' => $meeting->name,
                        'summary' => $meeting->summary,
                        'purpose' => $meeting->purpose,
                        'date' => $meeting->start_time ? $meeting->start_time->format('l\\, jS \\of F Y') : "",
                        'start_time' => $meeting->start_time ? $meeting->start_time->format('H:i:s') : "",
                        'end_time' =>  $meeting->end_time ? $meeting->end_time->format('H:i:s') : "",
                        'venue' => $meeting->venue,
                        'meeting_type' => $meeting->meetingType ? $meeting->meetingType->name : "",
                        'attendees' => $meeting->attendees
                    ]),
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        //
        $meeting_types = MeetingType::all();

        return Inertia::render('Meetings/Create', [
            'meeting_types' => $meeting_types
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function store(Request $request)
    {
        //
        $error_messages = [
            'meeting_type_id.required' => 'You must select a meeting type',
            'meeting_type_id.integer' => 'You must select a meeting type',
        ];

        $validated_data = $request->validate(
            [
                'name' => ['required','string','max:255'],
                'start_time' => ['nullable','date'],
                'end_time' => ['nullable','date'],
                'venue' => ['nullable','string'],
                'meeting_type_id' => ['nullable','integer'],
                'summary' => ['nullable','string'],
                'purpose' => ['nullable','string'],
                'meeting_notes' => ['nullable','string'],
                'notes' => ['nullable','string'],
            ],
            $error_messages
        );

        $meeting = Meeting::create($validated_data);

        return redirect()->route('meeting.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Meeting  $meeting
     * @return \Inertia\Response
     */
    public function show(Request $request, Meeting $meeting)
    {
        $can_view_notes = true;

        $title = "Meeting Details";

        $meeting->load('meetingType','agendas','agendas.allChildren','minutes','minutes.allChildren');

        $attendees = MeetingWorker::where('attended',true)
            ->whereHas('meeting', function (Builder $query) use ($meeting) {
                $query->where('id', '=', $meeting->id);
            })
            ->with('worker')
            ->get()
            ->sortBy([
                ['worker.surname', 'asc'],
                ['worker.forenames', 'asc'],
            ]);
        $apologies = MeetingWorker::where('apologies',true)
            ->whereHas('meeting', function (Builder $query) use ($meeting) {
                $query->where('id', '=', $meeting->id);
            })
            ->with('worker')
            ->get()
            ->sortBy([
                ['worker.surname', 'asc'],
                ['worker.forenames', 'asc'],
            ]);

        $no_shows = MeetingWorker::where('invited',true)
            ->where('attended',false)
            ->where('apologies',false)
            ->whereHas('meeting', function (Builder $query) use ($meeting) {
                $query->where('id', '=', $meeting->id);
            })
            ->with('worker')
            ->get()
            ->sortBy([
                ['worker.surname', 'asc'],
                ['worker.forenames', 'asc'],
            ]);

        $agendas = $meeting->agendas->whereNull('parent_id')->sortBy('order');
        $minutes = $meeting->minutes->whereNull('parent_id')->sortBy('order');

        $documents = $meeting->documents;

        $vue_props = [
            'title' => $title,
            'meeting.id' => $meeting->id,
            'meeting.name' => $meeting->name,
            'meeting.meeting_type' => $meeting->meetingType ? $meeting->meetingType->name : "",
            'meeting.summary' => $meeting->summary,
            'meeting.purpose' => $meeting->purpose,
            'meeting.meeting_notes' => $meeting->meeting_notes,
            'meeting.start_time' => $meeting->start_time ? $meeting->start_time->format('l\\, jS \\of F Y H:i:s') : "",
            'meeting.end_time' =>  $meeting->end_time ? $meeting->end_time->format('H:i:s') : "",
            'meeting.venue' => $meeting->venue,
            'attendees' => $attendees->map(fn($attendee) => [
                'meeting_worker_id' => $attendee->id,
                'worker_id' => $attendee->worker_id,
                'apologies' => $attendee->apologies,
                'attended' => $attendee->attended,
                'forenames' => $attendee->worker->forenames,
                'surname' => $attendee->worker->surname,
            ]),
            'apologies' => $apologies->map(fn($apology) => [
                'forenames' => $apology->worker->forenames,
                'surname' => $apology->worker->surname,
            ]),
            'no_shows' => $no_shows->map(fn($no_show) => [
                'forenames' => $no_show->worker->forenames,
                'surname' => $no_show->worker->surname,
            ]),
            'agendas' => $agendas->map(fn($agenda) => [
                'id' => $agenda->id,
                'content' => $agenda->content,
                'order' => $agenda->order,
                'parent_id' => $agenda->parent_id,
                'all_children' => $agenda->allChildren,
            ])->values(),
            'minutes' => $minutes->map(fn($minute) => [
                'id' => $minute->id,
                'content' => $minute->content,
                'order' => $minute->order,
                'parent_id' => $minute->parent_id,
                'all_children' => $minute->allChildren,
            ])->values(),
            'documents' => $documents,
        ];

        if($can_view_notes)
        {
            $vue_props['meeting.notes'] = $meeting->notes;
        }

        return Inertia::render('Meetings/Show', $vue_props);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Meeting  $meeting
     * @return \Inertia\Response
     */
    public function edit(Meeting $meeting)
    {
        $can_view_notes = true;

        $title = "Edit Meeting Details";

        $meeting->load('meetingType','agendas','agendas.allChildren','minutes','minutes.allChildren');

        $attendees = MeetingWorker::where('attended',true)
            ->whereHas('meeting', function (Builder $query) use ($meeting) {
                $query->where('id', '=', $meeting->id);
            })
            ->with('worker')
            ->get()
            ->sortBy([
                ['worker.surname', 'asc'],
                ['worker.forenames', 'asc'],
            ]);

        $apologies = MeetingWorker::where('apologies',true)
            ->whereHas('meeting', function (Builder $query) use ($meeting) {
                $query->where('id', '=', $meeting->id);
            })
            ->with('worker')
            ->get()
            ->sortBy([
                ['worker.surname', 'asc'],
                ['worker.forenames', 'asc'],
            ]);

        $no_shows = MeetingWorker::where('invited',true)
            ->where('attended',false)
            ->where('apologies',false)
            ->whereHas('meeting', function (Builder $query) use ($meeting) {
                $query->where('id', '=', $meeting->id);
            })
            ->with('worker')
            ->get()
            ->sortBy([
                ['worker.surname', 'asc'],
                ['worker.forenames', 'asc'],
            ]);
        $agendas = $meeting->agendas->whereNull('parent_id')->sortBy('order');

        $minutes = $meeting->minutes->whereNull('parent_id')->sortBy('order');
        $documents = $meeting->documents->load('documentType');

        $breadcrumbs = collect([
            ['name' => 'Meetings',  'href' => '/meetings', 'current' => false],
            ['name' => $meeting->name,  'href' => '/meetings/'.$meeting->id, 'current' => true],
        ]);

        $meeting_types = MeetingType::all();

        $vue_props = [
            'title' => $title,
            'meeting.id' => $meeting->id,
            'meeting.name' => $meeting->name,
            'meeting.meeting_type_id' => $meeting->meeting_type_id,
            'meeting.meeting_type' => $meeting->meetingType ? $meeting->meetingType->name : "",
            'meeting.summary' => $meeting->summary,
            'meeting.purpose' => $meeting->purpose,
            'meeting.meeting_notes' => $meeting->meeting_notes,
            'meeting.start_time' => $meeting->start_time ? $meeting->start_time->toDateTimeLocalString() : "",
            'meeting.end_time' =>  $meeting->end_time ? $meeting->end_time->toDateTimeLocalString() : "",
            'meeting.venue' => $meeting->venue,
            'attendees' => $attendees->map(fn($attendee) => [
                'id' => $attendee->id,
                'forenames' => $attendee->worker->forenames,
                'surname' => $attendee->worker->surname,
            ]),
            'apologies' => $apologies->map(fn($apology) => [
                'id' => $apology->id,
                'forenames' => $apology->worker->forenames,
                'surname' => $apology->worker->surname,
            ]),
            'no_shows' => $no_shows->map(fn($no_show) => [
                'id' => $no_show->id,
                'forenames' => $no_show->worker->forenames,
                'surname' => $no_show->worker->surname,
            ]),
            'agendas' => $agendas->map(fn($agenda) => [
                'id' => $agenda->id,
                'content' => $agenda->content,
                'order' => $agenda->order ?? 9999999,
                'parent_id' => $agenda->parent_id,
                'all_children' => $agenda->allChildren,
            ])->values(),
            'minutes' => $minutes->map(fn($minute) => [
                'id' => $minute->id,
                'content' => $minute->content,
                'order' => $minute->order ?? 9999999, // Using a specific value so I can check for it when reordering in front end
                'parent_id' => $minute->parent_id,
                'all_children' => $minute->allChildren,
            ])->values(),
            'documents' => $documents,
            'meeting_types' => $meeting_types,
            'breadcrumbs' => $breadcrumbs
        ];

        if($can_view_notes)
        {
            $vue_props['meeting.notes'] = $meeting->notes;
        }
        else
        {
            $vue_props['meeting.notes'] = false;
        }

        return Inertia::render('Meetings/Edit', $vue_props);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Meeting  $meeting
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Meeting $meeting)
    {
        $can_view_notes = true;

        $validated_data = $request->validate(
            [
                'name' => ['required','string'],
                'meeting_type_id' => ['nullable','integer'],
                'summary' => ['nullable','string'],
                'start_time' => ['nullable', new MultipleDateTimeFormat()],
                'end_time' => ['nullable', new MultipleDateTimeFormat()],
                'venue' => ['nullable','string'],
                'purpose' => ['nullable','string'],
                'meeting_notes' => ['nullable','string'],
                'notes' => ['nullable','string'],
            ]
        );

        $meeting->name = $validated_data['name'];
        $meeting->meeting_type_id = $validated_data['meeting_type_id'] ?? null;
        $meeting->summary = $validated_data['summary'] ?? null;
        $meeting->start_time = $validated_data['start_time'] ?? null;
        $meeting->end_time = $validated_data['end_time'] ?? null;
        $meeting->venue = $validated_data['venue'] ?? null;
        $meeting->purpose = $validated_data['purpose'] ?? null;
        $meeting->meeting_notes = $validated_data['meeting_notes'] ?? null;
        $meeting->notes = $validated_data['notes'] ?? null;

        $meeting->save();

        $vue_props = [
            'id' => $meeting->id,
            'name' => $meeting->name,
            'meeting_type_id' => $meeting->meeting_type_id,
            'meeting_type' => $meeting->meetingType ? $meeting->meetingType->name : "",
            'summary' => $meeting->summary,
            'purpose' => $meeting->purpose,
            'meeting_notes' => $meeting->meeting_notes,
            'start_time' => $meeting->start_time ? $meeting->start_time->toDateTimeLocalString() : "",
            'end_time' =>  $meeting->end_time ? $meeting->end_time->toDateTimeLocalString() : "",
            'venue' => $meeting->venue,
        ];


        if($can_view_notes)
        {
            $vue_props['meeting.notes'] = $meeting->notes;
        }
        else
        {
            $vue_props['meeting.notes'] = false;
        }

        return response()->json(
            $vue_props,
            200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Meeting  $meeting
     * @return \Illuminate\Http\Response
     */
    public function destroy(Meeting $meeting)
    {
        //
    }
}
