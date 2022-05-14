import { defineStore } from "pinia";

export const useUi = defineStore('ui state', {
    state: () => ({
        loginModalState: false,
        infoModalState:false
    }),
    getters: {
        isLoginModalOpen: (state) => state.loginModalState, 
        isInfoModalOpen: (state) => state.infoModalState
    },
    actions: {
        toggleLoginModal(): void {
            this.loginModalState = !this.loginModalState;
        },
        toggleInfoModal(): void {
            this.infoModalState = !this.infoModalState;
        }
    },
});
