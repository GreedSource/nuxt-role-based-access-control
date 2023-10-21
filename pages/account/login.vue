<script setup lang="ts">
const { $toast } = useNuxtApp();
import { useAuthStore } from "@/store/auth";
import { UserProps } from "@/interfaces/user.interface";
const runtimeConfig = useRuntimeConfig()


const { setAuthenticated } = useAuthStore();

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Login` : "Login";
  },
});

const handleSubmit = async (data: any) => {
  $fetch<UserProps>('/auth/login', {
    baseURL: runtimeConfig.public.baseUrl,
    method: 'POST', body: data
  }).then(async (response) => {
    await setAuthenticated(response);
    await navigateTo("/user/dashboard", { replace: true });
  }).catch((e) => {
    $toast.error(e.response._data.message)
  })
};

const handleIconClick = (node: any) => {
  node.props.suffixIcon = node.props.suffixIcon === "eye" ? "eyeClosed" : "eye";
  node.props.type = node.props.type === "password" ? "text" : "password";
};
</script>
<template>
  <div class="my-32 w-96 mx-auto">
    <h1 class="text-center text-2xl font-bold mb-5">User login</h1>
    <FormKit type="form" @submit="handleSubmit" submit-label="Login" id="login-form">
      <FormKit type="text" label="Email" name="username" validation="required|email" placeholder="Enter your email..."
        autocomplete="username" />
      <FormKit type="password" label="Password" name="password" validation="required" placeholder="Enter your password..."
        suffix-icon="eyeClosed" minlength="8" autocomplete="current-password" @suffix-icon-click="handleIconClick" />

      <div class="mb-2 text-sm">
        <NuxtLink href="#" class="text-blue-500 hover:text-blue-700">Forgot password</NuxtLink>
      </div>
    </FormKit>
    <i class="text-gray-700 text-sm">
      Do not have an Account?
      <NuxtLink href="/account/register" class="text-blue-500 hover:text-blue-700">Create an Account</NuxtLink>
    </i>
  </div>
</template>
