<script setup lang="ts" name="baseline">
import { ref } from 'vue'

import AsideHeader from './AsideHeader.vue';

let drawer = ref(true)
</script>

<template>
    <!-- baseline -->
    <v-app id="inspire">
        <!-- 左側欄、頂部 -->
        <AsideHeader></AsideHeader>

        <!-- 內容 -->
        <v-main>
        </v-main>
    </v-app>
</template>

<style lang="scss" scoped></style>