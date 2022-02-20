<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'layouts.inertia';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        $navigation = collect([
            ['name' => 'Meetings',  'permission' => 'meeting-permission', 'current' => true, 'icon' => '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>',
                'children' => [
                    ['name' => 'Overview',  'href' => '/meetings',  'component' => 'Meeting/Index',  'permission' => 'meeting-permission', 'current' => true],
                    ['name' => 'Add',  'href' => '/meetings/create',  'component' => 'Meeting/Create',  'permission' => 'meeting-permission', 'current' => false],
                ]],
        ]);

        return array_merge(parent::share($request), [

            'auth' => [
                'user' => [
                    'username' => auth()->user()->username ?? "",
                    'forenames' => auth()->user()->forenames ?? "",
                    'surname' => auth()->user()->surname ?? "",
                    'email' => auth()->user()->email ?? "",
                    'profile_url' => auth()->user()->profile_photo_url ?? "",
                ],
            ],
            'navigation' => $navigation
        ]);
    }
}
