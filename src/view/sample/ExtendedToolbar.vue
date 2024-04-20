<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import useMainStore from '@/store';

// 初始化puppyImageList
useMainStore().initPuppyImageList();

// 選單列表 
let menuItemList = reactive([
    { title: 'HOME', value: '' },
    { title: 'REFLASH', value: '' },
    { title: 'RETURN', value: '/dashboard' }
])

// 選單按鈕點擊事件
const router = useRouter();
function menuActionClick(index: number) {
    let title = menuItemList[index].title
    let value = menuItemList[index].value
    if ('RETURN' === title) {
        router.push(value)
    } else if ('REFLASH' === title) {
        // 初始化puppyImageList
        useMainStore().initPuppyImageList();
    }
}
</script>

<template>
    <v-app id="inspire">
        <!-- 頂部(app-bar) -->
        <v-app-bar extended>
            <!-- bar-nav-icon -->
            <v-app-bar-nav-icon />
            <!-- title -->
            <v-app-bar-title>Extended Toolbar</v-app-bar-title>
            <!-- spacer -->
            <v-spacer />
            <!-- button -->
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
                </template>
                <!-- 下拉選單 -->
                <v-list>
                    <v-list-item v-for="(item, index) in menuItemList" :key="index" @click="menuActionClick(index)">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <!-- 主頁(v-main) -->
        <v-main>
            <v-container>
                <v-row>
                    <v-col v-for="(item, index) in  useMainStore().$state.puppyList" cols="3">
                        <v-card height="200">
                            <!-- 圖片 -->
                            <v-img width="100%" :lazy-src=item.message :src=item.message aspect-ratio="1"
                                class="bg-grey-lighten-2" cover>
                                <!-- 懶加載效果 -->
                                <template v-slot:placeholder>
                                    <div class="d-flex align-center justify-center fill-height">
                                        <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                                    </div>
                                </template>
                            </v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <!-- 遮罩 -->
            <div class="text-center">
                <v-overlay :model-value="useMainStore().$state.overlay" class="align-center justify-center">
                    <v-progress-circular color="primary" size="64" indeterminate></v-progress-circular>
                </v-overlay>
            </div>
        </v-main>
    </v-app>
</template>

<style lang="scss" scoped></style>