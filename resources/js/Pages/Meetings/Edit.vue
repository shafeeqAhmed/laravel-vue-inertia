<template>
    <Head>
        <title>{{ meeting.name }}</title>
    </Head>

    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900" v-text="meeting.name"></h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500" v-text="meeting.meeting_type"></p>
        </div>

        <div class="border-t border-gray-200">
            <dl class="sm:divide-y sm:divide-gray-200">

                <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        <label for="name" class="">
                            Meeting Name
                        </label>
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <span class="flex justify-between">
                            <input v-model="meeting.name" v-on:keyup.enter="saveMeeting" @keydown="whisperPeers('name')" type="text" name="name" id="name" autocomplete="off" class="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md">
                        </span>
                    </dd>
                </div>

                <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        <label for="meeting_type_id" class="">
                            Meeting Type
                        </label>
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <span class="flex justify-between">
                            <select v-model="meeting.meeting_type_id" id="meeting_type_id" name="meeting_type_id"  class="block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                <option v-for="meeting_type in meeting_types" :key="meeting_type.id" :value="meeting_type.id">{{ meeting_type.name }}</option>
                            </select>
                        </span>
                    </dd>
                </div>

                <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        <label for="summary" class="">
                            Summary
                        </label>
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <span class="flex justify-between">
                            <textarea v-model="meeting.summary" @keydown="whisperPeers('summary')" rows="4" name="summary" id="summary" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
                        </span>
                    </dd>
                </div>

                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        <label for="start_time" class="">
                            Start Date
                        </label>
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg flex rounded-md shadow-sm">
                            <span class="flex justify-between">
                                <input v-model="meeting.start_time" v-on:keyup.enter="saveMeeting" @keydown="whisperPeers('start time')" type="datetime-local" name="start_time" id="start_time" autocomplete="off" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                            </span>
                        </div>
                    </dd>
                </div>

                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        <label for="end_time" class="">
                            End Date
                        </label>
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg flex rounded-md shadow-sm">
                            <span class="flex justify-between">
                                <input v-model="meeting.end_time" v-on:keyup.enter="saveMeeting" @keydown="whisperPeers('end time')" type="datetime-local" name="end_time" id="end_time" autocomplete="off" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                            </span>
                        </div>
                    </dd>
                </div>

                <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        <label for="venue" class="">
                            Venue
                        </label>
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <span class="flex justify-between">
                            <input v-model="meeting.venue" v-on:keyup.enter="saveMeeting" @keydown="whisperPeers('venue')" type="text" name="venue" id="venue" autocomplete="off" class="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md">
                        </span>
                    </dd>
                </div>

                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        <label for="purpose" class="">
                            Purpose
                        </label>
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <span class="flex justify-between">
                            <textarea rows="4" v-model="meeting.purpose" @keydown="whisperPeers('purpose')" name="purpose" id="purpose" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
                        </span>
                    </dd>
                </div>

                <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Attendees
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <ul class="list-disc ml-4">
                            <AttendeeNode v-for="worker in attendees" :key="worker.id" :worker="worker" model="attendees" />
                        </ul>
                    </dd>
                </div>

                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Apologies
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <ul class="list-disc ml-4">
                            <AttendeeNode v-for="worker in apologies" :key="worker.id" :worker="worker" model="apologies" />
                        </ul>
                    </dd>
                </div>

                <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Other invitees
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <ul class="list-disc ml-4">
                            <AttendeeNode v-for="worker in no_shows" :key="worker.id" :worker="worker" model="no_shows" />
                        </ul>
                    </dd>
                </div>

                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Agenda
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <ul class="list-disc ml-4">
                            <AgendaNode v-for="agenda in agendas" v-on:delete_agenda="deleteAgenda($event)" :key="agenda.id" :agenda="agenda" />
                        </ul>

                        <span class="flex items-end">
                            <div class="grow mt-4 relative border bg-gray-50 border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                                <label for="newAgenda" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900">Enter additional agenda items</label>
                                <input type="text" id="newAgenda" v-model="newAgenda" v-on:keyup.enter="saveAgenda" @keydown="whisperPeers('agenda')" class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm bg-gray-50">
                            </div>
                            <div class="ml-4 flex-none">
                                <button @click="saveAgenda" type="button" class="items-center px-3 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <PlusCircleIcon class="h-5 w-5" aria-hidden="true" />
                                </button>
                            </div>
                        </span>
                    </dd>
                </div>

                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        <label for="meeting_notes" class="">
                            Meeting notes
                        </label>
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <span class="flex justify-between">
                            <textarea v-model="meeting.meeting_notes" @keydown="whisperPeers('meeting notes')" rows="4" name="meeting_notes" id="meeting_notes" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
                        </span>
                    </dd>
                </div>

                <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Minutes
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <ul class="list-disc ml-4">
                            <MinuteNode v-for="minute in minutes" v-on:delete_minute="deleteMinute($event)" :key="minute.id" :minute="minute" />
                        </ul>

                        <span class="flex items-end">
                            <div class="grow mt-4 relative border bg-gray-50 border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                                <label for="newMinute" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900">Enter additional minute</label>
                                <input type="text" id="newMinute" v-model="newMinute" v-on:keyup.enter="saveMinute" @keydown="whisperPeers('minute')" class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm bg-gray-50">
                            </div>
                            <div class="ml-4 flex-none">
                                <button @click="saveMinute" type="button" class="items-center px-3 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <PlusCircleIcon class="h-5 w-5" aria-hidden="true" />
                                </button>
                            </div>
                        </span>
                    </dd>
                </div>

                <div v-if="meeting.notes" class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        <label for="notes" class="">
                            Notes
                        </label>
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <span class="flex justify-between">
                            <textarea v-model="meeting.notes" @keydown="whisperPeers('notes')" rows="4" name="notes" id="notes" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>

                            <button @click="saveMeeting" type="button" class="ml-4 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              <SaveIcon class="h-4 w-4" aria-hidden="true" />
                            </button>
                        </span>
                    </dd>
                </div>

                <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Attachments
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <ul class="list-disc ml-4">
                            <li v-for="document in documents" class="flex justify-between">
                                <a :href="`/meetings/documents/${document.id}`"  class="ml-4 text-indigo-600 hover:text-indigo-900" target="_blank">
                                    {{ document.document_type.name }} - <span class="italic">{{ document.name }}</span>
                                </a>
                                <span class="flex">
                                    <svg @click="deleteDocument(document.id)" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" role="img" aria-label="Remove document from meeting">
                                        <title>Remove document from meeting</title>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </span>
                            </li>
                        </ul>
                    </dd>
                </div>

                <div class="px-4 py-5 flex justify-end">
                    <Link :href="`/meetings/documents/${meeting.id}/create`" class="ml-4 text-indigo-600 hover:text-indigo-900">
                        <button type="button" class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Add document &raquo;
                        </button>
                    </Link>
                    <Link :href="`/meetings/meeting_workers/${meeting.id}/create`" class="ml-4 text-indigo-600 hover:text-indigo-900">
                        <button type="button" class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Add attendee &raquo;
                        </button>
                    </Link>
                    <button @click="saveMeeting" type="button" class="ml-4 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save Meeting
                    </button>
                    <Link href="/meetings" class="ml-4 text-indigo-600 hover:text-indigo-900">
                        <button type="button" class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Return to meetings &raquo;
                        </button>
                    </Link>
                    <Link :href="`/meetings/${meeting.id}`" class="ml-4 text-indigo-600 hover:text-indigo-900">
                        <button type="button" class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            View meeting &raquo;
                        </button>
                    </Link>

                </div>
            </dl>

        </div>
    </div>

    <div class="rounded-md bg-blue-50 p-4 fixed bottom-0 left-0">
        <div class="flex">
            <div class="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
            </div>
            <div class="ml-3">
                <h3 class="text-sm font-medium text-blue-800">
                    Currently viewing
                </h3>
                <div class="mt-2 text-sm text-blue-700">
                    <ul>
                        <li v-for="participant in participants" v-text="participant.forenames + ' ' + participant.surname"></li>
                    </ul>
                </div>

                <div v-for="activePeer in activePeers" class="text-blue-600/75" v-text="activePeer.name + ' is editing ' + activePeer.model + '...'"></div>
            </div>
        </div>
    </div>

</template>

<script>
import MinuteNode from "../../components/MinuteNode";
import AgendaNode from "../../components/AgendaNode";
import AttendeeNode from "../../components/AttendeeNode";
import orderBy from "lodash/orderBy";
import {ref} from "vue";

import { SaveIcon } from '@heroicons/vue/solid';
import { PlusCircleIcon } from '@heroicons/vue/outline';

export default {
   components: { MinuteNode, AgendaNode, AttendeeNode,
       SaveIcon, PlusCircleIcon
   },

   props: {
       title: String,
       meeting: Object,
       attendees: Array,
       apologies: Array,
       no_shows: Array,
       agendas: Array,
       minutes: Array,
       documents: Object,
       meeting_types: Array,
   },

   setup() {
   },

   computed: {
     channel() {
         return window.Echo
             .join('meetings.' + this.meeting.id );
     }
   },

   created()  {
       this.channel
           .here(users => {
               this.participants = users;
           })
           .joining(user => {
               this.participants.push(user);
           })
           .leaving(user => {
               this.participants.splice(this.participants.indexOf(user), 1);
           })
           .listen('MeetingUpdated', event=> {
               this.updateMeeting(event);

               this.$parent.notifications.push({
                   'type': 'information',
                   'title': 'Meeting updated',
                   'content': 'The meeting has been updated',
               });

           })
           .listen('AgendaCreated', event=> {
               this.addAgenda(event);

               this.$parent.notifications.push({
                   'type': 'information',
                   'title': 'Agenda added',
                   'content': 'An agenda item has been added to the meeting',
               });
           })
           .listen('MinuteCreated', event=> {
               this.addMinute(event);

               this.$parent.notifications.push({
                   'type': 'information',
                   'title': 'Minute added',
                   'content': 'A minute line has been added to the meeting',
               });
           })
           .listen('MeetingWorkerUpdated', event=> {
               this.updateWorker(event);

               this.$parent.notifications.push({
                   'type': 'information',
                   'title': 'Worker updated',
                   'content': event.forenames + ' ' + event.surname + ' has been updated',
               });

           })
           .listen('MeetingWorkerDeleted', event=> {
               this.deleteWorker(event);

               this.$parent.notifications.push({
                   'type': 'information',
                   'title': 'Worker removed',
                   'content': event.forenames + ' ' + event.surname + ' has been removed',
               });

           })
           .listen('DocumentDetached', event=> {
               this.documents.splice(this.documents.findIndex((document) => document.id===event.id), 1);

               this.$parent.notifications.push({
                   'type': 'information',
                   'title': 'Attachment removed',
                   'content': event.name + ' has been removed',
               });

           })
           .listen('MeetingAgendasUpdated', event=> {
               this.agendas.splice(0, this.agendas.length);
               this.agendas.push.apply(this.agendas,event.agendas);

               this.$parent.notifications.push({
                   'type': 'information',
                   'title': 'Agenda updated',
                   'content': 'The meeting agenda has been updated',
               });

           })
           .listen('MeetingMinutesUpdated', event=> {
               this.minutes.splice(0, this.minutes.length);
               this.minutes.push(...event.minutes);

               this.$parent.notifications.push({
                   'type': 'information',
                   'title': 'Minutes updated',
                   'content': 'The meeting minutes have been updated',
               });

           })
           .listenForWhisper('typing', this.flashActivePeer);

       this.agendas.sort((a, b) => {
           return a.order - b.order;
       });

       this.minutes.sort((a, b) => {
           return a.order - b.order;
       });
   },

    beforeMount() {
    },

    unmounted() {
        window.Echo.leave('meetings.' + this.meeting.id);
    },

    data() {
       return {
           newAgenda: '',
           newMinute: '',
           newAction: '',
           newIssue: '',
           activePeers: {},
           typingTimer: {},
           participants: [],
           error_string: '',
       }
   },

   methods: {
       async saveMeeting() {
           axios.patch(
               '/meetings/' + this.$props.meeting.id,
               {
                   name: this.meeting.name,
                   meeting_type_id: this.meeting.meeting_type_id,
                   summary: this.meeting.summary,
                   start_time: this.meeting.start_time,
                   end_time: this.meeting.end_time,
                   venue: this.meeting.venue,
                   purpose: this.meeting.purpose,
                   meeting_notes: this.meeting.meeting_notes,
                   notes: this.meeting.notes,
               }
           )
               .then(response => response.data)
               .then(this.updateMeeting)
               .catch(error => {
                   Object.values(error.response.data.errors).forEach(error => {
                       this.error_string = this.error_string + error + ' ';
                   });

                   this.$parent.notifications.push({
                       'type': 'error',
                       'title': 'Meeting update failed',
                       'content': this.error_string,
                   });

                   this.error_string = '';
               });
       },

       async saveAgenda() {
           axios.post(
               '/meetings/agendas',
               {
                   meeting_id: this.$props.meeting.id,
                   content: this.newAgenda
               }
           )
               .then(response => response.data)
               .then(this.addAgenda)
               .then(this.newAgenda = '')
               .catch(error => {
                   Object.values(error.response.data.errors).forEach(error => {
                       this.error_string = this.error_string + error + ' ';
                   });

                   this.$parent.notifications.push({
                       'type': 'error',
                       'title': 'Agenda creation failed',
                       'content': this.error_string,
                   });

                   this.error_string = '';
               });
       },

       async saveMinute() {
            axios.post(
           '/meetings/minutes',
               {
                   meeting_id: this.$props.meeting.id,
                   content: this.newMinute
               }
           )
                .then(response => response.data)
                .then(this.addMinute)
                .then(this.newMinute = '')
            .catch(error => {
                Object.values(error.response.data.errors).forEach(error => {
                    this.error_string = this.error_string + error + ' ';
                });

                this.$parent.notifications.push({
                    'type': 'error',
                    'title': 'Minute creation failed',
                    'content': this.error_string,
                });

                this.error_string = '';
            });
       },

       whisperPeers(area) {
           this.channel
               .whisper('typing', {
                   username: this.$page.props.auth.user.username,
                   name: this.$parent.full_name,
                   model: area
               })
       },

       flashActivePeer(event) {
           var peer = {};
           peer["model"] = event.model;
           peer["name"] = event.name;

           this.activePeers[event.username] = peer;

           if(this.typingTimer[event.username]) clearTimeout(this.typingTimer[event.username]);

           this.typingTimer[event.username] = setTimeout(
               () => {
                   delete this.activePeers[event.username];
               }
               , 3000
           )
       },

       updateMeeting(updated_meeting) {
           this.meeting.name = updated_meeting.name;
           this.meeting.meeting_type_id = updated_meeting.meeting_type_id;
           this.meeting.meeting_type = updated_meeting.meeting_type;
           this.meeting.summary = updated_meeting.summary;
           this.meeting.start_time = updated_meeting.start_time;
           this.meeting.end_time = updated_meeting.end_time;
           this.meeting.venue = updated_meeting.venue;
           this.meeting.purpose = updated_meeting.purpose;
           this.meeting.meeting_notes = updated_meeting.meeting_notes;
           this.meeting.notes = updated_meeting.notes;

       },

       addAgenda(agenda) {
           this.agendas.push(agenda);
       },

       addMinute(minute) {
           this.minutes.push(minute);
       },

       updateWorker(meeting_worker) {
           this.deleteWorker(meeting_worker)

           if(meeting_worker.attended)
           {
               this.attendees.push({
                   'id': meeting_worker.id,
                   'forenames': meeting_worker.forenames,
                   'surname': meeting_worker.surname,
               });
           }
           else if(meeting_worker.apologies)
           {
               this.apologies.push({
                   'id': meeting_worker.id,
                   'forenames': meeting_worker.forenames,
                   'surname': meeting_worker.surname,
               });
           }
           else if(!meeting_worker.attended && !meeting_worker.apologies)
           {
               this.no_shows.push({
                   'id': meeting_worker.id,
                   'forenames': meeting_worker.forenames,
                   'surname': meeting_worker.surname,
               });
           }
       },

       deleteWorker(meeting_worker) {
           if(meeting_worker.old_attended)
           {
               this.attendees.splice(this.attendees.findIndex((worker) => worker.id===meeting_worker.id), 1);
           }
           else if(meeting_worker.old_apologies)
           {
               this.apologies.splice(this.apologies.findIndex((worker) => worker.id===meeting_worker.id), 1);
           }
           else if(!meeting_worker.old_attended && !meeting_worker.old_apologies)
           {
               this.no_shows.splice(this.no_shows.findIndex((worker) => worker.id===meeting_worker.id), 1);
           }
       },

       deleteMinute(node) {
           axios.delete(
               '/meetings/minutes/' + node.id
           );

           for ( let i = 0; i < this.minutes.length; i++ ) {
               if( this.minutes[i].id === node.id ){
                   this.minutes.splice(i, 1);
                   return true;
               }

               if( Array.isArray( this.minutes[i].all_children ) ){
                   if (this.deleteFromAllChildren(this.minutes[i].all_children, node.id)) return true;
               }
           }

       },

       deleteAgenda(node) {
           axios.delete(
               '/meetings/agendas/' + node.id
           );

           for ( let i = 0; i < this.agendas.length; i++ ) {
               if( this.agendas[i].id === node.id ){
                   this.agendas.splice(i, 1);
                   return true;
               }

               if( Array.isArray( this.agendas[i].all_children ) ){
                   if (this.deleteFromAllChildren(this.agendas[i].all_children, node.id)) return true;
               }
           }

       },

       deleteFromAllChildren(node, node_id) {
           for ( let i = 0; i < node.length; i++ ) {
               if( node[i].id === node_id ){
                   node.splice(i, 1);
                   return true;
               }

               if( Array.isArray( node[i].all_children ) ){
                   if (this.deleteFromAllChildren(node[i].all_children, node_id)) return true;
               }
           }

           return false;
       },

       deleteDocument(document_id) {
           this.documents.splice(this.documents.findIndex((document) => document.id===document_id), 1);

           axios.delete(
               '/meetings/documents/' + this.$props.meeting.id + '/' + document_id
           );
       },


   },

   watch: {
       agendas: {
           immediate: true,
           deep: true,
           handler(newValue, oldValue) {
               if(this.agendas !== null)
               {
                   this.agendas.sort((a, b) => {
                       return a.order - b.order;
                   });
               }
           }
       },

       minutes: {
           immediate: true,
           deep: true,
           handler(newValue, oldValue) {
               if(this.minutes !== null)
               {
                   this.minutes.sort((a, b) => {
                       return a.order - b.order;
                   });
               }
           }
       },

   },

   name: "Meeting Edit",
   sidebar: "Meetings"
}
</script>

<style scoped>

</style>
