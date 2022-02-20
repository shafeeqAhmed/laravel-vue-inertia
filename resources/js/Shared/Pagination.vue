<template>
    <div>
        <Component
            :is="link.url ? 'Link' : 'span'"
            v-for="link in links"
            :href="link.url"
            v-html="link.label"
            class="relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            :class="{ 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50': ! link.url, 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : link.active }"
        />
    </div>
</template>

<script>
export default {
    props: {
        links: Array
    },

    name: "Pagination"
};
</script>
