<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Books` : 'Books';
  }
})
</script>

<template>
  <h1 class="text-3x1">Books Page</h1>
</template>