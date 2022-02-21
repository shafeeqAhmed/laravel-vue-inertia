<?php

use App\Http\Controllers\AgendaController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\MeetingController;
use App\Http\Controllers\MeetingWorkerController;
use App\Http\Controllers\MinuteController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::middleware('auth:sanctum', 'verified')->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');

Route::group(['middleware'=>['auth:sanctum', 'verified','permission:meeting-permission'],'as'=>'meeting.','prefix'=>'meetings'], function(){

# Meetings area
    Route::get('', [MeetingController::class, 'index'])->name('index');
    Route::get('/create', [MeetingController::class, 'create'])->name('create');
    Route::post('', [MeetingController::class, 'store'])->name('store');
    Route::get('/{meeting}/edit', [MeetingController::class, 'edit'])->name('edit');
    Route::get('/{meeting}', [MeetingController::class, 'show'])->name('show');

# Inertia Meetings routes
    Route::post('/agendas', [AgendaController::class, 'store'])->name('agenda.store');
    Route::post('/minutes', [MinuteController::class, 'store'])->name('minute.store');

    Route::get('/meeting_workers/{meeting}/create', [MeetingWorkerController::class, 'create'])->name('worker.create');
    Route::post('/meeting_workers/{meeting}', [MeetingWorkerController::class, 'store'])->name('worker.store');
    Route::patch('/meeting_workers/{meetingWorker}', [MeetingWorkerController::class, 'update'])->name('worker.update');
    Route::delete('/meeting_workers/{meetingWorker}', [MeetingWorkerController::class, 'destroy'])->name('worker.delete');

    Route::get('/documents/{meeting}/create', [DocumentController::class, 'create'])->name('document.create');
    Route::post('/documents/{meeting}', [DocumentController::class, 'store'])->name('document.store');
    Route::delete('/documents/{meeting}/{document}', [DocumentController::class, 'destroy'])->name('document.delete');
    Route::get('/documents/{document}', [DocumentController::class, 'show'])->name('document.show');

    Route::delete('/agendas/{agenda}', [AgendaController::class, 'destroy'])->name('agenda.delete');
    Route::delete('/minutes/{minute}', [MinuteController::class, 'destroy'])->name('minute.delete');

    Route::patch('/{meeting}', [MeetingController::class, 'update'])->name('update');

});

