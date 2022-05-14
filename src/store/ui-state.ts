import { defineStore } from "pinia";

export const useUi = defineStore('ui state', {
    state: () => ({
        loginModalState: false,
    }),
    getters: {
        isLoginModalOpen: (state) => state.loginModalState
    },
    actions: {
        toggleLoginModal(): void {
            this.loginModalState = !this.loginModalState;
        }
    },
});
