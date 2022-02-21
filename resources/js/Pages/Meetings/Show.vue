<template>
    <Head>
        <title>{{ meeting.name }}</title>
    </Head>

    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
                {{ meeting.name }}
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
                {{ meeting.meeting_type }}
            </p>
        </div>
        <div class="border-t border-gray-200">
            <dl class="sm:divide-y sm:divide-gray-200">
                <div v-if="meeting.summary" class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Summary
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ meeting.summary }}
                    </dd>
                </div>
                <div v-if="meeting.start_time" class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Date
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ meeting.start_time }} - {{ meeting.end_time }}
                    </dd>
                </div>
                <div v-if="meeting.venue" class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Venue
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ meeting.venue }}
                    </dd>
                </div>
                <div v-if="meeting.purpose" class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Purpose
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ meeting.purpose }}
                    </dd>
                </div>
                <div v-if="attendees.length > 0" class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Attendees
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <ul class="list-disc">

                          <li class="cursor-pointer m-2  " v-for="worker in attendees" @click="openModal(worker,meeting)">
                            <span class="hover:bg-blue-700 hover:text-white hover:p-1 hover:text-white-700">
                              {{ worker.forenames }} {{ worker.surname }}
                            </span>
                          </li>
                        </ul>


                      <button type="button" @click="openAddAttendeeModal"  class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Add Attendee
                      </button>
                      <add-attendees-modal-node
                          :isOpenAddAttendeesModal="isOpenAddAttendeesModal"
                          :workers="workers"
                          :attendee_types="attendee_types"
                          :meeting="meeting"
                          @closeAddAttendeeModal="closeAddAttendeeModal()"/>
                      <attendees-modal-node :open="isOpenModal" :meeting="meeting" :meeting-worker="meetingWorker" @closeModal="closeModal()"/>

                    </dd>
                </div>
                <div v-if="apologies.length > 0" class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Apologies
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <ul class="list-disc">
                            <li v-for="worker in apologies">{{ worker.forenames }} {{ worker.surname }}</li>
                        </ul>

                    </dd>
                </div>
                <div v-if="no_shows.length > 0" class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Other invitees
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <ul class="list-disc">
                            <li v-for="worker in no_shows">{{ worker.forenames }} {{ worker.surname }}</li>
                        </ul>
                    </dd>
                </div>
                <div v-if="agendas.length > 0" class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Agenda
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <ul class="list-disc">
                            <AgendaNode v-for="agenda in agendas" :key="agenda.id" :agenda="agenda" />
                        </ul>
                    </dd>
                </div>
                <div v-if="meeting.meeting_notes" class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Meeting notes
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ meeting.meeting_notes }}
                    </dd>
                </div>

                <div v-if="Object.entries(minutes).length > 0" class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Minutes
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <ul class="list-disc">
                            <MinuteNode v-for="minute in minutes" :key="minute.id" :minute="minute" />
                        </ul>
                    </dd>
                </div>
                <div v-if="meeting.notes" class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Notes
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {{ meeting.notes }}
                    </dd>
                </div>
                <div v-if="documents.length > 0" class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Attachments
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                    </dd>
                </div>
            </dl>
        </div>
    </div>

</template>

<script>
import MinuteNode from "../../components/MinuteNode";
import AgendaNode from "../../components/AgendaNode";
import AttendeesModalNode from "../../components/AttendeesModalNode";
import AddAttendeesModalNode from "../Meetings/Attendees/Create";

import {ref, toRefs} from "vue";

export default {
    components: { MinuteNode, AgendaNode, AttendeesModalNode,AddAttendeesModalNode},

    props: {
        title: String,
        meeting: Object,
        attendees: Object,
        apologies: Object,
        no_shows: Object,
        agendas: Object,
        minutes: Object,
        documents: Object,
    },

  methods: {
      closeModal() {
        this.isOpenModal = false
      },

      openModal(meetingWorker,meeting) {
        this.isOpenModal = true
        this.meetingWorker = meetingWorker
        this.meetingWorker.meeting = meeting
      },
      openAddAttendeeModal() {
          this.isOpenAddAttendeesModal = true
        },
      closeAddAttendeeModal() {
      this.isOpenAddAttendeesModal = false
    },
    },
    setup(props) {
      const { meeting } = toRefs(props)

      const isOpenModal = ref(false)
      const isOpenAddAttendeesModal = ref(false)
      const meetingWorker = ref(false)
      const attendee_types = ref([])
      const workers = ref([])
      axios.get('/api/get-meeting-worker-data')
          .then(response =>{
            attendee_types.value = response.data.attendee_types
            workers.value = response.data.workers
          })

      return {
        isOpenModal,
        isOpenAddAttendeesModal,
        meetingWorker,
        attendee_types,
        workers,
      }
    },

    created()  {

    },

    name: "Meeting Show",
    sidebar: "Meetings"
}
</script>

<style scoped>

</style>
