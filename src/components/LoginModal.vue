<script setup lang="ts" >
import Overlay from './overlay.vue';
import TextButton from "./TextButton.vue"
import { useUi, useUser } from '../store';
import { reactive } from 'vue';
import { Auth } from "../interfaces/user"

const userStore = useUser();

const user: Auth = reactive({
    email: "",
    password: "",
});


const login = () => {
    userStore.signin(user);
};

const uiStore = useUi();

const toggleModal = () => {
    uiStore.toggleLoginModal();
}

const openRegister = () => {
    uiStore.toggleLoginModal();
    uiStore.toggleRegisterModal();
};

</script>

<template>
    <Overlay @close-dialog="toggleModal">
        <div class="login-modal">
            <div class="toolbar">
                <h3 class="error" v-if="uiStore.authError"> Invalid credential Invalid credentialss </h3>
                <h3 v-else>Login</h3> <button @click="toggleModal"
                    class="close-button material-symbols-outlined">close</button>
            </div>
            <div class="form">
                <input v-model="user.email" type="email" placeholder="e-mail">
                <input v-model="user.password" type="password" placeholder="password">
                <i>Forgot password</i>
            </div>
            <div class="actions">
                <TextButton @click="login"> Login </TextButton>
            </div>
            <i @click="openRegister">Register</i>
        </div>
    </Overlay>
</template>

<style scoped>
.login-modal {
    background-color: #001220;
    width: 30%;
    height: 45vh;
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    text-align: center;
    flex-direction: column;
}

.error {
    color: tomato;
}

.toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

i {
    color: grey;
    font-style: normal;
    font-size: 0.9rem;
    cursor: pointer;
}

.login-modal .form {
    display: flex;
    height: 100%;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
}

.actions {
    display: flex;
    align-items: center;
    justify-content: center;
}

.close-button {
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
}

.close-button:hover {
    color: tomato;
    font-weight: bold;
}

.actions button {
    width: 90%;
    cursor: pointer;
    height: 2rem;
}

input {
    height: 2.4rem;
    outline: none;
    border-radius: 0.5rem;
    border: none;
    font-size: 1.3rem;
    color: rgb(67, 80, 111);
    text-align: center;
}
</style>
