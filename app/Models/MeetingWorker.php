<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;
use Illuminate\Database\Eloquent\SoftDeletes;

class MeetingWorker extends Model
{
    // Using model instead of pivot because of SoftDeletes
    # The link model between workers and meetings including some additional columns
    use HasFactory;
    use SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'meeting_worker';

    protected $dates = [
        'deleted_at',
        'created_at',
        'updated_at',
    ];


    protected $casts = [
        'invited' => 'boolean',
        'apologies' => 'boolean',
        'attended' => 'boolean',
    ];

    protected $fillable = [
        'worker_id', 'meeting_id', 'invited', 'apologies', 'attended', 'notes'
    ];

    # Returns all in relations and the related models can include the valid from and valid to queries
    public function meeting()
    {
        return $this->belongsTo(Meeting::class);
    }

    public function worker()
    {
        return $this->belongsTo(Worker::class);
    }
}
