<script setup lang="ts">
import { useAuthStore } from "@/store/auth";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);

</script>

<template>
    <div class="flex flex-wrap">
        <!-- Sidebar Content Here -->
        <Sidebar />

        <!-- Main Content Here -->
        <div class="w-full md:w-3/4 px-4 py-8 md:py-12">
            <h1 class="bg-emerald-700 p-5 text-3xl font-bold text-white mb-3">
                User panel
            </h1>
            <template v-if="isAuthenticated">
                <h1 class="text-2xl font-bold text-gray-800 mb-4">
                    Data from API response
                </h1>
                <h2 class="text-3xl font-semibold text-gray-800 mb-4">
                    Welcome {{isAuthenticated.name}}
                </h2>
                <p class="text-gray-700 text-xl leading-relaxed mb-6">
                    Your ID is {{isAuthenticated.id}} and Your email is {{isAuthenticated.email}}
                </p>
            </template>
        </div>
    </div>
</template>