<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class MeetingAgendasUpdated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $agendas;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($agendas)
    {
        //
        $this->agendas = $agendas;
        $this->dontBroadcastToCurrentUser();
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PresenceChannel('meetings.' . $this->agendas->first()->meeting_id);
    }

    /**
     * Get the data to broadcast.
     *
     * @return array
     */
    public function broadcastWith()
    {
        return [
            'agendas' => $this->agendas->map(fn($agenda) => [
                'id' => $agenda->id,
                'content' => $agenda->content,
                'order' => $agenda->order ?? 9999999,
                'parent_id' => $agenda->parent_id,
                'all_children' => $agenda->allChildren,
            ])->values(),
        ];
    }
}
