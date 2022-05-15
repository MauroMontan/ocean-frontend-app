<script setup lang="ts">
import IconButton from "./IconButton.vue"
import { useUi, useUser } from '../store';

const userStore = useUser();
const uiStore = useUi();


const toggleInfo = () => {
    uiStore.toggleInfoModal();
};

const logOut = () => {
    userStore.signout();
};

const toggleLogin = () => {
    uiStore.toggleLoginModal();
}
const toggleRegister = () => {
    uiStore.toggleRegisterModal();
};
</script>

<template>
    <div class="appbar">
        <div class="brand">
            <IconButton @click="toggleInfo" icon="account_circle" />
            <h1 class="name">Together by oceans</h1>
        </div>
        <div class="links">
            <ul>
                <li>
                    <router-link to="/about"> About us </router-link>
                </li>
                <li>
                    <router-link to="/rank">Users rank</router-link>
                </li>
                <li @click="toggleRegister">Register</li>
            </ul>

            <IconButton v-if="uiStore.isLoggedIn" @click="logOut" icon="logout" />
            <IconButton v-else @click="toggleLogin" icon="login" />
        </div>
    </div>
</template>

<style scoped >
.appbar {
    height: 100%;
    padding: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.brand {
    display: flex;
    gap: 1rem;
}

a{
text-decoration: none;
}
.brand button {
    background: none;
    font-size: 2rem;
    outline: none;
    border: none;
    cursor: pointer;
}

.name {
    color: grey;
}

.links {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.appbar .links ul {
    display: flex;
    gap: 1rem;
    list-style: none;
}

.appbar .links ul li:hover {
    color: yellow;
    cursor: pointer;
}

.appbar .links button {
    border: none;
    background-color: transparent;

    font-size: 2rem;
}

.appbar .links button:hover {
    color: yellow;

}
</style>
