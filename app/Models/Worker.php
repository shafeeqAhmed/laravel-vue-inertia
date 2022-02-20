<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Worker extends Model
{
    # Workers are people, both users and non-users who are involved in a project. They can be used through the rest of the system. They are also notifiable.
    use HasFactory;
    use SoftDeletes;
    use Notifiable;

    protected $dates = [
        'deleted_at',
        'created_at',
        'updated_at',
        'valid_from',
        'valid_to',
    ];

    protected $fillable = [
        'forenames', 'surname', 'description', 'title', 'email', 'phone', 'user_id', 'notes', 'valid_from', 'valid_to'
    ];

    public function meetings()
    {
        return $this->belongsToMany(Meeting::class)->withPivot('invited', 'apologies', 'attended')->withTimestamps();
    }
}
