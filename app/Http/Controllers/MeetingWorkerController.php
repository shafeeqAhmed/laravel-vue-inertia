<?php

namespace App\Http\Controllers;

use App\Models\Meeting;
use App\Models\MeetingWorker;
use App\Models\Worker;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MeetingWorkerController extends Controller
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

        $workers = Worker::all();

        $attendee_types = collect([
            ['id' => 1,  'name' => 'Invited',  'description' => 'A person who has been invited for a meeting that is yet to occur'],
            ['id' => 2,  'name' => 'Apologies',  'description' => 'A person who has sent apologies for a meeting that they can\'t attend'],
            ['id' => 3,  'name' => 'Attended',  'description' => 'A person who attended the meeting'],
            ['id' => 4,  'name' => 'No show',  'description' => 'A person who didn\'t turn up at the meeting'],
        ]);

        return Inertia::render('Meetings/Attendees/Create', [
            'meeting.id' => $meeting->id,
            'workers' => $workers,
            'attendee_types' => $attendee_types
        ]);
    }
    public function getMeetingWorkerData()
    {
        $workers = Worker::all();
        $attendee_types = collect([
            ['id' => 1,  'name' => 'Invited',  'description' => 'A person who has been invited for a meeting that is yet to occur'],
            ['id' => 2,  'name' => 'Apologies',  'description' => 'A person who has sent apologies for a meeting that they can\'t attend'],
            ['id' => 3,  'name' => 'Attended',  'description' => 'A person who attended the meeting'],
            ['id' => 4,  'name' => 'No show',  'description' => 'A person who didn\'t turn up at the meeting'],
        ]);
        $data  = [
            'workers' => $workers,
            'attendee_types' => $attendee_types
        ];
        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Meeting $meeting, Request $request)
    {
        //
        $error_messages = [
            'worker_id.required' => 'You must select a worker',
        ];

        $validated_data = $request->validate(
            [
                'worker_id' => ['required','integer'],
                'attendee_type_id.id' => ['required','integer'],
                'notes' => ['nullable','string'],
            ],
            $error_messages
        );

        $invited = false;
        $apologies = false;
        $attended = false;

        switch($validated_data['attendee_type_id']['id'])
        {
            case 1: // Invited
                $invited = true;
                break;
            case 2: // Apologies
                $invited = true;
                $apologies = true;
                break;
            case 3: // Attended
                $invited = true;
                $attended = true;
                break;
            case 4: // No show
                $invited = true;
                break;

        }

        $meeting->workers()->attach(Worker::findOrFail($validated_data['worker_id']), ['invited' => $invited, 'attended' => $attended, 'apologies' => $apologies, 'notes' => $validated_data['notes']]);

        return redirect()->route('meeting.show',['meeting' => $meeting->id]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MeetingWorker  $meetingWorker
     * @return \Illuminate\Http\Response
     */
    public function show(MeetingWorker $meetingWorker)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MeetingWorker  $meetingWorker
     * @return \Illuminate\Http\Response
     */
    public function edit(MeetingWorker $meetingWorker)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MeetingWorker  $meetingWorker
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, MeetingWorker $meetingWorker)
    {

        $validated_data = $request->validate(
            [
                'worker_id' => ['required','integer'],
                'apologies' => ['required','integer'],
                'attended' => ['required','integer'],
            ]
        );

        $meetingWorker->apologies = $validated_data['apologies'];
        $meetingWorker->attended = $validated_data['attended'];

        $vue_props = [
            'id' => $meetingWorker->id,
            'forenames' => $meetingWorker->worker->forenames,
            'surname' => $meetingWorker->worker->surname,
            'old_apologies' => $meetingWorker->getOriginal('apologies'),
            'old_attended' => $meetingWorker->getOriginal('attended'),
            'apologies' => $meetingWorker->apologies,
            'attended' => $meetingWorker->attended,
        ];

        $meetingWorker->save();

        return response()->json(
            $vue_props,
            200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MeetingWorker  $meetingWorker
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function destroy(MeetingWorker $meetingWorker)
    {

        $meetingWorker->delete();

        return response(null, 204);
    }
}
