<template>
    <form class="w-full flex md:ml-0" action="#" method="get">
        <label for="search-field" class="sr-only">Search</label>
        <div class="relative w-full text-gray-400 focus-within:text-gray-600">
            <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <SearchIcon class="h-5 w-5" aria-hidden="true" />
            </div>
            <input id="search-field" class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search" type="search" name="search" />
        </div>
    </form>
</template>

<script>

import {
    SearchIcon,
} from '@heroicons/vue/outline';

export default {
    components: {
        SearchIcon,
    },
    setup() {
        return {
        }
    },

    name: "MenuSearch"
}
</script>
