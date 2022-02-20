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

class DocumentDetached implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $document;
    public $meeting;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($document, Meeting $meeting)
    {
        //
        $this->document = $document;
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
            'id' => $this->document->id,
            'name' => $this->document->name,
            'document_type.name' => $this->document->documentType->name ?? false,
        ];
    }

}
