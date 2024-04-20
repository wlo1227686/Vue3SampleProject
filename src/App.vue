<script setup lang="ts" name="App">
import { useRouter } from 'vue-router';
const router = useRouter()
router.push("/dashboard")
</script>

<template>
  <div>
    <RouterView />

  </div>
</template>

<style lang="scss" scoped></style>