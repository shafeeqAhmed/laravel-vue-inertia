<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DocumentType extends Model
{
    # The document types that documents can fall into
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

    public function documents()
    {
        return $this->hasMany(Document::class);
    }
}
