<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MeetingType extends Model
{
    # The meeting types that meetings can be
    use HasFactory;
    use SoftDeletes;

    protected $dates = [
        'deleted_at',
        'created_at',
        'updated_at',
        'valid_from',
        'valid_to',
    ];

    protected $fillable = [
        'name', 'description', 'notes', 'valid_from', 'valid_to'
    ];

    public function meetings()
    {
        return $this->hasMany(Meeting::class);
    }
}
