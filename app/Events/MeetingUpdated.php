<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class MeetingUpdated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $meeting;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($meeting)
    {
        //
        $this->meeting = $meeting;
        $this->dontBroadcastToCurrentUser();

    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PresenceChannel('meetings.' . $this->meeting->id);
    }

    /**
     * Get the data to broadcast.
     *
     * @return array
     */
    public function broadcastWith()
    {
        return [
            'id' => $this->meeting->id,
            'name' => $this->meeting->name,
            'meeting_type_id' => $this->meeting->meeting_type_id,
            'meeting_type' => $this->meeting->meetingType ? $this->meeting->meetingType->name : "",
            'summary' => $this->meeting->summary,
            'purpose' => $this->meeting->purpose,
            'meeting_notes' => $this->meeting->meeting_notes,
            'start_time' => $this->meeting->start_time ? $this->meeting->start_time->toDateTimeLocalString() : "",
            'end_time' =>  $this->meeting->end_time ? $this->meeting->end_time->toDateTimeLocalString() : "",
            'venue' => $this->meeting->venue,
        ];
    }
}
