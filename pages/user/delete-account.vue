<script setup>

const handleSubmit = async (data) => {
    console.log(data)
}
</script>

<template>
    <div class="flex flex-wrap">
        <!-- Sidebar Content Here -->
        <Sidebar />

        <!-- Main Content Here -->
        <div class="w-full md:w-3/4 px-4 py-8 md:py-12">
            <div class="my-9 w-96 mx-auto">
                <h1 class="text-center text-2xl font-bold mb-5">Delete Account</h1>
                <FormKit type="form" @submit="handleSubmit" submit-label="Delete account" id="profile-form">
                    <FormKit type="password" label="Password" name="password" validation="required"
                        placeholder="Enter your password..." />
                </FormKit>
            </div>
        </div>
    </div>
</template>