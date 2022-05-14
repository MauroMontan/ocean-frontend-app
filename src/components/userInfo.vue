<script setup lang="ts" >
import Overlay from './overlay.vue';
import { useUi } from '../store';
const uiStore = useUi();

const toggleModal = (): void => {
    uiStore.toggleInfoModal();
}
</script>

<template>
    <Overlay @close-dialog="toggleModal">
        <div class="user-info">
            <div class="picture">
                <div class="frame">
                    <img src="../assets/avat_placeholder.png" alt="avatar generated with getAvataaars">
                </div>
            </div>
            <div class="info">
                <div class="earned">
                    <div class="prizes">
                        <i class="fa-solid fa-trophy"></i> 4
                        <i class="fa-solid fa-weight-hanging"></i> 20
                    </div>
                </div>
                <input type="text" placeholder="username">
                <input type="text" placeholder="name">
                <div class="birth">
                    <i class="fa-solid fa-cake-candles"></i>
                    <input type="date" placeholder="birthday">
                </div>
                <input type="text" placeholder="adress">
                <div class="actions">
                    <button> update </button>
                </div>
            </div>
        </div>
    </Overlay>
</template>

<style scoped>
.user-info {
    background-color: black;
    width: 50%;
    height: fit-content;
    border-radius: 1rem;
    display: grid;
    gap: 1rem;
    padding: 0.5rem;
    grid-template-columns: repeat(2, 1fr);
}

.birth {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.birth input[type=date] {
    width: 100%;
    height: 2rem;
}

.earned {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.earned .prizes {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.earned .prizes i {
    color: yellow;
}

.info {
    display: grid;
    gap: 1rem;
    padding: 1rem;
}


label {
    display: inline-block;
}

.picture {
    display: flex;
    align-items: center;
    justify-content: center;
}

.picture .frame {
    width: 15rem;
    height: 15rem;
    border: solid 3px white;
    border-radius: 50%;
    overflow: hidden;
}

.picture .frame img {
    object-position: center;
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.actions {
    display: flex;
    align-items: center;
    justify-content: end;
}

.actions button {
    background-color: red;
    outline: none;
    border: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
}

input {
    border: none;
    color: red;
    outline: none;
    border-radius: 0.5rem;
    height: 2rem;
    text-align: center;
}
</style>
