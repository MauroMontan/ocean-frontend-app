<script setup lang="ts" >
import Overlay from './overlay.vue';</script>

<template>
    <Overlay>
        <div class="login-modal">
            <div class="toolbar">
                <h3>Login</h3> <button class="close-button material-symbols-outlined">close</button>
            </div>
            <div class="form">
                <input type="text" placeholder="e mail">
                <input type="text" placeholder="password">
                <i>Forgot password</i>
            </div>
            <div class="actions">
                <button>login</button>
            </div>
            <i>Register</i>
        </div>
    </Overlay>
</template>

<style scoped>
.login-modal {
    background-color: black;
    width: 30%;
    height: 45vh;
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    text-align: center;
    flex-direction: column;
}

.toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

i {
    color: grey;
    font-style: normal;
    font-size:0.9rem;
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
    background-color: red;
    border-radius: 0.5rem;
    height: 2rem;
    width: 90%;
    outline: none;
    border: none;
    cursor: pointer;
}

input {
    height: 2.4rem;
    outline: none;
    border-radius: 0.5rem;
    border: none;
    text-align: center;
}
</style>
