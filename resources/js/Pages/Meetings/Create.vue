<template>
    <Head>
        <title>Add meeting</title>
    </Head>

    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
                Add meeting
            </h3>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
            <form @submit.prevent="submit" class="space-y-8 divide-y divide-gray-200">
                <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div>
                        <div class="space-y-6 sm:space-y-5">
                            <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                                <label for="name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Name
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                    <input v-model="form.name" type="text" name="name" id="name" required class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md">
                                    <div v-if="form.errors.name" v-text="form.errors.name" class="text-red-500 text-xs mt-1"></div>
                                </div>
                            </div>

                            <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="start_time" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Start time
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                    <div class="max-w-lg flex rounded-md shadow-sm">
                                        <input v-model="form.start_time" type="datetime-local" name="start_time" id="start_time" autocomplete="off" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                                    </div>
                                    <div v-if="form.errors.start_time" v-text="form.errors.start_time" class="text-red-500 text-xs mt-1"></div>
                                </div>
                            </div>

                            <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="end_time" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    End time
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                    <div class="max-w-lg flex rounded-md shadow-sm">
                                        <input v-model="form.end_time" type="datetime-local" name="end_time" id="end_time" autocomplete="off" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                                    </div>
                                    <div v-if="form.errors.end_time" v-text="form.errors.end_time" class="text-red-500 text-xs mt-1"></div>
                                </div>
                            </div>

                            <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="venue" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Venue
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                    <input v-model="form.venue" type="text" name="venue" id="venue" class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md">
                                    <div v-if="form.errors.venue" v-text="form.errors.venue" class="text-red-500 text-xs mt-1"></div>
                                </div>
                            </div>

                            <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="meeting_type_id" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Meeting Type
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                    <select v-model="form.meeting_type_id" id="meeting_type_id" name="meeting_type_id"  class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                                        <option v-for="meeting_type in meeting_types" :key="meeting_type.id" :value="meeting_type.id">{{ meeting_type.name }}</option>
                                    </select>
                                    <div v-if="form.errors.meeting_type_id" v-text="form.errors.meeting_type_id" class="text-red-500 text-xs mt-1"></div>
                                </div>
                            </div>

                            <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="summary" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Summary
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                    <textarea v-model="form.summary" id="summary" name="summary" rows="3" class="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"></textarea>
                                    <div v-if="form.errors.summary" v-text="form.errors.summary" class="text-red-500 text-xs mt-1"></div>
                                </div>
                            </div>

                            <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="purpose" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Purpose
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                    <textarea v-model="form.purpose" id="purpose" name="purpose" rows="3" class="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"></textarea>
                                    <div v-if="form.errors.purpose" v-text="form.errors.purpose" class="text-red-500 text-xs mt-1"></div>
                                </div>
                            </div>

                            <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="meeting_notes" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Meeting Notes
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                    <textarea v-model="form.meeting_notes" id="meeting_notes" name="meeting_notes" rows="3" class="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"></textarea>
                                    <p class="mt-2 text-sm text-gray-500">Notes taken during the meeting</p>
                                    <div v-if="form.errors.meeting_notes" v-text="form.errors.meeting_notes" class="text-red-500 text-xs mt-1"></div>
                                </div>
                            </div>

                            <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="notes" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Notes
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                    <textarea v-model="form.notes" id="notes" name="notes" rows="3" class="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"></textarea>
                                    <p class="mt-2 text-sm text-gray-500">Notes about the meeting, not included in published output</p>
                                    <div v-if="form.errors.notes" v-text="form.errors.notes" class="text-red-500 text-xs mt-1"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="pt-5">
                    <div class="flex justify-end">
                        <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Cancel
                        </button>
                        <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" :disabled="form.processing">
                            Create
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>


</template>

<script>
import { reactive, vue } from "vue";
import { Inertia } from '@inertiajs/inertia'
import { useForm } from "@inertiajs/inertia-vue3";

export default {
    components: {  },

    props: {
        errors: Object,
        meeting_types: Array,
    },

    data() {
        return{
            form: reactive({
            })
        }
    },

    setup () {
        const form = useForm({
            name: null,
            start_time: null,
            end_time: null,
            venue: null,
            meeting_type_id: null,
            summary: null,
            purpose: null,
            meeting_notes: null,
            notes: null,
        })

        function submit() {
            form.post('/meetings')
        }

        return { form, submit }
    },

    mounted()  {
    },

    name: "Meeting Create",
    sidebar: "Meetings"


};

</script>

<style scoped>

</style>
