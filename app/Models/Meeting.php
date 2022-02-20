<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Meeting extends Model
{
    # The meetings that are recorded in the system
    use HasFactory;
    use SoftDeletes;

    protected $dates = [
        'deleted_at',
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'start_time' => 'datetime',
        'end_time' => 'datetime',
    ];

    protected $fillable = [
        'name', 'summary', 'purpose', 'meeting_notes', 'start_time', 'end_time', 'venue', 'meeting_type_id', 'notes'
    ];

    // All people related to a meeting
    public function workers()
    {
        return $this->belongsToMany(Worker::class)->withPivot('invited', 'apologies', 'attended')->withTimestamps();
    }

    // Just attendeees
    public function attendees()
    {
        return $this->belongsToMany(Worker::class)->wherePivot('attended', 1)->withTimestamps();
    }

    public function meetingType()
    {
        return $this->belongsTo(MeetingType::class);
    }

    public function agendas()
    {
        return $this->hasMany(Agenda::class);
    }

    public function minutes()
    {
        return $this->hasMany(Minute::class);
    }

    // Get all of the morphs attached
    public function documents() { return $this->morphToMany(Document::class, 'documentable')->withTimestamps(); }
}
