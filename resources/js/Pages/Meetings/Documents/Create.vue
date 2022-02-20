<template>
    <Head>
        <title>Add a document</title>
    </Head>

    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
                Add document
            </h3>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
            <form @submit.prevent="submit" class="space-y-8 divide-y divide-gray-200">
                <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div>
                        <div class="space-y-6 sm:space-y-5">

                            <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="document" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Document upload
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                    <input @input="form.document = $event.target.files[0]" type="file" id="document" name="document" class="block w-full text-sm text-slate-500
                                      file:mr-4 file:py-2 file:px-4
                                      file:rounded-full file:border-0
                                      file:text-sm file:font-semibold
                                      file:bg-violet-50 file:text-violet-700
                                      hover:file:bg-violet-100
                                    "/>

                                    <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                                        {{ form.progress.percentage }}%
                                    </progress>
                                </div>
                            </div>

                            <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label for="notes" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Notes
                                </label>
                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                    <textarea v-model="form.notes" id="notes" name="notes" rows="3" class="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"></textarea>
                                    <p class="mt-2 text-sm text-gray-500">Notes about the document, not included in published output</p>
                                    <div v-if="form.errors.notes" v-text="form.errors.notes" class="text-red-500 text-xs mt-1"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="pt-5">
                    <div class="flex justify-end">
                        <Link :href="`/meetings/${meeting.id}/edit`" class="ml-4 text-indigo-600 hover:text-indigo-900">
                            <button type="button" class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Cancel &raquo;
                            </button>
                        </Link>
                        <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" :disabled="form.processing">
                            Add document
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
import {reactive, ref, toRef} from "vue";
import {useForm} from "@inertiajs/inertia-vue3";

export default {
    components: {
    },

    props: {
        errors: Object,
        meeting: Object,
    },

    data() {
        return{
            form: reactive({
            })
        }
    },

    setup (props) {
        const form = useForm({
            document: null,
            notes: null,
        })

        function submit() {
            form.post('/meetings/documents/' + props.meeting.id,
                {
                    _method: 'put',
                    document: form.document,
                });
        }

        return { form, submit }
    },

    mounted()  {
    },

    name: "Document Create",
    sidebar: "Meetings"
}
</script>

<style scoped>

</style>
