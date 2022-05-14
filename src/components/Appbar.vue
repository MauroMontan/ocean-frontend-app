<script setup lang="ts">
import { useUi } from '../store';

const uiStore = useUi();

</script>

<template>
    <div class="appbar">
        <div class="brand">
            <h1>Plasctic</h1>
        </div>
        <div class="links">
            <ul>
                <li>About us</li>
                <li>What we do</li>
                <li>Our users</li>
                <li>Register</li>
            </ul>
            <button @click="uiStore.toggleLoginModal" class="material-symbols-outlined">login</button>
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
