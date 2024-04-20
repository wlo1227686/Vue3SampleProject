<script setup lang="ts" name="inbox">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
let cards = reactive(['Today', 'Yesterday'])
let links: meunItemList = reactive([
    { icon: 'mdi-inbox-arrow-down', title: 'Inbox' },
    { icon: 'mdi-send', title: 'Send' },
    { icon: 'mdi-delete', title: 'Trash' },
    { icon: 'mdi-alert-octagon', title: 'Spam' },
    { icon: 'mdi-arrow-left', title: 'Return', value: '/dashboard' },
])
export type meunItem = {
    icon: string,
    title: string,
    value?: string,
}
export type meunItemList = meunItem[]


const drawer = ref(true)

const router = useRouter()
function menuActionClick(index: number) {
    let title = links[index].title
    let value = links[index].value || ""
    if ('Return' === title) {
        router.push(value)
    }
}
</script>

<template>
    <v-app id="inspire">
        <!-- 頂部圖示 -->
        <v-system-bar>
            <v-spacer></v-spacer>

            <v-icon>mdi-square</v-icon>

            <v-icon>mdi-circle</v-icon>

            <v-icon>mdi-triangle</v-icon>
        </v-system-bar>
        <!-- 左側邊欄 -->
        <v-navigation-drawer v-model="drawer">
            <v-sheet class="pa-4" color="grey-lighten-4">
                <v-avatar class="mb-4" color="grey-darken-1" size="64"></v-avatar>

                <div>john@google.com</div>
            </v-sheet>

            <v-divider></v-divider>
            <v-list>
                <v-list-item v-for="(item, index) in links" :key=item.icon :prepend-icon=item.icon :title=item.title
                    link @click="menuActionClick(index)"></v-list-item>
                <!-- <v-list-item v-for="[icon, text] in links" :key="icon" :prepend-icon="icon" :title="text"
                    link></v-list-item> -->
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <v-container class="py-8 px-6" fluid>
                <v-row>
                    <v-col v-for="card in cards" :key="card" cols="12">
                        <v-card>
                            <v-list lines="two">
                                <v-list-subheader :title="card"></v-list-subheader>

                                <template v-for="n in 6" :key="n">
                                    <v-list-item>
                                        <template v-slot:prepend>
                                            <v-avatar color="grey-darken-1"></v-avatar>
                                        </template>

                                        <v-list-item-title :title="`Message ${n}`"></v-list-item-title>

                                        <v-list-item-subtitle
                                            title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique"></v-list-item-subtitle>
                                    </v-list-item>

                                    <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider>
                                </template>
                            </v-list>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<style lang="scss" scoped></style>