import { defineStore } from "pinia";

export const useUi = defineStore('ui state', {
    state: () => ({
        loginModalState: false,
        infoModalState: false,
        registerModalState: false,
        isLoggedIn: false,
        authError: false,
    }),
    getters: {
        isLoginModalOpen: (state) => state.loginModalState,
        isInfoModalOpen: (state) => state.infoModalState,
        isRegisterModalOpen: (state) => state.registerModalState
    },
    actions: {
        toggleLoginModal(): void {
            this.loginModalState = !this.loginModalState;
        },
        toggleInfoModal(): void {
            this.infoModalState = !this.infoModalState;
        },
        toggleRegisterModal(): void {
            this.registerModalState = !this.registerModalState;
        }
    },
});
