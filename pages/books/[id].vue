<template>
    <h1 class="text-3x1">{{ bookId }}</h1>
</template>

<script>
export default {
    computed: {
        bookId() {
            return this.$route.params.id;
        }
    }
}
</script>