<?php

namespace App\Observers;

use App\Events\MeetingListUpdate;
use App\Events\MeetingUpdated;
use App\Models\Meeting;

class MeetingObserver
{
    /**
     * Handle the Meeting "created" event.
     *
     * @param  \App\Models\Meeting  $meeting
     * @return void
     */
    public function created(Meeting $meeting)
    {
        // Update the meeting List
        MeetingListUpdate::dispatch($meeting);
    }

    /**
     * Handle the Meeting "updated" event.
     *
     * @param  \App\Models\Meeting  $meeting
     * @return void
     */
    public function updated(Meeting $meeting)
    {
        // Update the meeting List
        MeetingListUpdate::dispatch($meeting);

        // Update the meeting view if someone is working on it
        MeetingUpdated::dispatch($meeting);
    }

    /**
     * Handle the Meeting "deleted" event.
     *
     * @param  \App\Models\Meeting  $meeting
     * @return void
     */
    public function deleted(Meeting $meeting)
    {
        // Update the meeting List
        MeetingListUpdate::dispatch($meeting);
    }

    /**
     * Handle the Meeting "restored" event.
     *
     * @param  \App\Models\Meeting  $meeting
     * @return void
     */
    public function restored(Meeting $meeting)
    {
        //
    }

    /**
     * Handle the Meeting "force deleted" event.
     *
     * @param  \App\Models\Meeting  $meeting
     * @return void
     */
    public function forceDeleted(Meeting $meeting)
    {
        //
    }
}
