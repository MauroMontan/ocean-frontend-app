<script setup lang="ts">
import IconButton from "./IconButton.vue"
import { useUi } from '../store';

const uiStore = useUi();

const toggleInfo = () => {
    uiStore.toggleInfoModal();
};

const toggleLogin = () => {
    uiStore.toggleLoginModal();
}
</script>

<template>
    <div class="appbar">
        <div class="brand">
            <IconButton @click="toggleInfo" icon="account_circle" />
            <h1>Plasctic</h1>
        </div>
        <div class="links">
            <ul>
                <li>About us</li>
                <li>What we do</li>
                <li>Users rank</li>
                <li>Register</li>
            </ul>
            <IconButton @click="toggleLogin" icon="login" />
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

.brand button {
    background: none;
    font-size: 2rem;
    outline: none;
    border: none;
    cursor: pointer;
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
