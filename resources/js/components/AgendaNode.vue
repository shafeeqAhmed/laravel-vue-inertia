<template>
    <li>
        <span class="flex justify-between">
            {{ agenda.content }}
            <span class="flex">
                <svg @click="$emit('delete_agenda', agenda)" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" role="img" aria-label="Delete agenda item">
                    <title>Remove agenda item from meeting</title>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </span>
        </span>

        <div v-if="hasChildren">
            <ul class="list-disc ml-4 pl-4">
                <AgendaNode
                    v-for="child in agenda.all_children"
                    v-on:delete_agenda="$emit('delete_agenda', $event)"
                    :key="child.id"
                    :agenda="child"
                />
            </ul>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        agenda: {
            type: Object,
            required: true
        }
    },

    computed: {
        hasChildren() {
            const { all_children } = this.agenda
            return all_children && all_children.length > 0
        }
    },

    methods: {
    },

    name: "AgendaNode"
}
</script>

<style scoped>

</style>
