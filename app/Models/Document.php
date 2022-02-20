<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Document extends Model
{
    # The documents that are used to add to other models
    use HasFactory;
    use SoftDeletes;

    protected $dates = [
        'deleted_at',
        'created_at',
        'updated_at',
    ];

    protected $fillable = [
        'name', 's3_file_id', 'document_type_id', 'notes'
    ];
    /**
     * @var mixed
     */

    public function documentType()
    {
        return $this->belongsTo(DocumentType::class);
    }

    // All the relevant morphs
    public function meetings() { return $this->morphedByMany(Meeting::class, 'documentable'); }
}
