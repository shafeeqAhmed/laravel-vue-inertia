<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Minute extends Model
{
    # The minute item within a meeting. Equivalent to each individual line. Can self-reference
    use HasFactory;
    use SoftDeletes;

    protected $dates = [
        'deleted_at',
        'created_at',
        'updated_at',
    ];

    protected $fillable = [
        'content', 'order', 'meeting_id', 'parent_id', 'notes'
    ];

    public function meeting()
    {
        return $this->belongsTo(Meeting::class);
    }

    # Parent and sub agenda items to allow for a hierarchy to be created
    public function parent()
    {
        return $this->belongsTo(Minute::class, 'parent_id', 'id');
    }

    public function children()
    {
        return $this->hasMany(Minute::class, 'parent_id', 'id');
    }

    public function allChildren()
    {
        return $this->children()->with('allChildren');
    }

    public function allParents()
    {
        return $this->parent()->with('allParents');
    }
}
