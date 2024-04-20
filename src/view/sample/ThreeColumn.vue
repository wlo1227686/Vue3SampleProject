<script setup lang="ts">
import { reactive } from 'vue'

let links = reactive([
    'Dashboard',
    'Messages',
    'Profile',
    'Updates'])
</script>

<template>
    <v-app id="inspire">
        <v-app-bar class="px-3" density="compact" flat>
            <v-avatar class="hidden-md-and-up" color="grey-darken-1" size="32"></v-avatar>

            <v-spacer></v-spacer>

            <v-tabs color="grey-darken-2" centered>
                <v-tab v-for="link in links" :key="link" :text="link"></v-tab>
            </v-tabs>
            <v-spacer></v-spacer>

            <v-avatar class="hidden-sm-and-down" color="grey-darken-1" size="32">
                <!-- 返回按鈕 -->
                <RouterLink to="/dashboard" custom v-slot="{ navigate }">
                    <v-btn @click="navigate" role="link" block>返回</v-btn>
                </RouterLink>
            </v-avatar>
        </v-app-bar>

        <v-main class="bg-grey-lighten-3">
            <v-container>
                <v-row>
                    <!-- 左側 -->
                    <v-col cols="12" md="2">
                        <v-sheet min-height="268" rounded="lg">
                            <!--  -->
                        </v-sheet>
                    </v-col>

                    <!-- 中間 -->
                    <v-col cols="12" md="8">
                        <v-sheet min-height="70vh" rounded="lg">
                            <!--  -->
                        </v-sheet>
                    </v-col>

                    <!-- 右側 -->
                    <v-col cols="12" md="2">
                        <v-sheet min-height="268" rounded="lg">
                            <!--  -->
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<style lang="scss" scoped></style>