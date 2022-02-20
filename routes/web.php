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

Route::get('/php', function () {
    dd(openssl_get_cert_locations());
    phpinfo();
});
Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');

# Meetings area
Route::middleware(['auth:sanctum', 'verified'])->get('meetings', [MeetingController::class, 'index'])->middleware('permission:meeting-permission')->name('meeting.index');
Route::middleware(['auth:sanctum', 'verified'])->get('meetings/create', [MeetingController::class, 'create'])->middleware('permission:meeting-permission')->name('meeting.create');
Route::middleware(['auth:sanctum', 'verified'])->post('meetings', [MeetingController::class, 'store'])->middleware('permission:meeting-permission')->name('meeting.store');
Route::middleware(['auth:sanctum', 'verified'])->get('meetings/{meeting}/edit', [MeetingController::class, 'edit'])->middleware('permission:meeting-permission')->name('meeting.edit');
Route::middleware(['auth:sanctum', 'verified'])->get('meetings/{meeting}', [MeetingController::class, 'show'])->middleware('permission:meeting-permission')->name('meeting.show');

# Inertia Meetings routes
Route::middleware(['auth:sanctum', 'verified'])->post('meetings/agendas', [AgendaController::class, 'store'])->middleware('permission:meeting-permission')->name('meeting.agenda.store');
Route::middleware(['auth:sanctum', 'verified'])->post('meetings/minutes', [MinuteController::class, 'store'])->middleware('permission:meeting-permissione')->name('meeting.minute.store');

Route::middleware(['auth:sanctum', 'verified'])->get('meetings/meeting_workers/{meeting}/create', [MeetingWorkerController::class, 'create'])->middleware('permission:meeting-permission')->name('meeting.worker.create');
Route::middleware(['auth:sanctum', 'verified'])->post('meetings/meeting_workers/{meeting}', [MeetingWorkerController::class, 'store'])->middleware('permission:meeting-permission')->name('meeting.worker.store');
Route::middleware(['auth:sanctum', 'verified'])->patch('meetings/meeting_workers/{meetingWorker}', [MeetingWorkerController::class, 'update'])->middleware('permission:meeting-permission')->name('meeting.worker.update');
Route::middleware(['auth:sanctum', 'verified'])->delete('meetings/meeting_workers/{meetingWorker}', [MeetingWorkerController::class, 'destroy'])->middleware('permission:meeting-permission')->name('meeting.worker.delete');

Route::middleware(['auth:sanctum', 'verified'])->get('meetings/documents/{meeting}/create', [DocumentController::class, 'create'])->middleware('permission:meeting-permission')->name('meeting.document.create');
Route::middleware(['auth:sanctum', 'verified'])->post('meetings/documents/{meeting}', [DocumentController::class, 'store'])->middleware('permission:meeting-permission')->name('meeting.document.store');
Route::middleware(['auth:sanctum', 'verified'])->delete('meetings/documents/{meeting}/{document}', [DocumentController::class, 'destroy'])->middleware('permission:meeting-permission')->name('meeting.document.delete');
Route::middleware(['auth:sanctum', 'verified'])->get('meetings/documents/{document}', [DocumentController::class, 'show'])->middleware('permission:meeting-permission')->name('meeting.document.show');

Route::middleware(['auth:sanctum', 'verified'])->delete('meetings/agendas/{agenda}', [AgendaController::class, 'destroy'])->middleware('permission:meeting-permission')->name('meeting.agenda.delete');
Route::middleware(['auth:sanctum', 'verified'])->delete('meetings/minutes/{minute}', [MinuteController::class, 'destroy'])->middleware('permission:meeting-permission')->name('meeting.minute.delete');

Route::middleware(['auth:sanctum', 'verified'])->patch('meetings/{meeting}', [MeetingController::class, 'update'])->middleware('permission:meeting-permission')->name('meeting.update');
