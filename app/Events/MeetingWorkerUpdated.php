<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class MeetingWorkerUpdated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $meetingWorker;
    public $old_meeting_worker;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($meetingWorker)
    {
        //
        $this->meetingWorker = $meetingWorker;
        $this->old_meeting_worker = $meetingWorker->getOriginal();

        $this->dontBroadcastToCurrentUser();
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PresenceChannel('meetings.' . $this->meetingWorker->meeting_id);
    }

    /**
     * Get the data to broadcast.
     *
     * @return array
     */
    public function broadcastWith()
    {
        return [
            'id' => $this->meetingWorker->id,
            'forenames' => $this->meetingWorker->worker->forenames,
            'surname' => $this->meetingWorker->worker->surname,
            'old_apologies' => $this->old_meeting_worker['apologies'],
            'old_attended' => $this->old_meeting_worker['attended'],
            'apologies' => $this->meetingWorker->apologies,
            'attended' => $this->meetingWorker->attended,
        ];
    }

}
