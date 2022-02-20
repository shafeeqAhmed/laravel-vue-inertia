<?php

namespace App\Events;

use App\Models\Meeting;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class IssueUpdated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $issue;
    public $meeting;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($issue, Meeting $meeting)
    {
        //
        $this->issue = $issue;
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
            'id' => $this->issue->id,
            'name' => $this->issue->name,
            'end_state' => $this->issue->issueStatus->end_state ?? false,
        ];
    }
}
