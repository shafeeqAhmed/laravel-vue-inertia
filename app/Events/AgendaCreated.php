<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class AgendaCreated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $agenda;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($agenda)
    {
        //
        $this->agenda = $agenda;
        $this->dontBroadcastToCurrentUser();
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PresenceChannel('meetings.' . $this->agenda->meeting_id);
    }

    /**
     * Get the data to broadcast.
     *
     * @return array
     */
    public function broadcastWith()
    {
        return [
            'id' => $this->agenda->id,
            'content' => $this->agenda->content,
            'order' => $this->agenda->order ?? 9999999,
            'parent_id' => $this->agenda->parent_id,
            'all_children' => $this->agenda->allChildren,
        ];
    }
}
