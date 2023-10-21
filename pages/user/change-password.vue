<script setup>
const { $toast } = useNuxtApp();

const runtimeConfig = useRuntimeConfig();
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Change Password` : "Change Password";
  },
});

const handleSubmit = async (data) => {
  $fetch("/me/change-password", {
    baseURL: runtimeConfig.public.baseUrl,
    method: "PATCH",
    body: data,
  })
    .then(() => {
      $toast.success("Password updated");
    })
    .catch((e) => {
      $toast.error(e.response._data.message);
    });
};
</script>

<template>
  <div class="flex flex-wrap">
    <!-- Sidebar Content Here -->
    <Sidebar />

    <!-- Main Content Here -->
    <div class="w-full md:w-3/4 px-4 py-8 md:py-12">
      <div class="my-9 w-96 mx-auto">
        <h1 class="text-center text-2xl font-bold mb-5">Change Password</h1>
        <FormKit type="form" @submit="handleSubmit" submit-label="Change password" id="profile-form">
          <FormKit type="password" label="New password" name="password" validation="required"
            placeholder="Enter your new password..." />

          <FormKit type="password" label="Confirm password" name="confirmPassword" validation="required"
            placeholder="Confirm your new password..." />

          <FormKit type="password" label="Current password" name="currentPassword" validation="required"
            placeholder="Enter your current password..." />
        </FormKit>
      </div>
    </div>
  </div>
</template>
