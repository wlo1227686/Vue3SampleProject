<script setup lang="ts" name="baseline">
import { ref } from 'vue'

import AsideHeader from './AsideHeader.vue';

let drawer = ref(true)
</script>

<template>
    <!-- baseline -->
    <v-app id="inspire">
        <!-- 左側欄、頂部 -->
        <AsideHeader />

        <!-- 內容 -->
        <v-main>
            這邊是內容
            <!-- Baseline 的 Layout -->
            <RouterView />
        </v-main>
    </v-app>
</template>

<style lang="scss" scoped></style>