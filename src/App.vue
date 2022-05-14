<script setup lang="ts">
import { computed } from 'vue';
import MainLayout from './components/MainLayout.vue';
import Appbar from "./components/Appbar.vue";
import CustomFooter from "./components/footer.vue";
import LoginModal from './components/LoginModal.vue'
import UserInfo from './components/userInfo.vue';
import { useUi } from "./store";

const uiStore = useUi();

const loginModalState = computed(() => {
    return uiStore.isLoginModalOpen;
});

const infoModalState = computed(() => {
    return uiStore.isInfoModalOpen;
});
</script>

<template>
    <UserInfo v-if="infoModalState" />
    <LoginModal v-if="loginModalState" />
    <MainLayout>
        <template v-slot:appbar>
            <Appbar />
        </template>
        <router-view></router-view>
        <template v-slot:footer>
            <CustomFooter />
        </template>
    </MainLayout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: white;
}

#app {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: black;
    background-image: url("./assets/background.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
