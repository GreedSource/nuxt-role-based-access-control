<script setup>
import { useAuthStore } from "@/store/auth";
const runtimeConfig = useRuntimeConfig()

const { $reset } = useAuthStore();

const onLogout = async () => {
  $fetch("/auth/logout", {
    baseURL: runtimeConfig.public.baseUrl,
    method: "DELETE",
    body:{}
  }).then((response)=>console.log(response)).catch((e) => $toast.error("Something went wrong!!"));
  $reset()
  await navigateTo("/account/login", {
    replace: true,
  });
};
</script>

<template>
  <div
    class="w-full md:w-1/6 px-4 py-8 md:py-12 bg-gray-700 text-gray-100 sm:h-screen"
  >
    <div class="py-4 px-6 flex flex-col gap-4">
      <NuxtLink
        class="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
        to="/user/dashboard"
        >Dashboad</NuxtLink
      >
      <NuxtLink
        class="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
        to="/user/profile"
        >Profile</NuxtLink
      >
      <NuxtLink
        class="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
        to="/user/change-password"
        >Change Password</NuxtLink
      >
      <NuxtLink
        class="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
        to="/user/delete-account"
        >Delete Account</NuxtLink
      >
      <button
        @click="onLogout"
        class="px-3 py-2 text-sm font-medium text-white hover:text-gray-300"
      >
        Logout
      </button>
    </div>
  </div>
</template>
<style lang="css" scoped>
.router-link-active {
  background-color: chartreuse;
  color: black;
}
</style>
