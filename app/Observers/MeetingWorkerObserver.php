<?php

namespace App\Observers;

use App\Events\MeetingWorkerDeleted;
use App\Events\MeetingWorkerUpdated;
use App\Models\MeetingWorker;

class MeetingWorkerObserver
{
    /**
     * Handle the MeetingWorker "created" event.
     *
     * @param  \App\Models\MeetingWorker  $meetingWorker
     * @return void
     */
    public function created(MeetingWorker $meetingWorker)
    {
        //
    }

    /**
     * Handle the MeetingWorker "updated" event.
     *
     * @param  \App\Models\MeetingWorker  $meetingWorker
     * @return void
     */
    public function updated(MeetingWorker $meetingWorker)
    {
        //
        MeetingWorkerUpdated::dispatch($meetingWorker);
    }

    /**
     * Handle the MeetingWorker "deleted" event.
     *
     * @param  \App\Models\MeetingWorker  $meetingWorker
     * @return void
     */
    public function deleted(MeetingWorker $meetingWorker)
    {
        //
        MeetingWorkerDeleted::dispatch($meetingWorker);
    }

    /**
     * Handle the MeetingWorker "restored" event.
     *
     * @param  \App\Models\MeetingWorker  $meetingWorker
     * @return void
     */
    public function restored(MeetingWorker $meetingWorker)
    {
        //
    }

    /**
     * Handle the MeetingWorker "force deleted" event.
     *
     * @param  \App\Models\MeetingWorker  $meetingWorker
     * @return void
     */
    public function forceDeleted(MeetingWorker $meetingWorker)
    {
        //
    }
}
