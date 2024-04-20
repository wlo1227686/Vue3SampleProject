<script setup lang="ts" name="SystemBar">
import { ref } from 'vue';
let drawer = ref(false)
</script>

<template>
    <v-app id="inspire">
        <!-- 頂層的圖示 -->
        <v-system-bar>
            <v-spacer></v-spacer>

            <v-icon>mdi-square</v-icon>

            <v-icon>mdi-circle</v-icon>

            <v-icon>mdi-triangle</v-icon>
        </v-system-bar>

        <v-app-bar>
            <!-- 左側邊欄icon -->
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <!-- TopTitle -->
            <v-app-bar-title>System Bar</v-app-bar-title>
        </v-app-bar>
        <!-- 左側邊欄 -->
        <v-navigation-drawer v-model="drawer" temporary>
            <!--  -->
            <!-- 返回按鈕 -->
            <RouterLink to="/dashboard" custom v-slot="{ navigate }">
                <v-btn @click="navigate" role="link" block>返回</v-btn>
            </RouterLink>
        </v-navigation-drawer>
        <!-- 主頁 -->
        <v-main class="bg-grey-lighten-2">
            <v-container>
                <v-row>
                    <template v-for="n in 4" :key="n">
                        <v-col class="mt-2" cols="12">
                            <strong>Category {{ n }}</strong>
                        </v-col>

                        <v-col v-for="j in 6" :key="`${n}${j}`" cols="6" md="2">
                            <v-sheet height="150"></v-sheet>
                        </v-col>
                    </template>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<style lang="scss" scoped></style>