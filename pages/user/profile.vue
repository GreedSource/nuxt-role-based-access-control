<script setup lang="ts">
definePageMeta({
  permission: "user.profile",
});
import { useAuthStore } from "@/store/auth";
import { storeToRefs } from "pinia";
const { $toast } = useNuxtApp();
const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);

import { UserProps } from "@/interfaces/user.interface";
const runtimeConfig = useRuntimeConfig();

const { setAuthenticated } = useAuthStore();

const name = computed(() => isAuthenticated.value?.name);

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Profile` : "Profile";
  },
});

const handleSubmit = async (data: { name: string }) => {
  $fetch<UserProps>("/me", {
    baseURL: runtimeConfig.public.baseUrl,
    method: "PATCH",
    body: data,
  })
    .then((response) => {
      $toast.success("Profile updated");
      setAuthenticated({
        ...isAuthenticated,
        ...response,
      });
    })
    
};
</script>

<template>
  <div class="flex flex-wrap">
    <!-- Sidebar Content Here -->
    <Sidebar />

    <!-- Main Content Here -->
    <div class="w-full md:w-3/4 px-4 py-8 md:py-12">
      <div class="my-9 w-96 mx-auto">
        <h1 class="text-center text-2xl font-bold mb-5">Update user profile</h1>
        <FormKit
          type="form"
          @submit="handleSubmit"
          submit-label="Update"
          id="profile-form"
        >
          <FormKit
            type="text"
            label="Name"
            name="name"
            validation="required"
            placeholder="Enter your name..."
            v-model="name"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>
