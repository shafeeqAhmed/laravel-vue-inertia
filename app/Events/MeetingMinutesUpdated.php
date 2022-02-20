<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class MeetingMinutesUpdated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $minutes;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($minutes)
    {
        //
        $this->minutes = $minutes;
        $this->dontBroadcastToCurrentUser();
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PresenceChannel('meetings.' . $this->minutes->first()->meeting_id);
    }

    /**
     * Get the data to broadcast.
     *
     * @return array
     */
    public function broadcastWith()
    {
        return [
            'minutes' => $this->minutes->map(fn($minute) => [
                'id' => $minute->id,
                'content' => $minute->content,
                'order' => $minute->order ?? 9999999, // Using a specific value so I can check for it when reordering in front end
                'parent_id' => $minute->parent_id,
                'all_children' => $minute->allChildren,
            ])->values(),
        ];
    }
}
