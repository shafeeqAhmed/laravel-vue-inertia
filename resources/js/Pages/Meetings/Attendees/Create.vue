<template>
  <TransitionRoot as="template" :show="isOpenAddAttendeesModal">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                         leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300"
                         enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                         enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                         leave-from="opacity-100 translate-y-0 sm:scale-100"
                         leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div
              class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">


            <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
              <form @submit.prevent="submit" class="space-y-8 divide-y divide-gray-200">
                <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                  <div>
                    <div class="sm:flex sm:items-start">
                      <div class="text-center sm:mt-0 sm:mb-3 sm:text-left">
                        <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900">
                          Add Attendee
                        </DialogTitle>
                      </div>
                    </div>
                    <div class="space-y-6 sm:space-y-5">

                      <div
                          class="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-2">
                        <label for="worker_id" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                          Worker
                        </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                          <Listbox as="div" v-model="form.worker_id">
                            <div class="mt-1 relative">
                              <ListboxButton
                                  class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <span class="flex items-center">
                                                    <img v-if="form.worker_id != null"
                                                         :src="workers[workers.findIndex((worker) => worker.id===form.worker_id)].avatar"
                                                         alt="" class="flex-shrink-0 h-6 w-6 rounded-full"/>
                                                    <span v-if="form.worker_id != null" class="ml-3 block truncate">{{
                                                        workers[workers.findIndex((worker) => worker.id === form.worker_id)].forenames
                                                      }} {{
                                                        workers[workers.findIndex((worker) => worker.id === form.worker_id)].surname
                                                      }}</span>
                                                    <span v-else="form.worker_id != null" class="ml-3 block truncate">Please select a worker...</span>
                                                </span>
                                <span
                                    class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                    <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
                                                </span>
                              </ListboxButton>

                              <transition leave-active-class="transition ease-in duration-100"
                                          leave-from-class="opacity-100" leave-to-class="opacity-0">
                                <ListboxOptions
                                    class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                  <ListboxOption as="template" v-for="worker in workers" :key="worker.id"
                                                 :value="worker.id" v-slot="{ active, selected }">
                                    <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                                      <div class="flex items-center">
                                        <img :src="worker.avatar" alt="" class="flex-shrink-0 h-6 w-6 rounded-full"/>
                                        <span
                                            :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                                                                    {{ worker.forenames }} {{ worker.surname }}
                                                                </span>
                                      </div>

                                      <span v-if="selected"
                                            :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                                                <CheckIcon class="h-5 w-5" aria-hidden="true"/>
                                                            </span>
                                    </li>
                                  </ListboxOption>
                                </ListboxOptions>
                              </transition>
                            </div>
                          </Listbox>
                          <div v-if="form.errors.worker_id" v-text="form.errors.worker_id"
                               class="text-red-500 text-xs mt-1"></div>
                        </div>
                      </div>
                      <div class="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start  sm:border-gray-200 ">
                        <label for="attendee_type_id" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                          Attendee Type
                        </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                          <RadioGroup v-model="form.attendee_type_id">
                            <RadioGroupLabel class="sr-only"> Attendee Type</RadioGroupLabel>
                            <div class="space-y-4">
                              <RadioGroupOption as="template" v-for="attendee_type in attendee_types"
                                                :key="attendee_type.id" :value="attendee_type"
                                                v-slot="{ checked, active }">
                                <div
                                    :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'ring-2 ring-indigo-500' : '', 'relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none']">
                                  <div class="flex items-center">
                                    <div class="text-sm">
                                      <RadioGroupLabel as="p" class="font-medium text-gray-900">
                                        {{ attendee_type.name }}
                                      </RadioGroupLabel>
                                      <RadioGroupDescription as="div" class="text-gray-500">
                                        <p class="sm:inline">{{ attendee_type.description }}</p>
                                      </RadioGroupDescription>
                                    </div>
                                  </div>
                                  <div
                                      :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-500' : 'border-transparent', 'absolute -inset-px rounded-lg pointer-events-none']"
                                      aria-hidden="true"/>
                                </div>
                              </RadioGroupOption>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                      <div class="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start  sm:border-gray-200 ">
                        <label for="notes" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                          Notes
                        </label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                          <textarea v-model="form.notes" id="notes" name="notes" rows="3"
                                    class="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"></textarea>
                          <p class="mt-2 text-sm text-gray-500">Notes about the attendee, not included in published
                            output</p>
                          <div v-if="form.errors.notes" v-text="form.errors.notes"
                               class="text-red-500 text-xs mt-1"></div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div class="pt-5">
                  <div class="flex justify-end">
                    <button type="button"
                            @click="closeAddAttendeeModal"
                            class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Cancel
                    </button>
                    <button type="submit"
                            class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            :disabled="form.processing">
                      Add worker
                    </button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>

</template>

<script>
import {reactive, ref, toRef} from "vue";
import {useForm} from "@inertiajs/inertia-vue3";
import {RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption} from '@headlessui/vue'
import {Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions} from '@headlessui/vue'
import {CheckIcon, SelectorIcon} from '@heroicons/vue/solid'
import {Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot, Switch} from '@headlessui/vue'
import SweetAlert from "../../../mixins/SweetAlert";

export default {
  components: {
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    SelectorIcon,
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    Switch,
  },
  mixins: [SweetAlert],
  props: {
    errors: Object,
    workers: Array,
    meeting: Object,
    attendee_types: Array,
    isOpenAddAttendeesModal: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      form: reactive({})
    }
  },
  methods: {
    closeAddAttendeeModal() {
      this.$emit('closeAddAttendeeModal')
    },
    submit() {
      this.form.post('/meetings/meeting_workers/' + this.meeting.id, {
        onSuccess: () => {
          this.toast('success','Attendees has been updated Successfully!')
          this.closeAddAttendeeModal()
          this.form.reset()

        }
      });
    }
  },
  setup() {
    const form = useForm({
      worker_id: null,
      attendee_type_id: null,
      notes: null,
    })
    return {form}
  },

  mounted() {
  },

  name: "Attendee Create",
  sidebar: "Meetings"
}
</script>

<style scoped>

</style>
