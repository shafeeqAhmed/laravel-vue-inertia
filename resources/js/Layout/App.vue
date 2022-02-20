<template>

    <Head>
        <title>Project Management</title>
        <meta name="description" content="" head-key="description" />
    </Head>

    <div>
        <TransitionRoot as="template" :show="sidebarOpen">
            <Dialog as="div" class="fixed inset-0 flex z-40 md:hidden" @close="sidebarOpen = false">
                <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
                    <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
                </TransitionChild>
                <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
                    <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                        <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                            <div class="absolute top-0 right-0 -mr-12 pt-2">
                                <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                                    <span class="sr-only">Close sidebar</span>
                                    <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                                </button>
                            </div>
                        </TransitionChild>
                        <div class="flex-shrink-0 flex items-center justify-items-center px-4">

                        </div>
                        <div class="mt-5 flex-1 h-0 overflow-y-auto">
                            <nav class="flex-1 px-2 space-y-1 bg-white" aria-label="Sidebar">
                                <template v-for="item in this.$page.props.navigation" :key="item.name">
                                    <div v-if="!item.children">
                                        <Link v-if="$can(item.permission)" :href="item.href" :class="[$page.component === item.component ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md']">
                                            <span v-html="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true"></span>
                                            {{ item.name }}
                                        </Link>
                                    </div>
                                    <Disclosure as="div" v-else class="space-y-1" v-slot="{ open }">
                                        <DisclosureButton v-if="$can(item.permission)" class="bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                            <span v-html="item.icon" class="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true"></span>
                                            <span class="flex-1">
                                                {{ item.name }}
                                            </span>
                                            <svg :class="[open ? 'text-gray-400 rotate-90' : 'text-gray-300', 'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150']" viewBox="0 0 20 20" aria-hidden="true">
                                                <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                                            </svg>
                                        </DisclosureButton>
                                        <DisclosurePanel class="space-y-1">
                                            <span v-for="subItem in item.children">
                                                <Link v-if="$can(subItem.permission)" :key="subItem.name" as="a" :href="subItem.href" :class="[$page.component === subItem.component ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50', 'group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium rounded-md']">
                                                    {{ subItem.name }}
                                                </Link>
                                            </span>
                                        </DisclosurePanel>
                                    </Disclosure>
                                </template>
                            </nav>
                        </div>
                    </div>
                </TransitionChild>
                <div class="flex-shrink-0 w-14" aria-hidden="true">
                    <!-- Dummy element to force sidebar to shrink to fit close icon -->
                </div>
            </Dialog>
        </TransitionRoot>

        <!-- Static sidebar for desktop -->
        <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div class="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto">
                <div class="flex items-center justify-items-center flex-shrink-0 px-4">

                </div>
                <div class="mt-5 flex-grow flex flex-col">
                    <nav class="flex-1 px-2 space-y-1 bg-white" aria-label="Sidebar">
                        <template v-for="item in this.$page.props.navigation" :key="item.name">
                            <div v-if="!item.children">
                                <Link v-if="$can(item.permission)" :href="item.href" :class="[$page.component === item.component ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md']">
                                    <span v-html="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true"></span>
                                    {{ item.name }}
                                </Link>
                            </div>
                            <Disclosure as="div" v-else class="space-y-1" v-slot="{ open }">
                                <DisclosureButton v-if="$can(item.permission)" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500']">
                                    <span v-html="item.icon" class="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true"></span>
                                    <span class="flex-1">
                                        {{ item.name }}
                                    </span>
                                    <svg :class="[open ? 'text-gray-400 rotate-90' : 'text-gray-300', 'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150']" viewBox="0 0 20 20" aria-hidden="true">
                                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                                    </svg>
                                </DisclosureButton>
                                <DisclosurePanel class="space-y-1">
                                    <span v-for="subItem in item.children">
                                        <Link v-if="$can(subItem.permission)" :key="subItem.name" as="a" :href="subItem.href" :class="[$page.component === subItem.component ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50', 'group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium rounded-md']">
                                            {{ subItem.name }}
                                        </Link>
                                    </span>
                                </DisclosurePanel>
                            </Disclosure>
                        </template>
                    </nav>
                </div>
            </div>
        </div>

        <div class="md:pl-64 flex flex-col flex-1">
            <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
                <button type="button" class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden" @click="sidebarOpen = true">
                    <span class="sr-only">Open sidebar</span>
                    <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
                </button>
                <div class="flex-1 px-4 flex justify-between">
                    <div class="flex-1 flex">
                        <MenuSearch v-if="$can('view-menu-search')" />
                    </div>
                    <div class="ml-4 flex items-center md:ml-6">
                        <MenuNotification v-if="$can('view-notification')" />

                        <!-- Profile dropdown -->
                        <MenuProfile />
                    </div>
                </div>
            </div>

            <nav class="bg-white border-b border-gray-200 flex" aria-label="Breadcrumb">
                <ol role="list" class="max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8">
                    <li class="flex">
                        <div class="flex items-center">
                            <a href="/" class="text-gray-400 hover:text-gray-500">
                                <HomeIcon class="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                                <span class="sr-only">Home</span>
                            </a>
                        </div>
                    </li>
                    <li v-for="page in breadcrumbs" :key="page.name" class="flex">
                        <div class="flex items-center">
                            <svg class="flex-shrink-0 w-6 h-full text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                            </svg>
                            <a :href="page.href" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" :aria-current="page.current ? 'page' : undefined">{{ page.name }}</a>
                        </div>
                    </li>
                </ol>
            </nav>

            <main class="flex-1">
                <div class="py-6">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                        <h1 class="text-2xl font-semibold text-gray-900">{{ title }}</h1>
                    </div>
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

                        <slot />
                        <!-- /End main content -->

                    </div>
                </div>
            </main>
        </div>
    </div>

    <!-- Global notification live region -->
    <div aria-live="assertive" class="fixed top-16 inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
        <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
            <transition v-if="notifications.length > 0" v-for="(notification, index) in notifications" :key="index" enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                <div class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="p-4">
                        <div class="flex items-start">
                            <div v-if="notification.type === 'success'" class="flex-shrink-0">
                                <CheckCircleIcon class="h-6 w-6 text-green-400" aria-hidden="true" />
                            </div>
                            <div v-else-if="notification.type === 'error'" class="flex-shrink-0">
                                <ExclamationIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
                            </div>
                            <div v-else-if="notification.type === 'attention'" class="flex-shrink-0">
                                <ExclamationIcon class="h-5 w-5 text-yellow-400" aria-hidden="true" />
                            </div>
                            <div v-else-if="notification.type === 'information'" class="flex-shrink-0">
                                <InformationCircleIcon class="h-5 w-5 text-blue-400" aria-hidden="true" />
                            </div>

                            <div class="ml-3 w-0 flex-1 pt-0.5">
                                <p class="text-sm font-medium text-gray-900" v-text="notification.title"></p>
                                <p class="mt-1 text-sm text-gray-500" v-text="notification.content"></p>
                            </div>
                            <div class="ml-4 flex-shrink-0 flex">
                                <button @click="closeNotification(index)" class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span class="sr-only">Close</span>
                                    <XIcon class="h-5 w-5" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>

</template>

<script>

import MenuProfile from "../Shared/MenuProfile";
import MenuNotification from "../Shared/MenuNotification";
import MenuSearch from "../Shared/MenuSearch";

import { ref } from 'vue';
import {
    Dialog,
    DialogOverlay,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue';

import {
    BellIcon,
    CalendarIcon,
    CheckCircleIcon,
    ExclamationIcon,
    InformationCircleIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    MenuAlt2Icon,
    UsersIcon,
    XIcon,
} from '@heroicons/vue/outline';

import { SearchIcon } from '@heroicons/vue/solid';

export default {
    components: {
        Dialog,
        DialogOverlay,
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        TransitionChild,
        TransitionRoot,
        BellIcon,
        MenuAlt2Icon,
        SearchIcon,
        XIcon,
        HomeIcon,
        CheckCircleIcon,
        ExclamationIcon,
        InformationCircleIcon,
        MenuProfile,
        MenuNotification,
        MenuSearch,
        Permissions,
    },

    setup() {
        const sidebarOpen = ref(false);

        return {
            sidebarOpen,
        }

    },

    computed: {
        full_name() {
            return this.$page.props.auth.user.forenames + " " + this.$page.props.auth.user.surname;
        }
    },

    props: {
        title: String,
        breadcrumbs: Array
    },

    beforeUpdate()  {
        var location = this.$page.component.split('/');

        this.$page.props.navigation.every( (element, index, array) => {
            element.current = false;
            return element;
        })

        if(Array.isArray(location))
        {
            this.$page.props.navigation.find(function(element) {
                return element.name === location[0];
            }).current = true;
        }
        else
        {
            this.$page.props.navigation.find(function(element) {
                return element.name === location;
            }).current = true;
        }

    },

    data() {
        return {
            notifications: [],
            pages: []
        }
    },

    methods: {
        closeNotification(notification) {
            this.notifications.splice(notification, 1);
        },
    },

    name: "app"
}

</script>

<style scoped>

</style>
