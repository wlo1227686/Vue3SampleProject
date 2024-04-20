<script setup lang="ts" name="Dashboard">

</script>

<template>
    <div>
        <!-- vuetify -->
        <v-app class="col">
            <v-container>
                <v-row justify="center">

                    <v-col cols="12" md="4" sm="6">
                        <RouterLink to="/baseline" custom v-slot="{ navigate }">
                            <v-btn @click="navigate" role="link" rounded="xs" size="x-large" block>Baseline</v-btn>
                        </RouterLink>
                    </v-col>

                    <v-col cols="12" md="4" sm="6">
                        <RouterLink to="/extendedToolbar" custom v-slot="{ navigate }">
                            <v-btn @click="navigate" role="link" rounded="xs" size="x-large"
                                block>ExtendedToolbar</v-btn>
                        </RouterLink>
                    </v-col>

                    <v-col cols="12" md="4" sm="6">
                        <RouterLink to="/systemBar" custom v-slot="{ navigate }">
                            <v-btn @click="navigate" role="link" rounded="xs" size="x-large" block>SystemBar</v-btn>
                        </RouterLink>
                    </v-col>

                    <v-col cols="12" md="4" sm="6">
                        <RouterLink to="/inbox" custom v-slot="{ navigate }">
                            <v-btn @click="navigate" role="link" rounded="xs" size="x-large" block>Inbox</v-btn>
                        </RouterLink>
                    </v-col>

                    <v-col cols="12" md="4" sm="6">
                        <RouterLink to="/constrained" custom v-slot="{ navigate }">
                            <v-btn @click="navigate" role="link" rounded="xs" size="x-large" block>Constrained</v-btn>
                        </RouterLink>

                    </v-col>
                    <v-col cols="12" md="4" sm="6">
                        <RouterLink to="/sideNavigation" custom v-slot="{ navigate }">
                            <v-btn @click="navigate" role="link" rounded="xs" size="x-large"
                                block>SideNavigation</v-btn>
                        </RouterLink>
                    </v-col>

                    <v-col cols="12" md="4" sm="6">
                        <RouterLink to="/threeColumn" custom v-slot="{ navigate }">
                            <v-btn @click="navigate" role="link" rounded="xs" size="x-large" block>ThreeColumn</v-btn>
                        </RouterLink>
                    </v-col>

                </v-row>
            </v-container>
        </v-app>

    </div>
</template>

<style lang="scss" scoped></style>