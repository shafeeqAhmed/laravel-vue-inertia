<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;
use Illuminate\Database\Eloquent\SoftDeletes;

class Documentable extends Pivot
{
    # The ability to add documents to any other models
    use HasFactory;
    use SoftDeletes;

    protected $dates = [
        'deleted_at',
        'created_at',
        'updated_at',
    ];

    protected $fillable = [
        'document_id', 'documentable_id', 'documentable_type'
    ];
}
