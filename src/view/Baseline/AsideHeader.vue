<script setup lang="ts">
import { ref } from 'vue'
let drawer = ref(true)
</script>

<template>

    <!-- 側邊清單 -->
    <v-navigation-drawer class="bg-deep-purple" theme="light" v-model="drawer">
        <v-list color="transparent">
            <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard"></v-list-item>
            <v-list-item prepend-icon="mdi-account-box" title="Account"></v-list-item>
            <v-list-item prepend-icon="mdi-gavel" title="Admin"></v-list-item>
        </v-list>

        <template v-slot:append>
            <div class="pa-2">
                <!-- 返回按鈕 -->
                <RouterLink to="/dashboard" custom v-slot="{ navigate }">
                    <v-btn @click="navigate" role="link" block>返回</v-btn>
                </RouterLink>
            </div>
        </template>
    </v-navigation-drawer>

    <!-- 頂部 -->
    <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Baseline</v-app-bar-title>
    </v-app-bar>

</template>

<style lang="scss" scoped></style>