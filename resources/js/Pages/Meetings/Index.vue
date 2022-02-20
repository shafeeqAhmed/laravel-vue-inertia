<template>
    <Head>
        <title>All meetings</title>
    </Head>

    <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
        <div class="px-4 py-5 sm:px-6">
            <div class="flex justify-between">
                <select v-model="length" id="length" name="length" class="mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option v-for="lengths in page_lengths" :value="lengths.name" >{{ lengths.name }}</option>
                </select>
                <input v-model="search" type="text" placeholder="Search..." class="border px-2 rounded-lg" />
            </div>
        </div>
        <div class="px-4 py-3 sm:p-6">
            <div class="flex flex-col mt-4">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Venue
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Attendees
                                    </th>
                                    <th scope="col" class="relative px-6 py-3">
                                        <span class="sr-only">Actions</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                <tr v-for="(meeting, meetingIdx) in meetings.data" :key="meeting.id" :class="meetingIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div>
                                                <div class="text-sm font-medium text-gray-900">
                                                    {{ meeting.name }}
                                                </div>
                                                <div class="text-sm text-gray-500">
                                                    {{ meeting.meeting_type }}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">{{ meeting.date }}</div>
                                        <div class="text-sm text-gray-500">{{ meeting.start_time }} - {{ meeting.end_time }}</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">{{ meeting.venue }}</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div class="flex -space-x-0 relative z-0 overflow-hidden">
                                            <span v-for="attendee in meeting.attendees" class="inline-block h-6 w-6 rounded-full ring-2 ring-white inline-flex items-center justify-center bg-gray-500"><span class="text-xs font-medium leading-none text-white">{{ attendee.forenames.substr(0, 1) }}{{ attendee.surname.substr(0, 1) }}</span></span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <Link :href="`/meetings/${meeting.id}`" class="text-indigo-600 hover:text-indigo-900">View</Link> |
                                        <Link :href="`/meetings/${meeting.id}/edit`" class="text-indigo-600 hover:text-indigo-900">Edit</Link>
                                    </td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-4 pb-4 sm:px-6  flex items-center justify-between">
            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div class="pt-4">
                    <p class="text-sm text-gray-700">
                        Showing
                        <span class="font-medium">{{ meetings.from }}</span>
                        to
                        <span class="font-medium">{{ meetings.to }}</span>
                        of
                        <span class="font-medium">{{ meetings.total }}</span>
                        results
                    </p>
                </div>
                <div>
                    <Pagination :links="meetings.links" class="mt-6" />
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import FormatDate from '../../mixins/FormatDate';
import FormatTime from '../../mixins/FormatDate';
import Pagination from "../../Shared/Pagination";
import throttle from "lodash/throttle"
import {CalendarIcon, HomeIcon} from "@heroicons/vue/outline";
import {ref} from "vue";

const page_lengths = [
    {
        name: 10
    },
    {
        name: 25
    },
    {
        name: 50
    },
    {
        name: 100
    },
]

export default {
    components: { Pagination },

    setup() {
        return {
            page_lengths,
        }
    },

    props: {
        title: String,
        filters: Object,
        meetings: Object,
    },

    mixins: [FormatDate, FormatTime],

    data() {
        return{
            search: this.filters.search,
            length: this.filters.length,
        }
    },

    methods() {
    },

    created() {
       window.Echo
           .private('meetings')
           .listen('.meeting.list.update', event=> {
               this.$inertia.get(
                   '/meetings',
                   {search: this.search, length: this.length},
                   {
                       preserveState: true,
                       preserveScroll: true,
                       replace: true,
                   }
               );
           });
    },

    mounted() {
        if(this.filters.length === 0)
        {
            this.length = 10;
        }
    },

    unmounted() {
        window.Echo.leave('meetings.');
    },

    watch: {
        search: throttle(
            function(value) {
                this.$inertia.get(
                    '/meetings',
                    {search: value, length: this.length},
                    {
                        preserveState: true,
                        preserveScroll: true,
                        replace: true,
                    }
                );
            },
            300
        ),

        length:
            function(value) {
                this.$inertia.get(
                    '/meetings',
                    {search: this.search, length: value},
                    {
                        preserveState: true,
                        preserveScroll: true,
                        replace: true,
                    }
                );
            }
    },

    name: "Meeting Index",
    sidebar: "Meetings"
}

</script>

<style scoped>

</style>
