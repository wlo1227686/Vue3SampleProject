<script setup lang="ts">
import { reactive, ref } from 'vue'
import router from '@/router'
let drawer = ref(false)

const menuItemList = reactive([
    { itemName: 'Dashboard', itemIcon: 'dashboard', itemValue: '/baseline/dashboard' },
    { itemName: 'Account', itemIcon: 'account_balance', itemValue: '/baseline/account' },
    { itemName: 'Admin', itemIcon: 'account_circle', itemValue: '/baseline/admin' },
    { itemName: '返回', itemIcon: 'exit_to_app', itemValue: '/dashboard' },
])

function clickMenuItem(path: string) {
    router.push(path)
}


</script>

<template>

    <!-- 側邊清單 -->
    <v-navigation-drawer class="aside-drawer" theme="light" v-model="drawer">
        <div class="pa-2">
            <!-- 清單 -->
            <v-list density='compact'>
                <v-list-item v-for='(item, index) in menuItemList' color="primary" :key='index' :value="item"
                    :title=item.itemName @click=clickMenuItem(item.itemValue)>
                    <template v-slot:prepend>
                        <!-- #e9d9f9 操作色 -->
                        <!-- #f7f1fb 底色 -->
                        <span class="v-icon material-icons-outlined">{{ item.itemIcon }}</span>
                    </template>
                </v-list-item>
            </v-list>
        </div>
    </v-navigation-drawer>

    <!-- 頂部 -->
    <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Baseline</v-app-bar-title>
    </v-app-bar>

</template>

<style lang="scss" scoped>
.aside-drawer {
    background-color: #f7f1fb,
}
</style>