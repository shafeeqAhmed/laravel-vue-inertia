<template>
    <Menu as="div" class="ml-3 relative">
        <div>
            <MenuButton class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" :src="this.$page.props.auth.user.profile_url" :alt="full_name" />
            </MenuButton>
        </div>
        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <a v-if="$can('manage-profile')" href="/user/profile" class="block px-4 py-2 text-sm text-gray-700">Your Profile</a>
                <Link href="/logout" class="block px-4 py-2 text-sm text-gray-700" method="post" as="button">Sign out</Link>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script>

import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue';

export default {
    components: {
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        TransitionChild,
        TransitionRoot,
    },

    setup() {
        return {
        }
    },

    computed: {
        full_name() {
            return this.$page.props.auth.user.forenames + " " + this.$page.props.auth.user.surname;
        }
    },

    name: "MenuProfile"
}
</script>
