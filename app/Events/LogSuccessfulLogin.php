<?php

namespace App\Events;

use Illuminate\Auth\Events\Login;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Auth;

class LogSuccessfulLogin
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
        return new PrivateChannel('login-success');
    }

    /**
     * Handle the event.
     *
     * @param  Login  $event
     * @return void
     */
    public function handle(Login $event)
    {
        activity('login')
            ->performedOn($event->user)
            ->causedBy($event->user)
            ->withProperties([
                'event' => $event,
                'url' => $this->request->fullUrl(),
                'ip' => $this->request->ips(),
                'user-agent' => $this->request->header('user-agent'),
            ])
            ->event('success')
            ->log('Successful login');
    }
}
