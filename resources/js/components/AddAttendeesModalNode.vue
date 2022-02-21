<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">

          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900">
                  Add Attendee
                </DialogTitle>
              </div>
            </div>

            <div class="grid grid-flow-row auto-rows-max m-5">
              <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="submit"> update </button>
              <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="closeModal" ref="cancelButtonRef">Cancel</button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { toRefs, ref, onUpdated } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot, Switch } from '@headlessui/vue'
import { ExclamationIcon } from '@heroicons/vue/outline'
import { Inertia } from '@inertiajs/inertia'
import SweetAlert from "../mixins/SweetAlert";

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    ExclamationIcon,
    Switch,
  },
  props: {
    open: {
      type:Boolean,
      required: true
    },
    meetingWorker : {
      type:Object,
      required: true
    },
    meeting: {
      type:Object,
      required: true
    }
  },
  mixins: [SweetAlert],

  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    submit() {
      axios.patch(
          '/meetings/meeting_workers/' + this.meetingWorker.meeting_worker_id,
          {
            apologies: this.form.apologies ? 1 : 0,
            attended: this.form.attended ? 1 : 0,
            worker_id: this.form.worker_id
          }
          )
          .then(() =>{
            Inertia.visit(`/meetings/${this.meeting.id}`)
            this.closeModal()
            this.toast('success','Attendees Status has been updated Successfully!')
          }).catch(()=>{
            this.closeModal()
            this.toast('error','There is something wrong please Try again!')
      })
    }
  },

  setup(props) {
    const { open, meetingWorker } = toRefs(props)
    const form = ref({
      apologies: false,
      attended: false,
      worker_id: 0,
    })
    onUpdated(() => {
      form.value.apologies = meetingWorker.value.apologies
      form.value.attended = meetingWorker.value.attended
      form.value.worker_id = meetingWorker.value.worker_id
    })


    return { form, open, meetingWorker }
  },
}
</script>