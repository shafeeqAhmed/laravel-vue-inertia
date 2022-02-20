<template>
    <li class="flex justify-between">
        {{ worker.forenames }} {{ worker.surname }}
        <span class="flex">
            <template v-if="model !== 'attendees'">
                <svg @click="saveWorker(worker.id, 'attendees')" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" role="img" aria-label="Mark person as attended">
                    <title>Mark person as attended</title>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                |
            </template>
            <template v-if="model !== 'apologies'">
                <svg @click="saveWorker(worker.id, 'apologies')" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" role="img" aria-label="Mark person as apology">
                    <title>Mark person as apology</title>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                |
            </template>
            <template v-if="model !== 'no_shows'">
                <svg @click="saveWorker(worker.id, 'no_shows')" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" role="img" aria-label="Mark person as no show">
                    <title>Mark person as no show</title>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                |
            </template>
            <svg @click="deleteWorker(worker.id, model)" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" role="img" aria-label="Remove person from meeting">
                <title>Remove person from meeting</title>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
        </span>
    </li>
</template>

<script>
export default {
    props: {
        worker: {
            type: Object,
            required: true
        },
        model: {
            type: String,
            required: true
        }
    },

    methods: {
        deleteWorker(worker_id, model) {
            switch(model) {
                case "attendees":
                    this.$parent.attendees.splice(this.$parent.attendees.findIndex((worker) => worker.id===worker_id), 1);
                    break;
                case "apologies":
                    this.$parent.apologies.splice(this.$parent.apologies.findIndex((worker) => worker.id===worker_id), 1);
                    break;
                case "no_shows":
                    this.$parent.no_shows.splice(this.$parent.no_shows.findIndex((worker) => worker.id===worker_id), 1);
                    break;
            }

            axios.delete(
                '/meetings/meeting_workers/' + worker_id
            );
        },

        async saveWorker(worker_id, model) {
            var apologies;
            var attended;

            switch(model) {
                case "attendees":
                    apologies = 0;
                    attended = 1;
                    break;
                case "apologies":
                    apologies = 1;
                    attended = 0;
                    break;
                case "no_shows":
                    apologies = 0;
                    attended = 0;
                    break;
            }

            axios.patch(
                '/meetings/meeting_workers/' + worker_id,
                {
                    worker_id: worker_id,
                    apologies: apologies,
                    attended: attended
                }
            )
                .then(response => response.data)
                .then(this.updateWorker);

        },

        updateWorker(response) {
            if(response.old_attended)
            {
                this.$parent.attendees.splice(this.$parent.attendees.findIndex((worker) => worker.id===response.id), 1);
            }
            else if(response.old_apologies)
            {
                this.$parent.apologies.splice(this.$parent.apologies.findIndex((worker) => worker.id===response.id), 1);
            }
            else if(!response.old_attended && !response.old_apologies)
            {
                this.$parent.no_shows.splice(this.$parent.no_shows.findIndex((worker) => worker.id===response.id), 1);
            }

            if(response.attended)
            {
                this.$parent.attendees.push({
                    'id': response.id,
                    'forenames': response.forenames,
                    'surname': response.surname,
                });
            }
            else if(response.apologies)
            {
                this.$parent.apologies.push({
                    'id': response.id,
                    'forenames': response.forenames,
                    'surname': response.surname,
                });
            }
            else if(!response.attended && !response.apologies)
            {
                this.$parent.no_shows.push({
                    'id': response.id,
                    'forenames': response.forenames,
                    'surname': response.surname,
                });
            }
        },



    },

    name: "AttendeeNode"
}
</script>
