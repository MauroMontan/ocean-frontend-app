<script setup lang="ts" >
import Overlay from "./overlay.vue";
import { useUi,useUser } from "../store";
import IconButton from "./IconButton.vue";
import TextButton from "./TextButton.vue";
import { Auth } from "../interfaces/user";
import { reactive } from "vue";

const uiStore = useUi();
const userStore = useUser();

const user: Auth = reactive({
    name: "",
    email: "",
    phone_number: null,
    password: "",
    username: "",
    adress: "",
    birth:null,
});


const register = () =>{
    userStore.register(user);
};

const toggleModal = () => {
    uiStore.toggleRegisterModal();
};
</script>

<template>
    <Overlay @close-dialog="toggleModal">
        <div class="register-modal">
            <div class="toolbar">
                <h3>Register</h3>
                <IconButton @click="toggleModal" icon="close" />
            </div>
            <div class="form">
                <input v-model="user.email" type="email" placeholder="e-mail">
                <input v-model="user.name" type="text" placeholder="name">
                <input v-model="user.username" type="text" placeholder="username">
                <input v-model="user.phone_number" type="number" placeholder="phone number">
                <div class="birth">
                    <i class="fa-solid fa-cake-candles"></i>
                    <input v-model="user.birth" type="date" placeholder="birthday">
                </div>
                <input v-model="user.adress" type="text" placeholder="adress (optional)">
                
                <input v-model="user.password" type="password" placeholder="password">
            </div>
            <div class="actions">
                <TextButton @click="register" > Register </TextButton>
            </div>
        </div>
    </Overlay>
</template>

<style scoped >
.register-modal {
    width: 35vw;
    height: 65vh;
    background-color: black;
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    background-color: rgb(0, 18, 32);

}

.toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.actions {
    display: flex;
    align-items: center;
    justify-content: end;
}

.form {
    width: 100%;
    height: 100%;
    padding: 0.5rem 1rem;
    display: grid;
    gap: 0.5rem;
}

input {
    text-align: center;
    height: 2.6rem;
    font-size: 1.5rem;
    color: rgb(67, 80, 111);
    outline: none;
    border: none;
    border-radius: 0.5rem;
}

input::placeholder {
    color: #78C4CB;
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
</style>
