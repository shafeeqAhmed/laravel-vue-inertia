<?php

namespace App\Events;

use Illuminate\Auth\Events\Failed;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;
use Illuminate\Queue\SerializesModels;

class LogFailedLogin
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('login-failed');
    }

    /**
     * Handle the event.
     *
     * @param  Failed  $event
     * @return void
     */
    public function handle(Failed $event)
    {
        activity('login')
            ->withProperties([
                'event' => $event,
                'request' => $this->request,
                'url' => $this->request->fullUrl(),
                'ip' => $this->request->ips(),
                'user-agent' => $this->request->header('user-agent'),
            ])
            ->event('failed')
            ->log('Failed login');
    }
}
