<?php
namespace App\Services;

use Storage;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class UploadService
{
    protected $path = null;
    public function __construct() {

    }
    public function setPath($path) {
        $this->path = $path;
    }
    public function store($file) {
        if (!$file) return null;
        $path = $file->store('public/uploads/'.auth()->user()->id);
        return env('APP_URL') . '/storage/' . preg_replace('/public\//','',$path);
    }

}

